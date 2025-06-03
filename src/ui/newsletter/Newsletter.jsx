function Newsletter() {
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem] bg-gray-200">
      <div className="flex flex-col items-center px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8 py-[5rem]">
        <h2 className="text-xl font-semibold leading-snug text-center sm:text-2xl lg:text-3xl max-w-auto md:max-w-full">
          Stay up to date with our newsletter.
        </h2>
        <p className="pt-5 text-center text-gray-600 text-sm/6">
          Get the latest updates, news and trends in Pixelmine research and
          developements.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5 max-w-[30rem] w-full pt-5">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full md:w-[80%] p-2.5 mt-1 border rounded-lg text-sm bg-gray-50  dark:text-white"
          />
          <button className="w-full md:w-[30%] text-sm text-center transition-all duration-300 ease-in-out border rounded-lg group  md:me-2 p-2.5 bg-primary text-white border-primary hover:bg-primary/80">
            Subscribe now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
