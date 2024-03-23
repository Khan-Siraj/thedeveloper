import Image from "next/image";
import { ibm_plex_mono } from "@/app/lib/fonts";
import { ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
export default function Skills() {
  return (
    <main className="w-full h-full p-[128px] bg-skills-pattern bg-center bg-cover">
      <MouseScroll />
      <div className="flex justify-center">
        <div className="w-[960px] h-[432px] flex flex-col items-stretch">
          <div className="w-full h-1/2 flex justify-center ">
            <div className="w-[720px] h-[132px] flex justify-between">
              <div
                className="w-[296px] h-full text-black border-l-[12px]
                     border-css rounded-md py-[16px] pl-[36px] pr-[24px] flex flex-col items-center bg-brand-2 "
              >
                <ComputerDesktopIcon className="w-8 h-8" />
                <div className={ibm_plex_mono.className}>
                    <p className="text-2xl">Web Development</p>
                    <p className="text-base text-center">HTML | CSS | JS | REACT | ANGULAR</p>
                </div>
              </div>
              <div
                className="w-[296px] h-full text-black border-l-[12px]
                     border-css rounded-md py-[16px] pl-[36px] pr-[24px] flex flex-col items-center bg-brand-2 "
              >
                <DevicePhoneMobileIcon className="w-8 h-8" />
                <div className={ibm_plex_mono.className}>
                    <p className="text-2xl">App Development</p>
                    <p className="text-base text-center">Android</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex justify-between">
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-Html.png" alt="icon" width={144} height={144} />
                <p className="text-[32px] text-html text-center">HTML</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-Css.png" alt="icon" width={144} height={144} />
                <p className="text-[32px] text-css text-center">CSS</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-JS.png" alt="icon" width={144} height={144} />
                <p className="text-[32px] text-js text-center">JS</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-React.png" alt="icon" width={144} height={144} />
                <p className="text-[32px] text-react text-center">REACT</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
