import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Featured from "@/components/Featured";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Swipper from "@/components/Swipper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black space-y-20">
      <Swipper></Swipper>
      {/* <Banner></Banner> */}
      <Featured></Featured>
      <Achievement></Achievement>
      <Comparison></Comparison>
      <Partners></Partners>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
}
