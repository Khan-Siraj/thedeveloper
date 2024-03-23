import Image from "next/image";
export default function MouseScroll() {
  return (
    <div className="flex flex-col justify-center items-center mb-[124px]">
      <Image src="/images/Scroll.png" alt="scroll" width={32} height={140} />
      {/* <h2 style={{color:brand1}} className="text-[64px]">Title</h2> */}
    </div>
  );
}
