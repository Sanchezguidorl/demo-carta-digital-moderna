import Image from "next/image";
import BgImg from "/public/images/localselection.webp";
import SelectioLocalsList from "./src/infraestructure/components/layouts/SelectioLocalsList";

export default function Home() {
  return (
    <main className="fade-in bg-red-300 h-full text-red-950 flex flex-col justify-center relative text-center max-h-[100vh] overflow-hidden">
      <Image 
        src={BgImg} 
        loading="eager" 
        className="absolute min-h-full min-w-full -z-0 " 
        alt="" 
      />
      <SelectioLocalsList/>
    </main>
  );
}
