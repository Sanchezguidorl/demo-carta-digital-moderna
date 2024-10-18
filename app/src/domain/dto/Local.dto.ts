import { CategoryDTO } from "./Category.dto";
import { PlateDTO } from "./Plate.dto";

export type LocalDTO= {
    id: string;
    name: string;
    coverImage: string;
    categories: CategoryDTO[];
    plates:PlateDTO[];
    imagePath:string;
  }
  