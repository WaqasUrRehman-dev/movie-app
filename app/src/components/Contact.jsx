import React from 'react'

export default function Contact() {
  document.title = "Movie App | Contact";
  return (
    <div id="contact" className="w-full h-auto py-6">
      <div className="lg:w-1/2 mx-auto p-6">
        <h1 className="text-center text-4xl font-bold text-zinc-500">
          Contact Us
        </h1>
        <form action="#" className="lg:w-[75%] lg:mx-auto">
          <div className="pt-10">
            <label htmlFor="name" className="text-xl text-zinc-400 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-500 border-b-2 border-gray-300 outline-none bg-transparent "
              placeholder="Enter Your Name"
              autoComplete="off"
            />
          </div>
          <div className="pt-6">
            <label htmlFor="email" className="text-xl text-zinc-400 font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-500 border-b-2 border-gray-300 outline-none bg-transparent "
              placeholder="Enter Your Email"
              autoComplete="off"
            />
          </div>
          <div className="pt-6">
            <label
              htmlFor="message"
              className="text-xl text-zinc-400 font-semibold"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="1"
              placeholder="Give your valuable feedback"
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-500 border-b-2 border-gray-300 outline-none bg-transparent "
            ></textarea>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="px-12 py-3 text-xl font-semibold text-white bg-gradient-to-r from-[#005c97] to-[#363795] rounded-full">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
