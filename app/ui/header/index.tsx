import { ibm_plex_mono } from "@/app/lib/fonts";

export default function Header(){
    return (
        <main className={`${ibm_plex_mono.className} w-full h-[170px] px-[128px]`}>
            <div className="flex py-[64px] items-center justify-between border-b-[1px] border-c-grey">
                <h1 className="text-[32px] font-semibold">
                    <span className=" text-brand-1">&lt; C /&gt;</span>
                    <span> Siraj Khan</span>
                </h1>
                <div className="flex items-center justify-between gap-x-[64px]">
                    <div>
                        <ul className="flex text-[24px] gap-x-[32px]">
                            <li>Home</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-[64px]">
                        <input type="text" className="w-[204px] h-[32px] rounded-[24px] text-black px-2 text-sm" />
                        <div>
                            <ul className="flex text-[16px] gap-x-[32px]">
                                <li>Instagram</li>
                                <li>Discord</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}