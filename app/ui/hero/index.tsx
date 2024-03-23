import { ibm_plex_mono } from "@/app/lib/fonts";
import InfoCard from "./info-card";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Header from "@/app/ui/header";

export default function Hero() {
  return (
    <main className="w-full h-full">
      <Header />
      <div className="px-[128px] py-[64px] flex flex-col">
      <h1
        className="text-[117px] text-center font-medium mb-[64px] text-brand-1"
      >
        Developer
      </h1>
      <div className="px-[128px] flex gap-x-[128px] h-full items-center">
        <div>
          <InfoCard />
        </div>
        <div className="flex items-center">
          <div>
            <small className="text-[14px] text-brand-1">
              &lt;h1&gt;
            </small>
            <h1 className="text-[64px] pl-3 leading-[5.2rem]">
              Hey <br />
              I'm <span >Siraj</span>, <br />
              Full-Stack Developer{" "}
              <small  className="text-[14px] text-brand-1">
                &lt;h1/&gt;
              </small>
            </h1>
            <small  className="text-[14px] text-brand-1">
              &lt;p&gt;
            </small>
            <p className={`${ibm_plex_mono.className} pl-3 text-[16px]`}>
              I help business grow by crafting amazing web experience. If you're
              looking for a developer that likes to get stuff done.
            </p>
            <small  className="text-[14px] text-brand-1">
              &lt;p&gt;
            </small>
            <div
              
              className={`${ibm_plex_mono.className} pl-3 text-[32px] mt-3 font-bold flex items-center gap-4 text-brand-1`}
            >
              <span>Let's Talk</span>{" "}
              <div className="w-12 h-12 p-2 rounded-full bg-slate-600 flex items-center justify-center">
                <EnvelopeIcon className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-[215px] h-[378px] flex flex-col gap-y-[48px] rounded-[80px] p-[32px] bg-BG-2"
            >
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-[48px]" >
                  4
                </h2>
                <p className="text-[16px]">Programming Language</p>
              </div>
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-[48px]" >
                  6
                </h2>
                <p className="text-[16px]">Development Tools</p>
              </div>
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-[48px]" >
                  8
                </h2>
                <p className="text-[16px]">Years of Experiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
