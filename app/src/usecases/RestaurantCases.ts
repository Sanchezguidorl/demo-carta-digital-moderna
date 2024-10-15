import { RestaurantEntity } from "../domain/entity/Restaurant.entity";
import { RestaurantRepository } from "../domain/repository/Restaurant.repository";
import { RestaurantService } from "../services/RestaurantService";

// Función que obtiene el restaurante y devuelve una instancia de RestaurantService o un error
export async function getRestaurant(
): Promise<RestaurantService> {
    const repository= new RestaurantRepository();
  try {
    const restaurantData: RestaurantEntity = repository.getRestaurant();

    if (!restaurantData) {
      throw new Error("Restaurant no exist.");
    }

    const restaurantService = new RestaurantService(restaurantData);
    return restaurantService;
  } catch (error) {
    throw new Error(`Failed to create RestaurantService: ${error as String}`);
  }
}
