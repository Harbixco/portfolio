import { useForm, ValidationError } from "@formspree/react";

export default function FillForm() {
  const [state, handleSubmit] = useForm("meqyknez");
  if (state.succeeded) {
    return (
      <div className="flex justify-center text-2xl text-blue-600 dark:text-white font-semibold pt-20 ">
        Thanks, Message sent!
      </div>
    );
  }
  return (
    <>
      <div className="dark:text-white text-blue-600 inknut-antiqua-medium text-center text-2xl my-2 font-semibold">
        Fill the form below to message me.
      </div>
      <div className="flex justify-center pt-6">
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              className="w-96"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="p-2">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-96"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="p-2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-96 h-32"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="border-solid border-gray-600 rounded dark:bg-white dark:text-black text-white bg-blue-600 px-5 py-1 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
