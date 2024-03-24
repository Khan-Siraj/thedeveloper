import { ibm_plex_mono } from "@/app/lib/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
export default function Header(){
    return (
        <main className={`${ibm_plex_mono.className} w-full md:h-20 px-3 md:px-5`}>
            <div className="flex py-4 md:py-8 items-center justify-between border-b-[1px] border-c-grey">
                <h1 className="text-xs md:text-3xl font-semibold">
                    <span className=" text-brand-1">&lt; C /&gt;</span>
                    <span> Siraj Khan</span>
                </h1>
                <div className="flex items-center justify-between md:gap-x-[64px]">
                    <div>
                        <ul className="flex text-sm md:text-[24px] gap-4 md:gap-x-[32px]">
                            <li>Home</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="flex items-center md:gap-x-[64px]">
                        <input type="text" className="w-[100px] md:w-[204px] h-[32px] rounded-[24px] text-black px-2 text-sm hidden md:block" />
                        <div className="hidden md:block">
                            <ul className="flex text-[16px] gap-x-[32px]">
                                <li className="flex items-center gap-x-2">
                                    <GlobeAltIcon className="w-4 h-4" />
                                    <span className=" hidden 2xl:block">Instagram</span>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <GlobeAltIcon className="w-4 h-4" />
                                    <span className=" hidden 2xl:block">Linkedin</span>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <GlobeAltIcon className="w-4 h-4" />
                                    <span className=" hidden 2xl:block">Github</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}