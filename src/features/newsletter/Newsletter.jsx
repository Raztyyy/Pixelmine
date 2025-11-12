import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useLanguage } from "../../context/LanguageContext";
import { FadeSlideUp } from "../../animations/AnimatedWrappers";
import Button from "../../ui/Button";

function Newsletter() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const data = fetcher.data;

  const { language } = useLanguage();
  const isEN = language === "en";

  // Show toast on success or error
  useEffect(() => {
    if (data?.type === "success") {
      showToast(data.message, "success");
    } else if (data?.type === "error") {
      showToast(data.message, "error");
    }
  }, [data]);

  return (
    <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
      {/* Animated Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dotted Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Gradient Blobs */}
        <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <FadeSlideUp className="relative z-10 flex flex-col items-center px-6 mx-auto max-w-7xl lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
            {isEN ? "Newsletter" : "ニュースレター"}
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold leading-tight text-center text-white md:text-4xl lg:text-4xl drop-shadow-lg">
          {isEN
            ? "Stay up to date with our newsletter"
            : "ニュースレターで最新情報を受け取りましょう"}
        </h2>

        {/* Description */}
        <p className="max-w-2xl mb-10 text-base leading-relaxed text-center md:text-lg text-emerald-50 drop-shadow-md">
          {isEN
            ? "Get the latest updates, news, and trends in Pixelmine research and development."
            : "Pixelmineの研究開発に関する最新情報、ニュース、トレンドを入手できます。"}
        </p>

        {/* Form */}
        <fetcher.Form
          method="post"
          action="/newsletter"
          className="flex flex-col items-center w-full max-w-xl gap-4 md:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            {isEN ? "Email address" : "メールアドレス"}
          </label>

          {/* Input with Glass Effect */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder={isEN ? "Enter your email" : "メールアドレスを入力"}
            required
            disabled={isSubmitting}
            className="w-full p-3.5 text-sm text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg md:flex-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          />

          {/* Submit Button - Matching Hero Style */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex gap-2 group border rounded-lg px-6 py-3.5 text-sm text-center items-center transition-all duration-300 ease-in-out justify-center  ${
              isSubmitting
                ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 font-semibold w-full md:w-auto"
            }`}
          >
            {isSubmitting
              ? isEN
                ? "Submitting..."
                : "送信中..."
              : isEN
              ? "Subscribe now"
              : "今すぐ登録"}
          </button>
        </fetcher.Form>
      </FadeSlideUp>
    </section>
  );
}

export default Newsletter;
