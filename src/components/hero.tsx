export default () => {
  return (
    <>
      <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl pb-2 dark:text-white">
                  Everything Ryan, <span className="underline">right here.</span>
                </h1>
                <p className="">
                  <div className="font-semibold flex content-center justify-center text-xl lg:text-2xl xl:text-4xl pb-10">
                    How can I help you&nbsp;<i className="highlightText">push what's possbile</i>?
                  </div>
                </p>
              </div>
              <div className="flex content-center justify-center pb-10">
                <a href="/freelance/" className="btn btn-primary">
                  Request a consult &rarr;
                </a> &nbsp; &nbsp;
                <a href="/portfolio" className="btn btn-secondary">
                  See the showcase &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}