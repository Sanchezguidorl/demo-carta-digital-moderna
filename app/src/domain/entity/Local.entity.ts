import { LocalDTO } from "../dto/Local.dto";
import { CategoryEntity } from "./Category.entity";

export class LocalEntity {
  private _id: string;
  private _name: string;
  private _coverImage: string;
  private _categories: CategoryEntity[];

  constructor(data: LocalDTO) {
    this._id = data.id;
    this._name = data.name;
    this._coverImage = data.coverImage;
    this._categories = data.categories.map((category) => new CategoryEntity(category));
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

  // Setters
  public setId(id: string): void {
    this._id = id;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public setCoverImage(image: string): void {
    this._coverImage = image;
  }

  public setCategories(categories: CategoryEntity[]): void {
    this._categories = categories;
  }
}
