import { CategoryDTO } from "../dto/Category.dto";
import { LocalDTO } from "../dto/Local.dto";
import { PlateDTO } from "../dto/Plate.dto";
import { RestaurantDTO } from "../dto/Restaurant.dto";
import { CategoryEntity } from "../entity/Category.entity";
import { LocalEntity } from "../entity/Local.entity";
import { PlateEntity } from "../entity/Plate.entity";
import { RestaurantEntity } from "../entity/Restaurant.entity";

// Clase Mapper que convierte una RestaurantEntity en un RestaurantDTO
export class RestaurantMapper {
  private restaurantEntity: RestaurantEntity;

  constructor(restaurantEntity: RestaurantEntity) {
    this.restaurantEntity = restaurantEntity;
  }

  // Método que realiza el mapeo de RestaurantEntity a RestaurantDTO
  toDTO(): RestaurantDTO {
    const { id, name, logo, locals, imagePath } = this.restaurantEntity;
    
    const localDTOs: LocalDTO[] = locals.map((local: LocalEntity) => this.mapLocalEntityToDTO(local));

    return {
      id,
      name,
      logo,
      locals: localDTOs,
      imagePath
    };
  }

  // Método que mapea LocalEntity a LocalDTO
  private mapLocalEntityToDTO(local: LocalEntity): LocalDTO {
    const categoryDTOs: CategoryDTO[] = local.getCategories().map((category: CategoryEntity) =>
      this.mapCategoryEntityToDTO(category)
    );

    const plateDTOs: PlateDTO[] = local.getAllPlates().map((plate: PlateEntity) =>
      this.mapPlateEntityToDTO(plate)
    );

    return {
      id: local.getId(),
      name: local.getName(),
      coverImage: local.getCoverImage(), // Aquí obtienes el coverImage correctamente
      categories: categoryDTOs,
      plates: plateDTOs,
      imagePath: local.getImagePath()
    };
  }

  // Método que mapea CategoryEntity a CategoryDTO
  private mapCategoryEntityToDTO(category: CategoryEntity): CategoryDTO {
    return {
      id: category.getId(),
      name: category.getName(),
      image: category.getImage(),
      imagePath: category.getImagePath(),
      locals: category.getLocals(),
    };
  }

  // Método que mapea PlateEntity a PlateDTO
  private mapPlateEntityToDTO(plate: PlateEntity): PlateDTO {
    return {
      id: plate.getId(),
      name: plate.getTitle(),
      price: plate.getPrice(),
      description: plate.getDescription(),
      score: plate.getScore(),
      category: plate.getCategory(),
      imageUrl: plate.getImage(),
      onPromotion: plate.isOnPromotion(),
      imagePath: plate.getImagePath(),
    };
  }
}
