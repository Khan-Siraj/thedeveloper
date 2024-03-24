import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
export default function Contact() {
  return (
    <main className="w-full p-5 md:p-5 bg-BG-2">
      <MouseScroll className="hidden md:flex" />
      <div className="flex flex-col items-center gap-y-5">
        <div
          className="border-[3px] 
          w-[220px]
          h-[60px]
          md:w-[407px] 
          md:h-[74px] 
          md:px-[40px] 
          py-[16px] 
          rounded-tl-[40px] 
          rounded-br-[40px] 
          flex 
          items-center 
          justify-center 
          md:mb-12 border-brand-1"
        >
          <h2 className="md:text-3xl text-base">Send Me A Message</h2>
        </div>
        <div className="flex w-full gap-y-5 md:gap-y-0 flex-col md:flex-row md:w-[1120px] md:mb-16">
          <div className="flex flex-col gap-4 w-full md:w-[496px] h-[68px] mr-5">
            <label htmlFor="name" className="text-xl text-brand-1">
              Your name <sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border-b bg-inherit w-full pb-2 outline-none text-xl"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[496px] h-[68px]">
            <label htmlFor="name" className="text-xl text-brand-1">
              Your email <sup>*</sup>
            </label>
            <input
              type="email"
              name="name"
              id="name"
              required
              className="border-b bg-inherit w-full pb-2 outline-none text-xl"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex w-full md:w-[1120px] mb-16">
          <div className="flex flex-col gap-4 w-full h-[68px]">
            <label htmlFor="name" className="text-xl text-brand-1">
              Your message <sup>*</sup>
            </label>
            <textarea
              name="name"
              id="name"
              required
              className="border-b bg-inherit w-full pb-2 outline-none text-xl"
              placeholder="Enter your needs"
            />
          </div>
        </div>
        <div>
          <button className="text-[20px] flex justify-center items-center gap-3 bg-brand-1 w-[227px] shadow-sm text-black text-center p-3 rounded-[40px]">
            <span>Send Message</span>{" "}
            <PaperAirplaneIcon className="w-6 h-6 rotate-[-45deg]" />
          </button>
        </div>
      </div>
    </main>
  );
}
