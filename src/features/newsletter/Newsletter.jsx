import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useLanguage } from "../../context/LanguageContext";

// Import animation wrapper
import { FadeSlideUp } from "../../animations/AnimatedWrappers";

function Newsletter() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const data = fetcher.data;

  const { language } = useLanguage(); // get current language
  const isEN = language === "en"; // helper

  // Show toast on success or error
  useEffect(() => {
    if (data?.type === "success") {
      showToast(data.message, "success");
    } else if (data?.type === "error") {
      showToast(data.message, "error");
    }
  }, [data]);

  return (
    <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:bg-stone-950">
      <FadeSlideUp className="flex flex-col items-center px-6 py-20 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-semibold leading-snug text-center sm:text-2xl lg:text-3xl dark:text-stone-50">
          {isEN
            ? "Stay up to date with our newsletter."
            : "ニュースレターで最新情報を受け取りましょう。"}
        </h2>
        <p className="pt-4 text-base text-center text-stone-900 dark:text-stone-50">
          {isEN
            ? "Get the latest updates, news, and trends in Pixelmine research and development."
            : "Pixelmineの研究開発に関する最新情報、ニュース、トレンドを入手できます。"}
        </p>

        <fetcher.Form
          method="post"
          action="/newsletter"
          className="flex flex-col items-center w-full max-w-md gap-4 pt-6 md:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            {isEN ? "Email address" : "メールアドレス"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={isEN ? "Enter your email" : "メールアドレスを入力"}
            required
            disabled={isSubmitting}
            className="w-full md:flex-1 p-2.5 border rounded-lg text-sm bg-white text-gray-800"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-6 py-2.5 text-sm font-medium text-white border rounded-lg transition ${
              isSubmitting
                ? "bg-gray-400 border-gray-400"
                : "bg-primary border-primary hover:bg-primary/80"
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
