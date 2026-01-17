import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <Featured></Featured>
    </div>
  );
}
