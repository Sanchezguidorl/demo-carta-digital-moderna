import StarIcon from "/public/images/starIcon.png";
import Image from "next/image";
import { PlateEntity } from "@/app/src/domain/entity/Plate.entity";

function CardPlate({ plateItem }: { plateItem: PlateEntity }) {
  return (
    <div className="h-24 mb-1 w-full overflow-hidden p-2 px-4 card-plates flex items-center">
<div className=" overflow-hidden w-20 h-20 relative">
<Image
        width={150}
        height={150}
        className=" absolute object-cover w-full  h-full rounded-md"
        src={plateItem.getImage()}
        alt=""
      />
</div>
      <div className=" pl-2 text-xs h-full relative text-black w-full">
        <p className=" text-[0.93rem] pt-1 pr-7">{plateItem.getTitle()}</p>
        <p className=" flex bg-orange-300 z-10 h-5 px-[0.3rem] rounded-full font-bold w-10 gap-[0.12rem] justify-center items-center absolute top-1 -right-1 text-amber-950 font-sans text-[0.65rem] ">
          <Image className=" h-[15px] w-[15px]" src={StarIcon} alt="" />
          <span>
            {plateItem.getScore()}
            </span>
        </p>
        <p className=" text-[0.55rem] text-gray-500 font-sans font-semibold pr-6 leading-[0.65rem] mt-2">
          {plateItem.getDescription()}
        </p>
        <p className=" absolute bottom-0 right-1 text-[0.70rem] font-semibold">
          ${plateItem.getPrice()}
        </p>
      </div>
    </div>
  );
}

export default CardPlate;
