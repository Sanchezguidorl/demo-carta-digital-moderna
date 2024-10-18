import { LocalDTO } from "../dto/Local.dto";
import { CategoryEntity } from "./Category.entity";
import { PlateEntity } from "./Plate.entity";

export class LocalEntity {
  private _id: string;
  private _name: string;
  private _coverImage: string;
  private _categories: CategoryEntity[];
  private _plates: PlateEntity[];
  private _imagePath: string;
  constructor(data: LocalDTO) {
    this._id = data.id;
    this._name = data.name;
    this._coverImage = data.coverImage;
    this._imagePath = data.imagePath;
    this._categories =data? data.categories.map((category) => new CategoryEntity(category)):[];
    this._plates =data?  data.plates.map((plate) => new PlateEntity(plate)):[];
  }

  // Getters
  public getId(): string {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getCoverImage(): string {
    return this._coverImage;
  }

  public getCategories(): CategoryEntity[] {
    return this._categories;
  }

  public getAllPlates(): PlateEntity[] {
    return this._plates;
  }

  // Setters
  public setId(id: string): void {
    this._id = id;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public setImagePath(path: string): void {
    this._imagePath = path;
  }

  public getImagePath(): string {
    return this._imagePath;
  }

  public setCoverImage(image: string): void {
    this._coverImage = image;
  }

  public updateAllCategories(categories: CategoryEntity[]): void {
    this._categories = categories;
  }

  public addCategory(category: CategoryEntity): void {
    this._categories.push(category);
  }

  public addPlate(plate: PlateEntity): void {
    this._plates.push(plate);
  }

  // Métodos para remover categorías y platos por id
  public removeCategoryById(categoryId: string): void {
    this._categories = this._categories.filter(category => category.getId() !== categoryId);
  }

  public removePlateById(plateId: string): void {
    this._plates = this._plates.filter(plate => plate.getId() !== plateId);
  }
}
