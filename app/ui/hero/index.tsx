import { ibm_plex_mono } from "@/app/lib/fonts";
import InfoCard from "./info-card";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Header from "@/app/ui/header";

export default function Hero() {
  return (
    <main className="w-full bg-BG-1">
      <Header />
      <div className="px-3 md:px-5 py-8 md:py-12 flex flex-col">
      <h1
        className=" text-4xl md:text-7xl text-center font-medium mb-12 text-brand-1 hidden md:block"
      >
        Developer
      </h1>
      <div className="px-3 md:px-5 gap-y-4 md:gap-y-0 flex flex-col md:flex-row md:gap-x-8 h-full items-center">
        <div>
          <InfoCard />
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center">
          <div>
            <small className="text-xs md:text-sm text-brand-1">
              &lt;h1&gt;
            </small>
            <h1 className="text-2xl md:text-4xl pl-3 ">
              Hey <br />
              I'm <span className="text-brand-1">Siraj</span>, <br />
              Full-Stack Developer
              <small  className="text-xs md:text-sm text-brand-1">
                &lt;h1/&gt;
              </small>
            </h1>
            <small  className=" text-xs md:text-sm text-brand-1">
              &lt;p&gt;
            </small>
            <p className={`${ibm_plex_mono.className} pl-3 text-xs md:text-base`}>
              I help business grow by crafting amazing web experience. If you're
              looking for a developer that likes to get stuff done.
            </p>
            <small  className="text-xs md:text-sm text-brand-1">
              &lt;p&gt;
            </small>
            <div
              
              className={`${ibm_plex_mono.className} pl-3 text-xl md:text-3xl mt-3 font-bold flex justify-center md:justify-start items-center gap-4 text-brand-1`}
            >
              <span>Let's Talk</span>{" "}
              <div className="w-5 h-5 md:w-12 md:h-12 p-1 md:p-2 rounded-full bg-slate-600 flex items-center justify-center">
                <EnvelopeIcon className="w-4 h-4 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="w-[120px] h-[200px] md:w-[215px] md:h-[378px] flex items-center flex-col gap-y-5 md:gap-y-[48px] rounded-[40px] md:rounded-[80px] p-4 md:p-[32px] bg-BG-2"
            >
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-2xl md:text-5xl" >
                  4
                </h2>
                <p className="text-xs md:text-base">Programming Language</p>
              </div>
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-2xl md:text-5xl" >
                  6
                </h2>
                <p className="text-xs md:text-base">Development Tools</p>
              </div>
              <div
                className={`${ibm_plex_mono.className} flex items-center justify-between gap-x-2`}
              >
                <h2 className="text-2xl md:text-5xl" >
                  8
                </h2>
                <p className="text-xs md:text-base">Years of Experiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
