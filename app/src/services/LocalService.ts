import { CategoryEntity } from "../domain/entity/Category.entity";
import { LocalEntity } from "../domain/entity/Local.entity";
import { PlateEntity } from "../domain/entity/Plate.entity";



export class LocalService {
  private localData: LocalEntity;

  constructor(data: LocalEntity) {
    this.localData = data;
  }

  // Get category by ID
  public getCategoryById(id: string): CategoryEntity | false {
    return this.localData.getCategories().find((category) => category.getId() === id) || false;
  }

  // Get coverimage
  public getCoverImage():string {
    return this.localData.getCoverImage();
  }

  // Get ID
  public getId(): string | false {
    return this.localData.getId()
  }

  // Get all categories
  public getAllCategories(): CategoryEntity[] {
    return this.localData.getCategories();
  }

  public getAllPlates(): PlateEntity[]|[] {
    return this.localData.getAllPlates()
  }

  // Get plate by ID within a category
  public getplateById(categoryId: string, plateId: string): PlateEntity | false {
    return this.localData.getAllPlates().find(plate=> plate.getId()===plateId)|| false
  }

  // Get all plates in a category
  public getAllplatesByCategory(categoryId: string): PlateEntity[] | [] {
  return this.localData.getAllPlates().filter(plate=> plate.getCategory().toLowerCase()===categoryId.toLowerCase())||[]
  }

  // Add a new category
  public addCategory(category: CategoryEntity): void {
    this.localData.getCategories().push(category);
  }

  // Remove category by ID
  public removeCategoryById(id: string): boolean {
    const index = this.localData.getCategories().findIndex((category) => category.getId() === id);
    if (index !== -1) {
      this.localData.getCategories().splice(index, 1);
      return true;
    }
    return false;
  }

  // Update category by ID
  public updateCategoryById(id: string, updatedCategory: Partial<CategoryEntity>): boolean {
    const category = this.getCategoryById(id);
    if (category) {
      Object.assign(category, updatedCategory);
      return true;
    }
    return false;
  }
}
