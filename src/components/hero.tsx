export default () => {
  return (
    <>
      <section className="w-full h-screen py-6 md:py-12 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl pb-2 dark:text-white">
                  Everything Ryan, <span className="underline">right here.</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight pb-10">
                  How can I help you&nbsp;<i className="highlightText">push what's possible</i>?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row content-center justify-center pb-10">
                <a href="/freelance/" className="btn btn-primary mb-2 sm:mb-0 sm:mr-2">
                  Request a consult &rarr;
                </a>
                <a href="/portfolio" className="btn btn-secondary">
                  See the showcase &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
