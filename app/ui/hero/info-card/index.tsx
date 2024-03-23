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
                w-[320px] h-[520px]
                border-t-[4px] 
                border-l-[4px] 
                rounded-tl-[160px] 
                relative border-brand-1
                "
      >
        <div
          className="w-[320px] h-[520px] 
                    border-[4px] 
                    rounded-tl-[160px] 
                    rounded-br-[160px] absolute top-[-1.5px] left-[-1px]
                    flex justify-center
                    "
        >
          <div className="w-full h-full p-5 flex flex-col justify-around">
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={96}
                height={96}
                className="object-fill border-[3px] rounded-full border-brand-1"
              />
              <h2
                className={`${ibm_plex_mono.className} text-[32px] font-extrabold`}
              >
                Siraj
              </h2>
              <small className={`${ibm_plex_mono.className} text-[14px]`}>
                Full-stack developer
              </small>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <EnvelopeIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-[14px]`}>
                  sirajk78620@gmail.com
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <MapPinIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-[14px]`}>
                  India
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <BriefcaseIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-[14px]`}>
                  Full-time / Freelancer
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <LinkIcon className="w-[14px] h-[14px] text-brand-1" />
                <small className={`${ibm_plex_mono.className} text-[14px]`}>
                  www.thedeveloper.com
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <span
                  className={`${ibm_plex_mono.className} px-2 text-[14px] rounded-[20px] text-black bg-brand-1`}
                >
                  HTML
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-[14px] rounded-[20px] text-black bg-brand-1`}
                >
                  CSS
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-[14px] rounded-[20px] text-black bg-brand-1`}
                >
                  JS
                </span>
                <span
                  className={`${ibm_plex_mono.className} px-2 text-[14px] rounded-[20px] text-black bg-brand-1`}
                >
                  React
                </span>
              </div>
            </div>
            <div className="p-3">
              <button className="bg-white flex justify-center items-center gap-3 text-[20px] w-[227px] shadow-sm text-black text-center p-3 rounded-[40px]">
                <span>Download CV</span>{" "}
                <ArrowDownTrayIcon className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
