import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmail("");
      setSubmitted(true);
      setError("");
    } else {
      setError("Enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="w-full md:w-3/5 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Get Updates
      </h1>
      <p className="mb-4 text-center">
        Stay Informed with the Latest News and Announcements
      </p>
      {submitted ? (
        <p className="text-green-500 text-center">Successfully submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;
