import { IoMdPaperPlane } from "react-icons/io";
import { TbMailCode } from "react-icons/tb";

const ContactForm = () => {
  return (
    <div className=" text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="w-full">
          <h1 className="text-3xl lg:text-3xl font-semibold mb-4 font-rubik text-white/80">
          Let’s Collaborate to Build Something Extraordinary!
          </h1>
          <p className="text-dark-black text-base font-jost mb-6">
            Thanks for visiting! If you have any questions, ideas, or just want
            to connect, don’t hesitate to reach out. Use the details below or
            fill out the quick contact form to send me a message directly. Let’s
            make something extraordinary happen!
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg"><IoMdPaperPlane size={28} className="text-white"/></span>
              <span className="text-lg font-jost text-white/70"><a href="https://github.com/web-mahadihasan" target="blank">@web-mahadihasan</a></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg"><TbMailCode size={24} className="text-white"/></span>
              <span className="text-lg font-jost text-white/70">mehedihasanmilu7@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-2xl space-y-8 backdrop-blur-md bg-[#07184F]/10 dark:bg-[#07184F]/20 p-5 md:p-10 rounded-lg relative before:absolute before:inset-0 before:w-1/2 before:h-1/2 before:bg-purple-800/40 before:rounded-full before:blur-3xl before:-z-40">
          <form>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-base mb-2 font-medium font-rubik text-white/80">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="w-full px-4 py-2 text-white font-normal font-jost tracking-wide rounded"
                />
              </div>
              <div className="flex-1 block text-base mb-2 font-medium font-rubik text-white/80">
                <label htmlFor="lastName" className="block text-sm mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="w-full px-4 py-2 text-white font-normal font-jost tracking-wide rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-base mb-2 font-medium font-rubik text-white/80 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-white font-normal font-jost tracking-wide rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-base mb-2 font-medium font-rubik text-white/80">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full px-4 py-2 text-white font-normal font-jost tracking-wide rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-title-black box-shadow hover:shadow-none font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
