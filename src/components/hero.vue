<template>
  <div class="relative isolate px-6 pt-14 lg:px-8 dark:text-white">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span class="text-gray-600">
                      Read the latest post. <a href="/{{ slug }}" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" /><span aria-hidden="true">&rarr;</span></a>
                    </span>
                  </div>
      </div>
      <div>
                  <h1 id="pwp" class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-white">Pushing What's Possible <p class="bg-primary text-secondary dark:bg-tertiary dark:text-white rounded"> in every aspect of life.</p></h1>
                  <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white sm:text-center" >Here at Ryan Enterprises, we take you further than you could ever imagine. See how we can help your buisness push what's possible.</p>
                  <div class="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="/blog" class="inline-block rounded-lg bg-primary dark:bg-tertiary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                      Read the blog
                      <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                    </a>
                    <a href="/about" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-white  ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      About
                      <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
  </div>
  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true">
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#201191] to-[#00ffff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
  </div>
</div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  #pwp {
    color: white !important
  }
}
</style>