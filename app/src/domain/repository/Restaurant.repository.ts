// Import the necessary Firebase functions
import { doc, getDoc, updateDoc, DocumentSnapshot } from "firebase/firestore";
import { RestaurantEntity } from "../entity/Restaurant.entity";
import {app as db} from "./Firebase.config";
import { RestaurantDTO } from "../dto/Restaurant.dto";

export class RestaurantRepository {
  private collectionName = "restaurant"; // Nombre de la colección en Firestore

  // Método para obtener los datos del restaurante por ID
  public async getRestaurantById(restaurantId: string): Promise<RestaurantEntity> {
    try {
      const restaurantRef = doc(db, this.collectionName, restaurantId);
      const restaurantSnap = await getDoc(restaurantRef);

      if (restaurantSnap.exists()) {
        return this.mapRestaurantData(restaurantSnap);
      } else {
        console.log("Restaurant not found!");
        throw new Error("Restaurant not found!");
      }
    } catch (error) {
      console.error("Error fetching restaurant:", error);
      throw new Error("Restaurant not found!");
    }
  }

  public async updateRestaurantById(restaurantId: string, updatedData: RestaurantDTO): Promise<void> {
    try {
      const restaurantRef = doc(db, this.collectionName, restaurantId);
      console.log(updatedData);
      const query=await updateDoc(restaurantRef, updatedData);
    } catch (error) {
      console.error("Error updating restaurant:", error); // Agregar detalles del error
    }
  }

  // Mapeo de datos de Firestore a la entidad RestaurantEntity
  private mapRestaurantData(restaurantSnap: DocumentSnapshot): RestaurantEntity {
    const data = restaurantSnap.data();
    if (!data) {
      throw new Error("No data found for the restaurant");
    }
    
    // Asegúrate de que el objeto data contenga todas las propiedades requeridas por RestaurantDTO
    const restaurantDTO = {
      id: data.id,
      name: data.name,    // Propiedad 'name' del restaurante
      logo: data.logo,    // Propiedad 'logo' del restaurante
      locals: data.locals, // Propiedad 'locals', que puede ser un array de locales
      imagePath: data.imagePath
    };

    return new RestaurantEntity(restaurantDTO);
  }
}
