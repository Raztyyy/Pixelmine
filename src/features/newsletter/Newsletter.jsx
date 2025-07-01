import { useEffect } from "react";
import toast from "react-hot-toast";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { showToast } from "../../utils/Toast";

function Newsletter() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // 🔥 Use toast based on action result
  useEffect(() => {
    if (actionData?.error) {
      showToast(actionData.error, "error");
    } else if (actionData?.message) {
      showToast(actionData.message, actionData.type || "success");
    }
  }, [actionData]);

  return (
    <section className="pt-8 pb-8 bg-green-50/50 sm:pt-10 sm:pb-10 dark:bg-stone-950">
      <div className="flex flex-col items-center px-6 py-20 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-semibold leading-snug text-center sm:text-2xl lg:text-3xl dark:text-stone-50">
          Stay up to date with our newsletter.
        </h2>
        <p className="pt-4 text-sm text-center text-gray-600 sm:text-base dark:text-stone-50">
          Get the latest updates, news, and trends in Pixelmine research and
          development.
        </p>

        <Form
          method="post"
          className="flex flex-col items-center w-full max-w-md gap-4 pt-6 md:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
            className="w-full md:flex-1 p-2.5 border rounded-lg text-sm bg-gray-50 text-gray-800"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-6 py-2.5 text-sm font-medium text-white border rounded-lg transition
              ${
                isSubmitting
                  ? "bg-gray-400 border-gray-400"
                  : "bg-primary border-primary hover:bg-primary/80"
              }`}
          >
            {isSubmitting ? "Submitting..." : "Subscribe now"}
          </button>
        </Form>

        {/* Show success or error message below the form */}
        {/* <div className="mt-4 min-h-[1.5rem]">
          {actionData?.error && (
            <p className="text-center text-red-600">{actionData.error}</p>
          )}
          {actionData?.success && (
            <p className="text-center text-green-600">{actionData.success}</p>
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Newsletter;
