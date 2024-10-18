

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { LocalEntity } from "../domain/entity/Local.entity";
import { RestaurantEntity } from "../domain/entity/Restaurant.entity";
import { RestaurantRepository } from "../domain/repository/Restaurant.repository";
import { RestaurantService } from "../services/RestaurantService";
import { storageApp } from "../domain/repository/Firebase.config";
import { PlateEntity } from "../domain/entity/Plate.entity";
import { CategoryEntity } from "../domain/entity/Category.entity";


// Función que obtiene el restaurante y devuelve una instancia de RestaurantService o un error
export async function getRestaurant(
): Promise<RestaurantService> {
    const repository= new RestaurantRepository();
  try {
    const restaurantData: RestaurantEntity= await repository.getRestaurantById("YXOB5OndZCJ49y0JM6ul");
    const restaurantService = new RestaurantService(restaurantData);
    return restaurantService;
  } catch (error) {
    throw new Error(`Failed to create RestaurantService: ${error as String}`);
  }
}



export async function saveNewLocal(
  newLocal: LocalEntity,
  service: RestaurantService,
  fileImage: File
) {
  const repository = new RestaurantRepository();
  const storage = storageApp;
  const id= service.getId();
  try {

    if (fileImage) {
      // Generar un nombre único para la imagen
      const imageName =new Date().getMilliseconds()*1000;
      
      // Referencia en Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`);
      
      // Subir la imagen a Firebase Storage
      const snapshot = await uploadBytes(imageRef, fileImage);
      
      // Obtener la URL de la imagen subida
      const imageUrl= await getDownloadURL(imageRef);
      newLocal.setCoverImage(imageUrl);  // Guardar la URL de la imagen en el local
      newLocal.setImagePath(`images/${imageName}`);
    }
    service.addLocal(newLocal);
    console.log(service.getLocalById(newLocal.getId()));
    // Actualizar el restaurante en la base de datos
    await repository.updateRestaurantById(id,service.getDto() );
    console.log("Restaurant updated successfully");
  } catch (error) {
    console.error("Failed to update restaurant:", error);
  }
}

export async function updateDataRestaurantById(
  id: string,
  newLocal: LocalEntity,
  service: RestaurantService,
  fileImage: File
) {
  const repository = new RestaurantRepository();
  const storage = storageApp;
  
  try {
    let imageUrl = '';
    console.log(fileImage)

    if (fileImage) {
      // Generar un nombre único para la imagen
      const imageName =new Date().getMilliseconds();
      
      // Referencia en Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`);
      
      // Subir la imagen a Firebase Storage
      const snapshot = await uploadBytes(imageRef, fileImage);
      
      // Obtener la URL de la imagen subida
      console.log(snapshot)
      newLocal.setCoverImage(imageUrl);  // Guardar la URL de la imagen en el local
      newLocal.setImagePath(`images/${imageName}`);
    }
    service.addLocal(newLocal);
    // Actualizar el restaurante en la base de datos
    await repository.updateRestaurantById(id,service.getDto() );
    console.log("Restaurant updated successfully");
  } catch (error) {
    console.error("Failed to update restaurant:", error);
  }
}

export async function saveNewPlate(
  id: string,
  localId:string,
  newPlate: PlateEntity,
  service: RestaurantService,
  fileImage: File
) {
  const repository = new RestaurantRepository();
  const storage = storageApp;

  try {
    if (fileImage) {
      // Generar un nombre único para la imagen
      const imageName = new Date().getMilliseconds() * 1000;

      // Referencia en Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`);

      // Subir la imagen a Firebase Storage
      const snapshot = await uploadBytes(imageRef, fileImage);

      // Obtener la URL de la imagen subida
      const imageUrl = await getDownloadURL(imageRef);
      newPlate.setImage(imageUrl); // Guardar la URL de la imagen en el plate
      newPlate.setImagePath(`images/${imageName}`);
    }
    
    service.addPlateByLocalId(localId,newPlate);
    // Actualizar el restaurante en la base de datos
    await repository.updateRestaurantById(id, service.getDto());
    console.log("Restaurant updated successfully with new plate.");
  } catch (error) {
    console.error("Failed to update restaurant with new plate:", error);
  }
}

export async function saveNewCategory(
  id: string,
  localId:string,
  newCategory: CategoryEntity,
  service: RestaurantService,
  fileImage: File
) {
  const repository = new RestaurantRepository();
  const storage = storageApp;

  try {
    if (fileImage) {
      // Generar un nombre único para la imagen
      const imageName = new Date().getMilliseconds() * 1000;

      // Referencia en Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`);

      // Subir la imagen a Firebase Storage
      const snapshot = await uploadBytes(imageRef, fileImage);

      // Obtener la URL de la imagen subida
      const imageUrl = await getDownloadURL(imageRef);
      newCategory.setImage(imageUrl); // Guardar la URL de la imagen en la categoría
      newCategory.setImagePath(`images/${imageName}`);
    }
    service.addCategoryByLocalId(localId,newCategory);
    // Actualizar el restaurante en la base de datos
    await repository.updateRestaurantById(id, service.getDto());
    console.log("Restaurant updated successfully with new category.");
  } catch (error) {
    console.error("Failed to update restaurant with new category:", error);
  }
}