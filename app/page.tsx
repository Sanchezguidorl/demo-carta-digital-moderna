import Image from "next/image";
import BgImg from "/public/images/localselection.jpg";
import SelectioLocalsList from "./src/infraestructure/components/layouts/SelectioLocalsList";

export default function Home() {
  return (
    <main className="fade-in bg-red-300 h-full text-red-950 flex flex-col justify-center relative text-center">
      <Image src={BgImg} className=" absolute min-h-full min-w-full blur-sm -z-0" alt=""/>
      <SelectioLocalsList/>
    </main>
  );
}
