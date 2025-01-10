export default () => {
  return (
    <>
      <section className="w-full h-screen py-6 md:py-12 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl pb-2 dark:text-white">
                  Forever Forward.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight pb-10">
                  The <span className="underline decoration-dashed">Official</span> Website of Ryan Mullin
                </p>
                </div>
                <div className="flex flex-col sm:flex-row content-center justify-center pb-10">
                <a href="/freelance/" className="btn btn-primary mb-2 sm:mb-0 sm:mr-2 text-lg sm:text-xl">
                  Request a consult &rarr;
                </a>
                <a href="/portfolio" className="btn btn-secondary mb-2 sm:mb-0 sm:mr-2 text-lg sm:text-xl">
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
