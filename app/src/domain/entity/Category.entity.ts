import { CategoryDTO } from "../dto/Category.dto";

export class CategoryEntity {
  private _id: string;
  private _name: string;
  private _image: string;
  private _imagePath: string;
  private _locals: string[];

  constructor(data: CategoryDTO) {
    this._id = data.id;
    this._name = data.name;
    this._image = data.image;
    this._imagePath = data.imagePath;
    this._locals = data.locals || [];
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

  public getLocals(): string[] {
    return this._locals;
  }

  public getImagePath(): string {
    return this._imagePath;
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

  public setImage(image: string): void {
    this._image = image;
  }

  // Métodos para agregar y eliminar locales
  public addLocal(localId: string): void {
    if (!this._locals.includes(localId)) {
      this._locals.push(localId);
    }
  }

  public removeLocal(localId: string): void {
    this._locals = this._locals.filter(id => id !== localId);
  }
}
