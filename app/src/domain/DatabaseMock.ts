import { PlateType } from "./category/PlatesTypes";

export const menuItems: PlateType[] = [
  // Ensaladas
  {
    title: "Ensalada César",
    price: 8990,
    description:
      "Clásica ensalada con lechuga, crutones, queso parmesano y aderezo César.",
    score: 8.5,
    category: "ensaladas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Ensalada Griega",
    price: 7490,
    description:
      "Ensalada fresca con pepino, tomate, cebolla, aceitunas y queso feta.",
    score: 9.0,
    category: "ensaladas",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Ensalada de Quinoa",
    price: 9990,
    description: "Mezcla de quinoa, espinacas, zanahoria, y aderezo de limón.",
    score: 8.7,
    category: "ensaladas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Ensalada Caprese",
    price: 6990,
    description: "Tomates frescos, mozzarella, albahaca y aceite de oliva.",
    score: 8.3,
    category: "ensaladas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Ensalada de Pollo a la Parrilla",
    price: 10490,
    description:
      "Pollo a la parrilla servido sobre una cama de lechuga, con vegetales frescos.",
    score: 8.9,
    category: "ensaladas",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Ensalada de Aguacate",
    price: 9590,
    description: "Aguacate, tomate, cebolla y lechuga con un toque de limón.",
    score: 9.1,
    category: "ensaladas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Ensalada de Espinacas y Fresas",
    price: 8290,
    description: "Espinacas frescas con fresas, nueces y queso de cabra.",
    score: 8.8,
    category: "ensaladas",
    image:
      "",
    onPromotion: true,
  },

  // Mariscos
  {
    title: "Camarones al Ajillo",
    price: 12990,
    description: "Camarones salteados con ajo, servidos con arroz.",
    score: 9.2,
    category: "mariscos",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Pulpo a la Gallega",
    price: 14490,
    description:
      "Pulpo tierno con pimentón y aceite de oliva, acompañado de papas.",
    score: 9.3,
    category: "mariscos",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Ceviche de Pescado",
    price: 10990,
    description:
      "Pescado fresco marinado en jugo de limón con cebolla y cilantro.",
    score: 9.0,
    category: "mariscos",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Langostinos Empanizados",
    price: 13990,
    description: "Langostinos crujientes acompañados de salsa tártara.",
    score: 8.9,
    category: "mariscos",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Paella de Mariscos",
    price: 15990,
    description: "Arroz con una mezcla de mariscos y azafrán.",
    score: 9.4,
    category: "mariscos",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Tacos de Pescado",
    price: 8990,
    description:
      "Tacos rellenos de pescado fresco con repollo y salsa de aguacate.",
    score: 8.7,
    category: "mariscos",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Salmon a la Parrilla",
    price: 16990,
    description: "Salmón fresco a la parrilla con hierbas y limón.",
    score: 9.1,
    category: "mariscos",
    image:
      "",
    onPromotion: true,
  },

  // Sopas
  {
    title: "Sopa de Tomate",
    price: 6490,
    description: "Sopa cremosa de tomate con albahaca.",
    score: 8.5,
    category: "sopas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Sopa de Pollo",
    price: 7290,
    description: "Clásica sopa de pollo con verduras frescas.",
    score: 8.9,
    category: "sopas",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Sopa de Lentejas",
    price: 6990,
    description: "Sopa nutritiva de lentejas con un toque de cilantro.",
    score: 8.8,
    category: "sopas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Sopa de Cebolla",
    price: 7490,
    description: "Sopa de cebolla gratinada con queso.",
    score: 9.0,
    category: "sopas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Sopa de Mariscos",
    price: 12990,
    description: "Deliciosa sopa con una mezcla de mariscos frescos.",
    score: 9.2,
    category: "sopas",
    image:
      "",
    onPromotion: true,
  },
  {
    title: "Sopa Minestrone",
    price: 6990,
    description: "Sopa italiana con verduras, frijoles y pasta.",
    score: 8.6,
    category: "sopas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Sopa de Champiñones",
    price: 7190,
    description: "Sopa cremosa de champiñones con un toque de tomillo.",
    score: 8.7,
    category: "sopas",
    image:
      "",
    onPromotion: false,
  },
  {
    title: "Bruschetta de Tomate",
    price: 4990,
    description: "Pan tostado con tomate fresco, ajo, albahaca y aceite de oliva.",
    score: 8.7,
    category: "entradas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Empanadas de Carne",
    price: 3990,
    description: "Empanadas argentinas rellenas de carne sazonada.",
    score: 9.0,
    category: "entradas",
    image: "",
    onPromotion: true,
  },
  {
    title: "Tartar de Atún",
    price: 8990,
    description: "Atún fresco picado, mezclado con aguacate y salsa de soya.",
    score: 9.2,
    category: "entradas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Nachos con Queso",
    price: 6990,
    description: "Totopos de maíz cubiertos con queso derretido, jalapeños y guacamole.",
    score: 8.8,
    category: "entradas",
    image: "",
    onPromotion: true,
  },
  {
    title: "Alitas de Pollo BBQ",
    price: 7490,
    description: "Alitas de pollo bañadas en salsa BBQ con un toque de picante.",
    score: 9.1,
    category: "entradas",
    image: "",
    onPromotion: false,
  },
  
  // Hamburguesas
  {
    title: "Hamburguesa Clásica",
    price: 8990,
    description: "Hamburguesa de carne de res con lechuga, tomate, cebolla y queso cheddar.",
    score: 9.0,
    category: "hamburguesas",
    image: "",
    onPromotion: true,
  },
  {
    title: "Hamburguesa BBQ",
    price: 9490,
    description: "Hamburguesa con carne de res, queso cheddar, cebolla caramelizada y salsa BBQ.",
    score: 9.2,
    category: "hamburguesas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Hamburguesa de Pollo Crispy",
    price: 8490,
    description: "Pollo crujiente con lechuga, tomate, mayonesa y queso suizo.",
    score: 8.8,
    category: "hamburguesas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Hamburguesa Vegana",
    price: 9990,
    description: "Hamburguesa de proteína vegetal con aguacate, tomate y salsa especial.",
    score: 9.3,
    category: "hamburguesas",
    image: "",
    onPromotion: true,
  },
  {
    title: "Hamburguesa Doble Queso",
    price: 10990,
    description: "Hamburguesa con doble carne de res, doble queso y tocineta.",
    score: 9.5,
    category: "hamburguesas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Bife de Chorizo",
    price: 18990,
    description: "Corte argentino de carne a la parrilla con papas fritas.",
    score: 9.5,
    category: "carnes",
    image: "",
    onPromotion: false,
  },
  {
    title: "Costillas de Cerdo BBQ",
    price: 17990,
    description: "Costillas de cerdo bañadas en salsa BBQ, servidas con ensalada coleslaw.",
    score: 9.3,
    category: "carnes",
    image: "",
    onPromotion: true,
  },
  {
    title: "Lomo Saltado",
    price: 15990,
    description: "Tiras de lomo salteadas con cebolla, tomate y papas fritas.",
    score: 9.0,
    category: "carnes",
    image: "",
    onPromotion: false,
  },
  {
    title: "Chuleta de Cordero",
    price: 20990,
    description: "Chuletas de cordero a la parrilla con puré de papas.",
    score: 9.2,
    category: "carnes",
    image: "",
    onPromotion: true,
  },
  
  // Pastas
  {
    title: "Fettuccine Alfredo",
    price: 11990,
    description: "Fettuccine en salsa cremosa de queso parmesano y mantequilla.",
    score: 9.0,
    category: "pastas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Spaghetti a la Boloñesa",
    price: 10990,
    description: "Pasta con salsa de tomate y carne molida al estilo boloñesa.",
    score: 9.1,
    category: "pastas",
    image: "",
    onPromotion: true,
  },
  {
    title: "Lasagna Clásica",
    price: 12990,
    description: "Lasagna de carne con capas de pasta, queso y salsa de tomate.",
    score: 9.4,
    category: "pastas",
    image: "",
    onPromotion: false,
  },
  {
    title: "Ravioles de Espinaca y Ricota",
    price: 13990,
    description: "Ravioles rellenos de espinaca y ricota con salsa de tomate.",
    score: 8.9,
    category: "pastas",
    image: "",
    onPromotion: false,
  },
  
  // Postres
  {
    title: "Cheesecake de Frutos Rojos",
    price: 5990,
    description: "Cheesecake cremoso con una base de galletas y topping de frutos rojos.",
    score: 9.3,
    category: "postres",
    image: "",
    onPromotion: true,
  },
  {
    title: "Tiramisú",
    price: 6490,
    description: "Clásico postre italiano con capas de bizcocho, café y crema de mascarpone.",
    score: 9.5,
    category: "postres",
    image: "",
    onPromotion: false,
  },
  {
    title: "Brownie con Helado",
    price: 5990,
    description: "Brownie de chocolate servido con helado de vainilla.",
    score: 9.0,
    category: "postres",
    image: "",
    onPromotion: true,
  },
  {
    title: "Crème Brûlée",
    price: 5490,
    description: "Postre francés con base de crema y caramelo crujiente.",
    score: 9.1,
    category: "postres",
    image: "",
    onPromotion: false,
  },
];
