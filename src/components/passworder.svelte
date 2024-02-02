<script>
	let allowedAccess = false;
	let currentPW = "";
	export let password;
	let triesLeft = 10
	function checkAccess() {
		allowedAccess = currentPW === password;
		if (!allowedAccess) {
			triesLeft -= 1
			if (triesLeft === 0) window.location.href = "/"
			alert(`WRONG! You have ${triesLeft} attempts left.`)
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
	"emoji-frown"
]
</script>

{#if allowedAccess}
	<slot>
		<div class='flex content-center justify-center p-4 text-9xl text-red-600'>
			<i class={`bi bi-${randomInArray(icons)}`}></i>
		</div>
		<div class='flex content-center justify-center p-4 text-9xl text-red-600'>
			<h2 class='text-center font-bold text-4xl text-red-600'>Content Not Found</h2>
		</div>
	</slot>
{:else}
	<div class='flex content-center justify-center p-4 text-9xl text-red-600'>
		<i class={`bi bi-${randomInArray(icons)}`}></i>
	</div>
	<div class='flex content-center justify-center p-4 text-9xl text-red-600'>
		<h2 class='text-center font-bold text-4xl text-red-600'>Please Enter the Password</h2>
	</div>
	<div class='flex content-center justify-center p-4 text-9xl text-red-600'>
		<h3 class='text-center font-bold text-3xl text-red-600'>If you would like access, please email <a href="mailto:rpmullin17@gmail.com?subject=I want access">Ryan Mullin</a></h3>
	</div>
	<form on:submit|preventDefault={checkAccess}>
		<div class="p-10">
			<input type="password" bind:value={currentPW} class="form-control input-group" placeholder="ENTER THE PASSWORD">
		</div>
		<div class="flex content-center justify-center p-4">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
{/if}
