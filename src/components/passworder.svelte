<script>
	let allowedAccess = false;
	let currentPW = "";
	export let password;
	let triesLeft = 10;
	let shakeError = false;
	
	function checkAccess() {
		allowedAccess = currentPW === password;
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
		"cone",
		"cone-striped",
		"dash-circle",
		"dash-circle-dotted",
		"dash-circle-fill",
		"dash-square",
		"dash-square-dotted",
		"exclamation-triangle",
		"exclamation-triangle-fill",
		"exclamation",
		"exclamation-circle",
		"exclamation-diamond",
		"exclamation-diamond-fill",
		"exclamation-lg",
		"exclamation-octagon",
		"exclamation-octagon-fill",
		"exclamation-square",
		"exclamation-square-fill",
		"hand-thumbs-down",
		"emoji-frown",
		"explicit",
		"explicit-fill",
		"heartbreak",
		"slash-circle",
		"slash-circle-fill",
		"heartbreak-fill",
		"piggy-bank-fill",
		"piggy-bank",
	];
	
	// Pick a random icon once on mount
	let selectedIcon = randomInArray(icons);
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
					<p class="text-lg text-gray-600 dark:text-gray-400 font-mono">
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
			<div class="rounded-2xl border-2 border-red-600 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
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
						<div class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
							<div class="flex items-center gap-3">
								<i class="bi bi-exclamation-triangle-fill text-red-600 text-2xl"></i>
								<div>
									<p class="font-bold text-red-900 dark:text-red-100">
										Incorrect Password
									</p>
									<p class="text-sm text-red-700 dark:text-red-300 font-mono">
										{triesLeft} {triesLeft === 1 ? 'attempt' : 'attempts'} remaining
									</p>
								</div>
							</div>
						</div>
					{/if}

					<!-- Form -->
					<form on:submit|preventDefault={checkAccess} class="space-y-6">
						<div>
							<label for="password-input" class="block text-sm font-mono text-gray-600 dark:text-gray-400 mb-2">
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

					<!-- Help Text -->
					<div class="pt-6 border-t border-gray-200 dark:border-gray-700">
						<p class="text-center text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
							Need access? 
							<a 
								href="mailto:rpmullin17@gmail.com?subject=Access Request&body=Hi Ryan, I'd like to request access to: ." 
								class="text-blue-600 hover:text-blue-700 font-medium hover:underline inline-flex items-center gap-1"
							>
								Contact Ryan Mullin
								<i class="bi bi-envelope-fill"></i>
							</a>
						</p>
					</div>
				</div>

				<!-- Footer Badge -->
				<div class="bg-gray-50 dark:bg-gray-800/50 px-8 py-4 border-t border-gray-200 dark:border-gray-700">
					<div class="flex items-center justify-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
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
	
	.shake {
		animation: shake 0.5s;
	}
	
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}
	
	.animate-bounce {
		animation: bounce 2s infinite;
	}
	
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}
	
	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>