import { LocalDTO } from "./Local.dto";

export type RestaurantDTO= {
    id: string;
    name: string;
    logo: string;
    locals: LocalDTO[];
    imagePath:string;
  }
  