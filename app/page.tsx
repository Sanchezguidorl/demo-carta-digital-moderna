import Image from "next/image";
import BgImg from "/public/images/localselection_large.webp";
import BgImgMedium from "/public/images/localselection_medium.webp";
import BgImgSmall from "/public/images/localselection_small.webp";
import SelectioLocalsList from "./src/infraestructure/components/layouts/SelectioLocalsList";

export default function Home() {
  return (
    <main className="fade-in bg-red-300 h-full text-red-950 flex flex-col justify-center relative text-center max-h-[100vh] overflow-hidden">
      <Image 
        src={BgImg} 
        srcset={`${BgImgSmall} 480w, ${BgImgMedium} 768w, ${BgImg} 1200w`}
        loading="eager" 
        className="absolute min-h-full min-w-full -z-0 " 
        alt="" 
      />
      <SelectioLocalsList/>
    </main>
  );
}
