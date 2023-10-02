import TypeIt from "typeit-react"
export default () => (
  
  <div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Bring your ideas <span className="highlightText">to life.</span>
      </h1>
      <p className="mt-6 text-lg leading-8">
        Whether you want a <TypeIt options={{
          speed: 100,
          waitUntilVisible: true,
          loop: true
        }} getBeforeInit={(instance) => {
          instance
            .type("blog")
            .pause(750)
            .delete(4)
            .type("e-commerce site")
            .pause(750)
            .delete(15)
            .type("app")
            .pause(750)
            .delete(3)
            .type("portfolio")
            .pause(750)
            .delete(9)
            .type("marketing site")
            .pause(750)
            .delete(19)
            .type("information site")
            .pause(750)
            .delete(16)
            .type("website")
            .pause(750)
            .delete(7)
          return instance;
        }
        }/>, Ryan has you covered.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/freelance/get-started"
          className="btn btn-primary"
        >
          Get started
        </a>
        <a href="/portfolio" className="text-sm font-semibold leading-6 link link-info">
          See past projects <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
</div>
)