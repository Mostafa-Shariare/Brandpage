import React from "react";
import { useState } from "react";

const Form = () => {
    const [submittedData, setSubmittedData] = useState(null);

    const handleFormSubmit = (event) => {
        
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
      
     setSubmittedData({ name, email, message });
        
    }
  return (
    <div>
      <section className="form bg bg-black text-white flex flex-col justify-center items-center gap-10 py-10">
        <div className="topbuttons flex flex-col justify-center items-center gap-5">
          {/* Top two buttons */}
          <div className="liner-buttons flex gap-10">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              Contact Via Chat
            </button>
            <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-700 hover:text-white transition">
              Contact Via Phone
            </button>
          </div>

          {/* Email button below */}
          <button
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
            style={{ width: "fit-content" }} // this keeps it from stretching too wide
          >
            Contact Via Email
          </button>
        </div>

        <form
          action=""
          className="flex flex-col gap-4 bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto text-white"
          onSubmit={handleFormSubmit}
          
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-semibold transition"
          >
            Submit
          </button>
          {
            submittedData && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Submitted Data:</h3>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                <p>Message: {submittedData.message}</p>
              </div>
            )
          }
        </form>
      </section>
    </div>
  );
};

export default Form;
