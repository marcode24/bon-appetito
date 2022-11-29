export interface IIngredient {
  name: string;
  price: number;
  selected: boolean;
  selector: string;
  pathImage?: string;
};

export interface ISize {
  sizeName: string;
  slices: number;
  size: number;
  measurement: string;
  price: number;
}

export interface IPizza {
  quantity: number;
  price: number;
  ingredients: IIngredient[];
  size: ISize;
  name?: string;
  pathImage?: string;
}
