import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbldjnyg");


  return (
    <form
      action="https://formspree.io/f/mbldjnyg"
      onSubmit={handleSubmit}
      method="POST"
      className="php-email-form space-y-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="text-lg">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="form-control text-black w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-lg">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control text-black w-full p-3 border border-gray-300 rounded-md"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="text-lg">
          Queries
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control text-black w-full p-3 border border-gray-300 rounded-md"
          rows="10"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {state.succeeded && (
        <div className="sent-message text-green-500 text-center">
          Your message has been sent. Thank you!
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          className="bg-purple-500 text-white py-3 px-8 rounded-full hover:bg-blue-600"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
