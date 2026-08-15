<script>
	let allowedAccess = $state(false);
	let currentPW = $state("");
	let { passwordHash } = $props();
	let triesLeft = $state(10);
	let shakeError = $state(false);
	import { bogosort } from "../utils/bogosort";
  import BsAlert from "./bsAlert.svelte";
	
	const hashPassword = async (password) => {
		const encoder = new TextEncoder();
		const data = encoder.encode(password);
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	};
	
	const checkAccess = async () => {
		const inputHash = await hashPassword(currentPW);
		allowedAccess = inputHash === passwordHash;
		if (!allowedAccess) {
			triesLeft -= 1;
			shakeError = true;
			setTimeout(() => shakeError = false, 500);
			
			if (triesLeft === 0) {
				window.location.href = "/";
			}
		}
	}
	
	const randomInRange = (min, max) => Math.round(Math.random() * (max - min) + min);
	const randomInArray = (array) => array[randomInRange(0, array.length - 1)];
	
	const icons = [
		"cone", "cone-striped", "dash-circle", "dash-circle-dotted",
		"dash-circle-fill", "dash-square", "dash-square-dotted",
		"exclamation-triangle", "exclamation-triangle-fill", "exclamation",
		"exclamation-circle", "exclamation-diamond", "exclamation-diamond-fill",
		"exclamation-lg", "exclamation-octagon", "exclamation-octagon-fill",
		"exclamation-square", "exclamation-square-fill", "hand-thumbs-down",
		"emoji-frown", "explicit", "explicit-fill", "heartbreak",
		"slash-circle", "slash-circle-fill", "heartbreak-fill",
		"piggy-bank-fill", "piggy-bank",
	];
	
	let selectedIcon = randomInArray(icons);

	let luckyNumbers = $state(Array.from({ length: 10 }, () => randomInRange(1, 100)));
	let gambling = $state(false);
	let gambleStart = $state(0);
	let gambleDuration = $state(0);
	let gambleAttempts = $state(0);
	let currentShuffle = $state([]); // Live view of current shuffle state
	let cheatError = $state(""); // Error message for cheating attempts

	const updateNumber = (index, value) => {
		let n = parseInt(value, 10) || 1;
		if (n < 1) n = 1;
		if (n > 100) n = 100;
		luckyNumbers[index] = n;
		luckyNumbers = luckyNumbers.slice();
		cheatError = ""; // Clear error when user changes numbers
	};

	const randomizeNumbers = () => {
		luckyNumbers = Array.from({ length: 10 }, () => randomInRange(1, 100));
		cheatError = "";
	};

	// Anti-cheat validation
	const validateNumbers = () => {
		const uniqueCount = new Set(luckyNumbers).size;
		
		// Check if all numbers are the same
		if (uniqueCount === 1) {
			return "All numbers are identical. That's too easy!";
		}
		
		// Check if there are too few unique values (less than 5 unique out of 10)
		if (uniqueCount < 5) {
			return `Only ${uniqueCount} unique numbers. Need at least 5 different values.`;
		}
		
		// Check if already sorted (ascending or descending)
		const sorted = [...luckyNumbers].sort((a, b) => a - b);
		const reverseSorted = [...sorted].reverse();
		
		if (JSON.stringify(luckyNumbers) === JSON.stringify(sorted)) {
			return "Numbers are already sorted. Nice try!";
		}
		
		if (JSON.stringify(luckyNumbers) === JSON.stringify(reverseSorted)) {
			return "Numbers are reverse sorted. Still too easy!";
		}
		
		// Check if nearly sorted (only 1-2 elements out of place)
		let outOfPlace = 0;
		for (let i = 0; i < luckyNumbers.length; i++) {
			if (luckyNumbers[i] !== sorted[i]) outOfPlace++;
		}
		if (outOfPlace <= 2) {
			return "Numbers are nearly sorted. Shuffle them more!";
		}
		
		return null; // Valid
	};

	let gambleSuccess = $state(false);
	let gambleError = $state("");

	const startGamble = async () => {
		// Validate before starting
		const validationError = validateNumbers();
		if (validationError) {
			cheatError = validationError;
			shakeError = true;
			setTimeout(() => shakeError = false, 500);
			return;
		}
		
		gambling = true;
		gambleSuccess = false;
		gambleError = "";
		gambleStart = performance.now();
		gambleAttempts = 0;
		currentShuffle = [...luckyNumbers];

		try {
			await bogosort(
				[...luckyNumbers],
				(attempt, currentArray) => {
					gambleAttempts = attempt;
					currentShuffle = [...currentArray];
				},
				Infinity
			);
			
			// Only reaches here if bogosort completes successfully (array sorted)
			gambleSuccess = true;
			allowedAccess = true;
			
		} catch (err) {
			// Reached maxAttempts - no access granted
			gambleError = err instanceof Error ? err.message : "Sorting failed";
			shakeError = true;
			setTimeout(() => shakeError = false, 500);
			
		} finally {
			gambleDuration = Math.round((performance.now() - gambleStart) / 1000);
			gambling = false;
		}
	};
</script>

{#if allowedAccess}
	<slot>
		<div class="gate">
			<div class="gate-inner text-center">
				<div class="gate-icon animate-bounce">
					<i class={`bi bi-${randomInArray(icons)}`}></i>
				</div>
				<h2 class="fw-bold">Content Not Found</h2>
				<p class="font-monospace">
					The content you're looking for doesn't exist or has been removed.
				</p>
			</div>
		</div>
	</slot>
{:else}
	<div class="gate">
		<div class="gate-inner">
			<div class="text-center mb-4">
				<div class="gate-icon animate-pulse">
					<i class={`bi bi-${selectedIcon}`}></i>
				</div>
			</div>

			<div class="gate-card" class:shake={shakeError}>
				<div class="gate-rule"></div>

				<div class="gate-head">
					<h2 class="fw-bold"><i class="bi bi-lock"></i> Protected Content</h2>
					<p class="font-monospace">Authentication Required</p>
				</div>

				<div class="gate-body">
					{#if triesLeft < 10}
						<BsAlert
							type="danger"
							class={shakeError ? 'shake' : ''}
							icon="exclamation-triangle-fill"
							text={'Incorrect Password — ' + triesLeft + ' ' + (triesLeft === 1 ? 'attempt' : 'attempts') + ' remaining'}
						/>
					{/if}

					<form on:submit|preventDefault={checkAccess}>
						<label for="password-input" class="form-label font-monospace">Enter Password</label>
						<input
							id="password-input"
							type="password"
							bind:value={currentPW}
							class="form-control mb-3"
							placeholder="••••••••"
							autocomplete="off"
						/>
						<button type="submit" class="btn btn-primary w-100">
							<i class="bi bi-unlock-fill"></i>
							Unlock Content
						</button>
					</form>

					<div class="gate-gamble">
						<h3 class="fw-bold fs-5">Or... you could gamble your time</h3>

						{#if cheatError}
							<BsAlert type="danger" class="shake" icon="exclamation-circle-fill" text={cheatError} />
						{/if}

						<form on:submit|preventDefault={startGamble}>
							<div class="gate-numbers">
								{#each luckyNumbers as num, i}
									<div>
										<label class="visually-hidden" for={`lucky-${i}`}>Lucky {i + 1}</label>
										<input
											id={`lucky-${i}`}
											type="number"
											min="1"
											max="100"
											value={num}
											on:input={(e) => updateNumber(i, e.target.value)}
											class="form-control text-center"
											disabled={gambling}
										/>
									</div>
								{/each}
							</div>

							{#if gambling}
								<div class="gate-shuffle">
									<div class="d-flex align-items-center justify-content-between font-monospace">
										<span>Current shuffle:</span>
										<span class="d-inline-flex align-items-center gap-1">
											<span class="spinner-border spinner-border-sm"></span>
											Sorting...
										</span>
									</div>
									<div class="gate-tiles">
										{#each currentShuffle as num}
											<div class="gate-tile" style={`background: hsl(${num * 2.4}, 70%, 60%)`}>
												{num}
											</div>
										{/each}
									</div>
									<div class="text-center font-monospace">
										Attempts: {gambleAttempts.toLocaleString()}
									</div>
								</div>
							{/if}

							<div class="d-flex align-items-center gap-3">
								<button type="submit" class="btn btn-success flex-fill" disabled={gambling}>
									{#if gambling}
										<span class="d-inline-flex align-items-center gap-2">
											<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											Gambling...
										</span>
									{:else}
										<i class="bi bi-dice-5-fill"></i>
										Gamble Time
									{/if}
								</button>

								<button type="button" class="btn btn-secondary" on:click={randomizeNumbers} disabled={gambling}>
									<i class="bi bi-shuffle"></i>
									Shuffle
								</button>
							</div>

							<p class="gate-note">
								Pick 10 numbers (at least 5 unique, not pre-sorted) and gamble CPU time. When bogosort finishes, access is granted.
								<br />
								Funny thing about bogosort, it has the possibility of never finishing ever! Or it could finish instantly!
							</p>
						</form>
					</div>

					<p class="gate-help">
						Need access?
						<a href="mailto:rpmullin17@gmail.com?subject=Access Request&body=Hi Ryan, I'd like to request access to: .">
							Contact Ryan Mullin
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.gate {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
	}

	.gate-inner {
		width: 100%;
		max-width: 42rem;
	}

	.gate-icon {
		display: inline-block;
		font-size: 5rem;
		color: var(--grad-red);
	}

	.gate-card {
		border: 1px solid var(--rule);
		overflow: hidden;
	}

	.gate-rule {
		height: 4px;
		background: linear-gradient(
			to right,
			var(--grad-yellow),
			var(--grad-orange),
			var(--grad-red),
			var(--grad-purple),
			var(--grad-blue),
			var(--grad-green)
		);
	}

	.gate-head {
		padding: 1.75rem;
		text-align: center;
		border-bottom: 1px solid var(--rule);
	}

	.gate-head p {
		font-size: 0.8125rem;
		color: var(--ink-3);
		margin: 0.5rem 0 0;
	}

	.gate-body {
		display: grid;
		gap: 1.5rem;
		padding: 1.75rem;
	}

	.gate-gamble {
		display: grid;
		gap: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--rule);
	}

	.gate-gamble form {
		display: grid;
		gap: 1rem;
	}

	.gate-numbers {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.gate-shuffle {
		display: grid;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--paper-sunk);
		font-size: 0.875rem;
	}

	.gate-tiles {
		display: flex;
		justify-content: center;
		gap: 0.25rem;
	}

	.gate-tile {
		width: 2rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: #ffffff;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	.gate-note,
	.gate-help {
		font-size: 0.875rem;
		color: var(--ink-3);
		text-align: center;
		margin: 0;
	}

	.gate-help {
		padding-top: 1.5rem;
		border-top: 1px solid var(--rule);
	}

	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
		20%, 40%, 60%, 80% { transform: translateX(10px); }
	}
	.shake { animation: shake 0.5s; }

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}
	.animate-bounce { animation: bounce 2s infinite; }

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}
	.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
</style>
