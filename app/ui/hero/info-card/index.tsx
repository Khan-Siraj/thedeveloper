import { ibm_plex_mono } from "@/app/lib/fonts";
import Image from "next/image";
import {
  EnvelopeIcon,
  MapPinIcon,
  BriefcaseIcon,
  LinkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
export default function InfoCard() {
  return (
    <main>
      <div
        className="
                w-[200px]
                h-[300px]
                md:w-[300px] 
                md:h-[500px]
                border-t-[4px] 
                border-l-[4px] 
                relative border-brand-1
                rounded-tl-[80px] 
                md:rounded-tl-[140px] 
                "
      >
        <div
          className="
                    w-[200px]
                    h-[300px]
                    md:w-[300px] 
                    md:h-[500px]
                    border-[4px] 
                    rounded-tl-[80px] 
                    rounded-br-[80px] 
                    md:rounded-tl-[140px] 
                    md:rounded-br-[140px] 
                    absolute 
                    top-[-1.5px] 
                    left-[-1px]
                    flex 
                    justify-center
                    "
        >
          <div className="w-full h-full p-3 md:p-5 flex flex-col justify-around">
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={48}
                height={48}
                className="object-fill border-[3px] rounded-full mt-3 border-brand-1 block md:hidden"
              />
              <Image
                src="/profile.jpg"
                alt="profile"
                width={96}
                height={96}
                className="object-fill border-[3px] rounded-full border-brand-1 hidden md:block"
              />
              <h2
                className={`${ibm_plex_mono.className} text-base md:text-[32px] font-extrabold`}
              >
                Siraj
              </h2>
              <small className={`${ibm_plex_mono.className} text-xs md:text-sm`}>
                Full-stack developer
              </small>
            </div>
            <div className="pt-4 flex flex-col gap-y-1 md:gap-y-2">
              <div className="flex gap-3 items-center">
                <EnvelopeIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className}text-sm`}>
                  sirajk78620@gmail.com
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <MapPinIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-xs md:text-sm`}>
                  India
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <BriefcaseIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-xs md:text-sm`}>
                  Full-time / Freelancer
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <LinkIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-xs md:text-sm`}>
                  www.thedeveloper.com
                </small>
              </div>
              <div className="flex gap-1 md:gap-3 items-center">
                <span
                  className={`${ibm_plex_mono.className} px-2 text-xs md:text-sm rounded-[20px] text-black bg-brand-1`}
                >
                  HTML
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-xs md:text-sm rounded-[20px] text-black bg-brand-1`}
                >
                  CSS
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-xs md:text-sm rounded-[20px] text-black bg-brand-1`}
                >
                  JS
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-xs md:text-sm rounded-[20px] text-black bg-brand-1`}
                >
                  React
                </span>
              </div>
            </div>
            <div className="p-3">
              <a href="/docs/resume-siraj.pdf" download className="bg-white flex justify-center items-center gap-3 text-xs md:text-xl w-[127px] md:w-[227px] shadow-sm text-black text-center p-3 rounded-[40px]">
                <span>Download CV</span>
                <ArrowDownTrayIcon className="w-4 h-4 md:w-[20px] md:h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
