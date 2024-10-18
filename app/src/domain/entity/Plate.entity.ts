import { PlateDTO } from "../dto/Plate.dto";

export class PlateEntity {
  private _id: string;
  private _name: string;
  private _price: number;
  private _description: string;
  private _score: number;
  private _category: string;
  private _image: string;
  private _onPromotion: boolean;
  private _imagePath: string;

  constructor(data: PlateDTO) {
    this._id = data.id;
    this._name = data.name;
    this._price = data.price;
    this._description = data.description;
    this._score = data.score;
    this._category = data.category;
    this._image = data.imageUrl;
    this._onPromotion = data.onPromotion;
    this._imagePath = data.imagePath;
  }

  // Getters
  public getId(): string {
    return this._id;
  }

  public getTitle(): string {
    return this._name;
  }

  public getImagePath(): string {
    return this._imagePath
  }

  public setImagePath(path:string): void {
    this._imagePath=path;
  }

  public getPrice(): number {
    return this._price;
  }

  public getDescription(): string {
    return this._description;
  }

  public getScore(): number {
    return this._score;
  }

  public getCategory(): string {
    return this._category;
  }

  public getImage(): string {
    return this._image;
  }

  public isOnPromotion(): boolean {
    return this._onPromotion;
  }

  // Setters
  public setId(id: string): void {
    this._id = id;
  }

  public setTitle(title: string): void {
    this._name = title;
  }

  public setPrice(price: number): void {
    this._price = price;
  }

  public setDescription(description: string): void {
    this._description = description;
  }

  public setScore(score: number): void {
    this._score = score;
  }

  public setCategory(category: string): void {
    this._category = category;
  }

  public setImage(image: string): void {
    this._image = image;
  }

  public setOnPromotion(onPromotion: boolean): void {
    this._onPromotion = onPromotion;
  }
}
