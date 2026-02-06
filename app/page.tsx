"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main
      className={`min-h-screen flex justify-center items-center transition ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* CENTER MOBILE CONTAINER */}
      <div
        className={`w-full max-w-md min-h-screen border ${
          dark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-800">
          <h1 className="font-semibold">DevZoon Feedback</h1>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              dark
                ? "border-gray-600 hover:bg-gray-900"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          {/* FORM */}
          <h2 className="font-semibold mb-4">Submit Feedback</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Feedback title *"
              required
              className={`p-3 rounded-xl border outline-none ${
                dark
                  ? "bg-black border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            />

            <select
              className={`p-3 rounded-xl border outline-none ${
                dark
                  ? "bg-black border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <option>General</option>
              <option>Bug</option>
              <option>Feature Request</option>
              <option>UI Improvement</option>
            </select>

            <textarea
              rows={4}
              placeholder="Description (optional)"
              className={`p-3 rounded-xl border outline-none ${
                dark
                  ? "bg-black border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            />

            <input
              type="text"
              placeholder="Media link (optional)"
              className={`p-3 rounded-xl border outline-none ${
                dark
                  ? "bg-black border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            />

            {/* LIGHT BLUE BUTTON */}
            <button
              className="bg-blue-400 hover:bg-blue-500 transition text-white font-semibold py-3 rounded-xl"
              type="submit"
            >
              Submit Feedback
            </button>
          </form>

          {/* FEEDBACK LIST */}
          <div className="mt-10">
            <h2 className="font-semibold mb-3">Community Feedback</h2>

            <div
              className={`p-4 rounded-xl border ${
                dark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <p className="font-semibold">Example Feedback Title</p>
              <p className="text-sm opacity-70 mt-1">
                Feedback description preview will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
