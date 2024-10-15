import { LocalEntity } from "../domain/entity/Local.entity";
import { RestaurantEntity } from "../domain/entity/Restaurant.entity";

export class RestaurantService {
  private restaurantData: RestaurantEntity;

  constructor(data: RestaurantEntity) {
    this.restaurantData = data;
  }

  // Método para obtener todos los locales
  public getAllLocales(): LocalEntity[] {
    return this.restaurantData.locals; // Devuelve la lista de locales
  }

  // Método para obtener un local por ID
  public getLocalById(id: string): LocalEntity | false {
    return this.restaurantData.locals.find((local) => local.getId() === id) || false;
  }

  // Método para verificar si un local existe
  public localExists(id: string): boolean {
    return this.restaurantData.locals.some((local) => local.getId() === id);
  }
}
