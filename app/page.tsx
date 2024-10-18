import BgImg from "/public/images/localselection_large.avif";
import BgImgMedium from "/public/images/localselection_medium.avif";
import BgImgSmall from "/public/images/localselection_small.avif";
import SelectioLocalsList from "./src/infraestructure/components/layouts/SelectioLocalsList";

export default function Home() {
  return (
    <main className="fade-in bg-red-300 h-full text-red-950 flex flex-col justify-center relative text-center max-h-[100vh] overflow-hidden">
      <img 
        src={BgImg.src} 
        srcSet={`${BgImgSmall.src} 480w, ${BgImgMedium.src} 768w, ${BgImg.src} 1200w`} 
        className="absolute min-h-full min-w-full -z-0 " 
        alt="" 
      />
      <SelectioLocalsList/>
    </main>
  );
}
