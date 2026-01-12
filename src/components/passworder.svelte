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
		<div class="min-h-screen flex items-center justify-center px-6">
			<div class="max-w-2xl w-full text-center space-y-8">
				<div class="text-9xl text-red-600 animate-bounce">
					<i class={`bi bi-${randomInArray(icons)}`}></i>
				</div>
				<div class="space-y-4">
					<h2 class="font-bold text-4xl md:text-5xl text-red-600">
						Content Not Found
					</h2>
					<p class="text-lg text-gray-600 dark:text-neutral-300 font-mono">
						The content you're looking for doesn't exist or has been removed.
					</p>
				</div>
			</div>
		</div>
	</slot>
{:else}
	<div class="min-h-screen flex items-center justify-center px-6">
		<div class="max-w-2xl w-full">
			<!-- Warning Icon -->
			<div class="text-center mb-8">
				<div class="inline-block text-9xl text-red-600 animate-pulse">
					<i class={`bi bi-${selectedIcon}`}></i>
				</div>
			</div>

			<!-- Main Card -->
			<div class="rounded-2xl border-2 border-red-600  shadow-2xl overflow-hidden"
			     class:shake={shakeError}>
				<!-- Header -->
				<div class="bg-gradient-to-r from-red-600 to-red-700 p-8 text-center">
					<h2 class="font-bold text-3xl md:text-4xl text-white mb-3">
						<span><i class="bi bi-lock"></i></span> Protected Content
					</h2>
					<p class="text-red-100 font-mono text-sm">
						Authentication Required
					</p>
				</div>

				<!-- Content -->
				<div class="p-8 space-y-6">
					<!-- Warning Message -->
					{#if triesLeft < 10}
						<BsAlert
							type="danger"
							class={shakeError ? 'shake' : ''}
							icon="exclamation-triangle-fill"
							text={'Incorrect Password — ' + triesLeft + ' ' + (triesLeft === 1 ? 'attempt' : 'attempts') + ' remaining'}
						/>
					{/if}

					<!-- Form -->
					<form on:submit|preventDefault={checkAccess} class="space-y-6">
						<div>
							<label for="password-input" class="block text-sm font-mono text-gray-600 dark:text-neutral-300 mb-2">
								Enter Password
							</label>
							<input 
								id="password-input"
								type="password" 
								bind:value={currentPW} 
								class="form-control w-full text-lg"
								placeholder="••••••••"
								autocomplete="off"
							/>
						</div>

						<button 
							type="submit" 
							class="btn btn-primary w-full text-lg flex items-center justify-center gap-2"
						>
							<i class="bi bi-unlock-fill"></i>
							Unlock Content
						</button>
					</form>

					<!-- Lucky Numbers Gamble -->
					<div class="space-y-4">
						<h3 class="font-bold text-lg">Or... you could gamble your time</h3>

						<!-- Cheat Error Message -->
						{#if cheatError}
							<BsAlert type="danger" class="shake" icon="exclamation-circle-fill" text={cheatError}/>
						{/if}

						<form on:submit|preventDefault={startGamble} class="space-y-4">
							<div class="grid grid-cols-5 gap-3">
								{#each luckyNumbers as num, i}
									<div>
										<label class="sr-only">Lucky {i + 1}</label>
										<input
											type="number"
											min="1"
											max="100"
											value={num}
											on:input={(e) => updateNumber(i, e.target.value)}
											class="form-control w-full text-center"
											disabled={gambling}
										/>
									</div>
								{/each}
							</div>

							<!-- Live Shuffle Visualization -->
							{#if gambling}
								<div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 space-y-3">
									<div class="flex items-center justify-between text-sm text-gray-600 dark:text-neutral-300">
										<span class="font-mono">Current shuffle:</span>
										<span class="inline-flex items-center gap-1">
											<span class="spinner-border spinner-border-sm"></span>
											Sorting...
										</span>
									</div>
									<div class="flex justify-center gap-1">
										{#each currentShuffle as num, i}
											<div 
												class="w-8 h-12 flex items-center justify-center text-xs font-mono rounded transition-all duration-75"
												style="background: hsl({num * 2.4}, 70%, 60%); color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.3);"
											>
												{num}
											</div>
										{/each}
									</div>
									<div class="text-center text-sm text-gray-700 dark:text-neutral-300 font-mono">
										Attempts: {gambleAttempts.toLocaleString()}
									</div>
								</div>
							{/if}

							<div class="flex items-center gap-3">
								<button type="submit" class="btn btn-success flex-1" disabled={gambling}>
									{#if gambling}
										<span class="inline-flex items-center gap-2">
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

							<div class="text-sm text-center text-gray-600 dark:text-neutral-300">
								Pick 10 numbers (at least 5 unique, not pre-sorted) and gamble CPU time. When bogosort finishes, access is granted.
								<br/>
								Funny thing about bogosort, it has the possibility of never finishing ever! Or it could finish instantly!
							</div>
						</form>
					</div>
					<!-- Help Text -->
					<div class="pt-6 border-t border-gray-200 dark:border-gray-700">
						<p class="text-center text-gray-600 dark:text-neutral-300 text-sm leading-relaxed">
							Need access? 
							<a 
								href="mailto:rpmullin17@gmail.com?subject=Access Request&body=Hi Ryan, I'd like to request access to: ." 
								class="text-primary hover:text-blue-900 font-medium hover:underline inline-flex items-center gap-1"
							>
								Contact Ryan Mullin
								<i class="bi bi-envelope-fill"></i>
							</a>
						</p>
					</div>
				</div>

				<!-- Footer Badge -->
				<div class="bg-gray-50 dark:bg-gray-800/50 px-8 py-4 border-t border-gray-200 dark:border-gray-700">
					<div class="flex items-center justify-center gap-2 text-sm font-mono text-gray-500 dark:text-neutral-300">
						<i class="bi bi-shield-lock-fill"></i>
						<span>Secure</span>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
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