import Image from "next/image";
import { ibm_plex_mono } from "@/app/lib/fonts";
import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
export default function About() {
  return (
    <main className="w-full h-full p-[128px] bg-about-pattern bg-center bg-cover">
      <MouseScroll />
      <div className="flex pl-[128px] pr-[64px] h-[545px] justify-center">
        <div className="flex flex-col w-[880px] h-full mr-[128px]">
        <div
          className="border-[3px] 
          w-[367px] 
          h-[104px] 
          px-[40px] 
          py-[16px] 
          rounded-tl-[40px] 
          rounded-br-[40px] 
          flex 
          items-center 
          justify-center 
          mb-[64px] border-brand-1"
        >
          <h2 className="text-[64px]">About Me</h2>
        </div>
        <div className="w-full h-[377px] rounded-[40px] px-[40px] py-[24px] flex items-start flex-col justify-center bg-BG-1">
            <small className="text-[14px] mb-4 text-brand-1">&lt;p&gt;</small>
            <div className={ibm_plex_mono.className}>
                <h2 className="text-[20px] text-brand-1">Hello!</h2>
                <p className="text-[16px]">
                    My name is Siraj and I specialize in web development that utilizes 
                    <span className="text-brand-1"> HTML</span>, <span className="text-brand-1"> CSS</span>, <span className="text-brand-1"> JS</span>, <span className="text-brand-1"> Angular</span>,
                    <span className="text-brand-1"> React</span> and <span className="text-brand-1"> Next.JS</span> etc. <br/>
                    I am a highly motivated individual and eternal optimist dedicated to writing clear,
                    concise, robust code that work. Striving to never stop learning and improving.
                    When I'm not coding, I am <span className="text-brand-1"> writing blogs</span>, reading, or picking up some new 
                    hands-on art project like <span className="text-brand-1"> photography</span>.
                    I like to have my perspective and belief system challenged so that I see the world through new eyes.

                </p>
            </div>
            <small className="text-[14px] mt-4 text-brand-1">&lt;p/&gt;</small>
        </div>
        </div>
        <Image src="/images/about-me-img.png" alt="" width={462} height={556} />
      </div>
    </main>
  );
}
