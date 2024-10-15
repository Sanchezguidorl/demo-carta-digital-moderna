import { PlateDTO } from "./Plate.dto";

export type CategoryDTO= {
    id: string;
    name: string;
    image: string;
    plates: PlateDTO[];
  }
  