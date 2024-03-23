import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
export default function Contact() {
  return (
    <main className="w-full h-full p-[128px] bg-BG-2">
      <MouseScroll />
      <div className="flex flex-col items-center">
        <div
          className="border-[3px] 
          w-[407px] 
          h-[74px] 
          px-[40px] 
          py-[16px] 
          rounded-tl-[40px] 
          rounded-br-[40px] 
          flex 
          items-center 
          justify-center 
          mb-[64px] border-brand-1"
        >
          <h2 className="text-[32px]">Send Me A Message</h2>
        </div>
        <div className="flex w-[1120px] mb-16">
          <div className="flex flex-col gap-4 w-[496px] h-[68px] mr-[128px]">
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
          <div className="flex flex-col gap-4 w-[496px] h-[68px]">
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
        </div>
        <div className="flex w-[1120px] mb-16">
          <div className="flex flex-col gap-4 w-full h-[68px]">
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
