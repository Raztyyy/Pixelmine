function ComingSoon() {
  return (
    <section className="grid min-h-full px-6 py-24 place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <img
          src="../../logo.png"
          alt="Pixelmine Logo"
          className="h-5 mx-auto "
        />
        <p className="pt-10 text-2xl font-semibold text-primary dark:text-green-400 ">
          Coming Soon!
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-balance sm:text-7xl">
          This page is under construction
        </h1>
        <p className="mt-6 text-lg text-gray-500 dark:text-stone-50/80 text-pretty font-regular sm:text-xl/8">
          We're getting ready to launch this page!
        </p>
      </div>
    </section>
  );
}

export default ComingSoon;
