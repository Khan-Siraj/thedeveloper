import Image from "next/image";
import { ibm_plex_mono } from "@/app/lib/fonts";
import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
export default function About() {
  return (
    <main className="w-full p-2 md:p-5 bg-about-pattern bg-center bg-cover">
      <MouseScroll className="hidden md:flex" />
      <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row p-3 md:pl-5 pr-6 md:pr-12 md:h-[545px] justify-center">
        <div className="flex items-center md:items-start flex-col md:w-[880px] h-full md:mr-5">
        <div
          className="
          border-[3px]
          w-[150px]
          h-[50px] 
          md:w-[300px] 
          md:h-[100px] 
          px-5
          py-4
          md:px-[40px] 
          md:py-[16px] 
          rounded-tl-[20px] 
          rounded-br-[20px] 
          md:rounded-tl-[40px] 
          md:rounded-br-[40px] 
          flex 
          items-center 
          justify-center 
          mb-12 border-brand-1"
        >
          <h2 className="text-xl md:text-5xl">About Me</h2>
        </div>
        <div className="w-full rounded-[40px] px-5 md:px-[40px] py-3 md:py-[24px] flex items-start flex-col justify-center bg-BG-1">
            <small className="text-sm mb-4 text-brand-1">&lt;p&gt;</small>
            <div className={`${ibm_plex_mono.className} flex flex-col gap-y-4`}>
                <h2 className="text-base md:text-xl text-brand-1">Hello!</h2>
                <p className="text-sm md:text-base">
                    My name is Siraj and I specialize in web development that utilizes 
                    <span className="text-brand-1"> HTML</span>, <span className="text-brand-1"> CSS</span>, <span className="text-brand-1"> JS</span>, <span className="text-brand-1"> Angular</span>,
                    <span className="text-brand-1"> React</span> and <span className="text-brand-1"> Next.JS</span> etc.
                </p>
                <p className="text-sm md:text-base">
                    I am a highly motivated individual and eternal optimist dedicated to writing clear,
                    concise, robust code that work. Striving to never stop learning and improving.
                </p>
                <p className="text-sm md:text-base">
                    When I'm not coding, I am <span className="text-brand-1"> writing blogs</span>, reading, or picking up some new 
                    hands-on art project like <span className="text-brand-1"> photography</span>.
                </p>
                <p className="text-sm md:text-base">
                  I like to have my perspective and belief system challenged so that I see the world through new eyes.
                </p>
            </div>
            <small className="text-sm mt-4 text-brand-1">&lt;p/&gt;</small>
        </div>
        </div>
        <Image src="/images/about-me-img.png" alt="about" className=" object-contain block md:hidden" width={300} height={300} />
        <Image src="/images/about-me-img.png" alt="about" className=" hidden md:block" width={462} height={556} />
      </div>
    </main>
  );
}
