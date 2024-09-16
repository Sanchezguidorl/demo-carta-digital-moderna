export type PlateType = {
    title: string;
    price: number;
    description: string;
    score: number;
    image: string;
    onPromotion:boolean;
    category: 'ensaladas' | 'mariscos' | 'sopas' | 'entradas' | 'hamburguesas' | 'pastas'| 'carnes' |'postres';
  };
export type PlatesListType = PlateType[];