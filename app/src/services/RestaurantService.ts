import { RestaurantDTO } from "../domain/dto/Restaurant.dto";
import { CategoryEntity } from "../domain/entity/Category.entity";
import { LocalEntity } from "../domain/entity/Local.entity";
import { PlateEntity } from "../domain/entity/Plate.entity";
import { RestaurantEntity } from "../domain/entity/Restaurant.entity";
import { RestaurantMapper } from "../domain/mappers/RestaurantMapper";
import { LocalService } from './LocalService';

export class RestaurantService {
  private restaurantData: RestaurantEntity;
  constructor(data: RestaurantEntity) {
    this.restaurantData = data;
  }

  // Método para obtener todos los locales
  public getAllLocales(): LocalEntity[] {
    return this.restaurantData.locals; // Devuelve la lista de locales
  }

  // Método para obtener el DTO de Restaurant
  public getDto(): RestaurantDTO {
    return new RestaurantMapper(this.restaurantData).toDTO();
  }

  // Método para obtener el ID del restaurante
  public getId(): string {
    return this.restaurantData.id;
  }

  // Método para obtener un local por ID
  public getLocalById(id: string): LocalEntity | false {
    return this.restaurantData.locals.find((local) => local.getId() === id) || false;
  }

  // Método para verificar si un local existe
  public localExists(id: string): boolean {
    return this.restaurantData.locals.some((local) => local.getId() === id);
  }

  // Método para agregar una categoría a un local por ID
  public addCategoryByLocalId(id: string, category: CategoryEntity): void {
    const local = this.getLocalById(id);
    if (local) {
      local.addCategory(category);
    }
  }

  // Método para eliminar una categoría por ID en un local específico
  public removeCategoryByLocalId(localId: string, categoryId: string): void {
    const local = this.getLocalById(localId);
    if (local) {
      local.removeCategoryById(categoryId);
    }
  }

  // Método para agregar un plato a un local por ID
  public addPlateByLocalId(localId: string, plate: PlateEntity): void {
    const local = this.getLocalById(localId);
    if (local) {
      local.addPlate(plate);
    }
  }

  // Método para obtener los nombres de todos los locales
public getAllLocalNames(): string[] {
  return this.getAllLocales().map((local) => local.getName());
}


  // Método para eliminar un plato por ID en un local específico
  public removePlateByLocalId(localId: string, plateId: string): void {
    const local = this.getLocalById(localId);
    if (local) {
      local.removePlateById(plateId);
    }
  }


  // Método para agregar un local
  public addLocal(newLocal: LocalEntity): void {
    // Verificar que el local no exista ya
    if (!this.localExists(newLocal.getId()) && newLocal) {
      this.restaurantData.locals.push(newLocal);
    } else {
      throw new Error("El local ya existe.");
    }
  }

  // Método para eliminar un local por ID
  public removeLocalById(id: string): void {
    const localIndex = this.restaurantData.locals.findIndex((local) => local.getId() === id);
    if (localIndex !== -1) {
      this.restaurantData.locals.splice(localIndex, 1); // Elimina el local
    } else {
      throw new Error("Local no encontrado.");
    }
  }

  // Método para agregar una categoría a varios locales
  public addCategoryToMultipleLocals(localIds: string[], category: CategoryEntity): void {
    localIds.forEach((localId) => {
      const local = this.getLocalById(localId);
      if (local) {
        local.addCategory(category);
      } else {
        console.warn(`Local con ID ${localId} no encontrado.`);
      }
    });
  }
}
