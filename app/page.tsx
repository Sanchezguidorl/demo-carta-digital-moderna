import Image from "next/image";
import BgImg from "/public/images/localselection.jpg";
import SelectioLocalsList from "./src/infraestructure/components/layouts/SelectioLocalsList";

export default function Home() {
  return (
    <main className="fade-in bg-red-300 h-full text-red-950 flex flex-col justify-center relative text-center">
      <Image 
        src={BgImg} 
        loading="eager" 
        className="absolute min-h-full min-w-full blur-sm -z-0 max-h-[100vh]" 
        alt="" 
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" 
      />
      <SelectioLocalsList/>
    </main>
  );
}
