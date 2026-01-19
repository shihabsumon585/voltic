import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Featured from "@/components/Featured";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Swipper from "@/components/Swipper";
import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black space-y-20">
      {/* <div className="space-y-10">
        <UserCard></UserCard>
      <h1>user details server</h1>
      <p>{JSON.stringify(session)}</p>
      </div> */}
      <Swipper></Swipper>
      {/* <Banner></Banner> */}
      <Featured></Featured>
      <Achievement></Achievement>
      <Comparison></Comparison>
      {/* <Partners></Partners> */}
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
}
