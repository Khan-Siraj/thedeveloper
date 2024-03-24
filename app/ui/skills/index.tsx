import Image from "next/image";
import { ibm_plex_mono } from "@/app/lib/fonts";
import { ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import MouseScroll from "@/app/ui/shared-ui/mouse-scroll";
export default function Skills() {
  return (
    <main className="w-full p-2 md:p-5 bg-skills-pattern bg-center bg-cover">
      <MouseScroll className="hidden md:flex" />
      <div className="flex justify-center">
        <div className="w-full md:w-[960px] md:h-[432px] gap-y-4 md:gap-y-0 flex flex-col items-stretch">
          <div className="w-full md:h-1/2 flex justify-center  ">
            <div className="md:w-[720px] md:h-[132px] w-full flex justify-between flex-col md:flex-row gap-y-5">
              <div
                className="w-[296px]  h-full text-black border-l-[12px]
                     border-css rounded-md py-[16px] pl-[36px] pr-[24px] flex flex-col items-center bg-brand-2 "
              >
                <ComputerDesktopIcon className="w-8 h-8" />
                <div className={ibm_plex_mono.className}>
                    <p className="text-base md:text-2xl text-center">Web Development</p>
                    <p className="text-sm md:text-base text-center">HTML | CSS | JS | REACT | ANGULAR</p>
                </div>
              </div>
              <div
                className="w-[296px] h-full text-black border-l-[12px]
                     border-css rounded-md py-[16px] pl-[36px] pr-[24px] flex flex-col items-center bg-brand-2 "
              >
                <DevicePhoneMobileIcon className="w-8 h-8" />
                <div className={ibm_plex_mono.className}>
                    <p className="text-base md:text-2xl text-center">App Development</p>
                    <p className="text-sm md:text-base text-center">Android</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:h-1/2 grid md:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-Html.png" alt="icon" className="block md:hidden" width={80} height={80} />
                <Image src="/images/Icon-Html.png" alt="icon" className=" hidden md:block" width={144} height={144} />
                <p className="text-xl md:text-3xl text-html text-center">HTML</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-Css.png" alt="icon" className="block md:hidden" width={80} height={80} />
                <Image src="/images/Icon-Css.png" alt="icon" className=" hidden md:block" width={144} height={144} />
                <p className="text-xl md:text-3xl text-css text-center">CSS</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-JS.png" alt="icon" className="block md:hidden" width={80} height={80} />
                <Image src="/images/Icon-JS.png" alt="icon" className=" hidden md:block" width={144} height={144} />
                <p className="text-xl md:text-3xl text-js text-center">JS</p>
            </div>
            <div className="flex flex-col items-center ">
                <Image src="/images/Icon-React.png" alt="icon" className="block md:hidden" width={80} height={80} />
                <Image src="/images/Icon-React.png" alt="icon" className=" hidden md:block" width={144} height={144} />
                <p className="text-xl md:text-3xl text-react text-center">REACT</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
