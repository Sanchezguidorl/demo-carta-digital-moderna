import { CategoryDTO } from "../dto/Category.dto";
import { PlateEntity } from "./Plate.entity";

export class CategoryEntity {
  private _id: string;
  private _name: string;
  private _image: string;
  private _plates: PlateEntity[];

  constructor(data: CategoryDTO) {
    this._id = data.id;
    this._name = data.name;
    this._image = data.name;
    this._plates = data.plates.map((plate)=>new PlateEntity(plate));
  }

  // Getters
  public getId(): string {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getImage(): string {
    return this._image;
  }

  public getPlates(): PlateEntity[] {
    return this._plates;
  }

  // Setters
  public setId(id: string): void {
    this._id = id;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public setImage(image: string): void {
    this._image = image;
  }

  public setPlates(plates: PlateEntity[]): void {
    this._plates = plates;
  }
}
