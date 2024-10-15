import { CategoryDTO } from "./Category.dto";

export type LocalDTO= {
    id: string;
    name: string;
    coverImage: string;
    categories: CategoryDTO[];
  }
  