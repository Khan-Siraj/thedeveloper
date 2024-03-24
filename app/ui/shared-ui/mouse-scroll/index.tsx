import Image from "next/image";
import clsx from "clsx";
export default function MouseScroll({className}:any) {
  return (
    <div className={
      clsx('flex justify-center items-center mb-[124px]',className)
    }>
      <Image src="/images/Scroll.png" alt="scroll" width={32} height={140} />
      {/* <h2 style={{color:brand1}} className="text-[64px]">Title</h2> */}
    </div>
  );
}
