export type PlateType = {
    title: string;
    price: number;
    description: string;
    score: number;
    category: 'ensaladas' | 'mariscos' | 'sopas' | 'entradas' | 'hamburguesas';
  };
export type PlatesListType = PlateType[];