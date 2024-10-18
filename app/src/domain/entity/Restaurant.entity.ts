import { RestaurantDTO } from "../dto/Restaurant.dto";
import { LocalEntity } from "./Local.entity";


export class RestaurantEntity {
    id: string;
    name: string;
    logo: string;
    locals: LocalEntity[];
    imagePath: string;
    constructor(data:RestaurantDTO) {
      this.id = data.id;
      this.name = data.name;
      this.logo = data.logo;
      this.locals = data.locals.length>0? data.locals.map((local)=>new LocalEntity(local)):[];
      this.imagePath= data.imagePath;
    }
  }
  