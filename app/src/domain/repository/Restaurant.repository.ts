import { LocalEntity } from "../entity/Local.entity";
import { RestaurantEntity } from "../entity/Restaurant.entity";


// Mock de datos
const mockRestaurantData = {
  id: "1",
  name: "Restaurante El Buen Sabor",
  logo: "URL_logo",
  locals: [
 {
      id: "1",
      name: "Local Centro",
      coverImage: "URL_local_centro",
      categories: [
        {
          id: "123151",
          name: "Carnes",
          image: "",
          plates: [
            {
              id: "1",
              title: "Bife de chorizo",
              name: "Bife de chorizo",
              description: "Bife a la parrilla con guarnición de papas.",
              price: 1500,
              score: 4.5,
              category: "Carnes",
              image: "URL_bife_chorizo",
              onPromotion: false
            },
            {
              id: "2",
              title: "Pollo al horno",
              name: "Pollo al horno",
              description: "Pollo cocido lentamente con hierbas y limón.",
              price: 1200,
              score: 4.3,
              category: "Carnes",
              image: "URL_pollo_horno",
              onPromotion: false
            }
          ]
        },
        {
          id: "2532525",
          name: "Postres",
          image: "",
          plates: [
            {
              id: "3",
              title: "Tiramisú",
              name: "Tiramisú",
              description: "Postre clásico italiano con café y crema.",
              price: 800,
              score: 4.7,
              category: "Postres",
              image: "URL_tiramisu",
              onPromotion: true
            },
            {
              id: "4",
              title: "Helado artesanal",
              name: "Helado artesanal",
              description: "Helado casero de chocolate y vainilla.",
              price: 700,
              score: 4.6,
              category: "Postres",
              image: "URL_helado_artesanal",
              onPromotion: false
            }
          ]
        },
        {
          id: "13123",
          name: "Entremeses",
          image: "",
          plates: [
            {
              id: "1",
              title: "Bife de chorizo",
              name: "Bife de chorizo",
              description: "Bife a la parrilla con guarnición de papas.",
              price: 1500,
              score: 4.5,
              category: "Carnes",
              image: "URL_bife_chorizo",
              onPromotion: false
            },
            {
              id: "2123123",
              title: "Pollo al horno",
              name: "Pollo al horno",
              description: "Pollo cocido lentamente con hierbas y limón.",
              price: 1200,
              score: 4.3,
              category: "Carnes",
              image: "URL_pollo_horno",
              onPromotion: false
            }
          ]
        },
        {
          id: "12312",
          name: "Postres",
          image: "",
          plates: [
            {
              id: "3",
              title: "Tiramisú",
              name: "Tiramisú",
              description: "Postre clásico italiano con café y crema.",
              price: 800,
              score: 4.7,
              category: "Postres",
              image: "URL_tiramisu",
              onPromotion: true
            },
            {
              id: "4",
              title: "Helado artesanal",
              name: "Helado artesanal",
              description: "Helado casero de chocolate y vainilla.",
              price: 700,
              score: 4.6,
              category: "Postres",
              image: "URL_helado_artesanal",
              onPromotion: false
            }
          ]
        }
      ]
    },
    {
      id: "55235",
      name: "Local Norte",
      coverImage: "URL_local_norte",
      categories: [
        {
          id: "654563",
          name: "Pastas",
          image: "",
          plates: [
            {
              id: "5",
              title: "Ravioles de ricota",
              name: "Ravioles de ricota",
              description: "Ravioles caseros rellenos de ricota y espinaca.",
              price: 1100,
              score: 4.8,
              category: "Pastas",
              image: "URL_ravioles_ricota",
              onPromotion: true
            },
            {
              id: "6",
              title: "Tallarines al pesto",
              name: "Tallarines al pesto",
              description: "Tallarines frescos con salsa de pesto.",
              price: 1000,
              score: 4.6,
              category: "Pastas",
              image: "URL_tallarines_pesto",
              onPromotion: false
            }
          ]
        },
        {
          id: "45654",
          name: "Ensaladas",
          image: "",
          plates: [
            {
              id: "7",
              title: "Ensalada César",
              name: "Ensalada César",
              description: "Clásica ensalada con pollo, crutones y aderezo César.",
              price: 850,
              score: 4.5,
              category: "Ensaladas",
              image: "URL_ensalada_cesar",
              onPromotion: true
            },
            {
              id: "8",
              title: "Ensalada Caprese",
              name: "Ensalada Caprese",
              description: "Tomate, mozzarella y albahaca fresca con aceite de oliva.",
              price: 900,
              score: 4.7,
              category: "Ensaladas",
              image: "URL_ensalada_caprese",
              onPromotion: false
            }
          ]
        },
        {
          id: "13123",
          name: "Entremeses",
          image: "",
          plates: [
            {
              id: "1",
              title: "Bife de chorizo",
              name: "Bife de chorizo",
              description: "Bife a la parrilla con guarnición de papas.",
              price: 1500,
              score: 4.5,
              category: "Carnes",
              image: "URL_bife_chorizo",
              onPromotion: false
            },
            {
              id: "2123123",
              title: "Pollo al horno",
              name: "Pollo al horno",
              description: "Pollo cocido lentamente con hierbas y limón.",
              price: 1200,
              score: 4.3,
              category: "Carnes",
              image: "URL_pollo_horno",
              onPromotion: false
            }
          ]
        },
        {
          id: "12312",
          name: "Postres",
          image: "",
          plates: [
            {
              id: "3",
              title: "Tiramisú",
              name: "Tiramisú",
              description: "Postre clásico italiano con café y crema.",
              price: 800,
              score: 4.7,
              category: "Postres",
              image: "URL_tiramisu",
              onPromotion: true
            },
            {
              id: "4",
              title: "Helado artesanal",
              name: "Helado artesanal",
              description: "Helado casero de chocolate y vainilla.",
              price: 700,
              score: 4.6,
              category: "Postres",
              image: "URL_helado_artesanal",
              onPromotion: false
            }
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Local Sur",
      coverImage: "URL_local_sur",
      categories: [
        {
          id: "545745",
          name: "Pizzas",
          image: "",
          plates: [
            {
              id: "9",
              title: "Pizza Margarita",
              name: "Pizza Margarita",
              description: "Pizza con salsa de tomate, mozzarella y albahaca.",
              price: 950,
              score: 4.8,
              category: "Pizzas",
              image: "URL_pizza_margarita",
              onPromotion: true
            },
            {
              id: "10",
              title: "Pizza Cuatro Quesos",
              name: "Pizza Cuatro Quesos",
              description: "Pizza con mezcla de cuatro quesos fundidos.",
              price: 1100,
              score: 4.9,
              category: "Pizzas",
              image: "URL_pizza_cuatro_quesos",
              onPromotion: false
            }
          ]
        },
        {
          id: "6",
          name: "Bebidas",
          image: "",
          plates: [
            {
              id: "11",
              title: "Limonada",
              name: "Limonada",
              description: "Limonada fresca con menta y jengibre.",
              price: 400,
              score: 4.4,
              category: "Bebidas",
              image: "URL_limonada",
              onPromotion: true
            },
            {
              id: "12",
              title: "Cerveza artesanal",
              name: "Cerveza artesanal",
              description: "Cerveza local con varias opciones de estilos.",
              price: 600,
              score: 4.7,
              category: "Bebidas",
              image: "URL_cerveza_artesanal",
              onPromotion: false
            }
          ]
        },
        {
          id: "654563",
          name: "Pastas",
          image: "",
          plates: [
            {
              id: "5",
              title: "Ravioles de ricota",
              name: "Ravioles de ricota",
              description: "Ravioles caseros rellenos de ricota y espinaca.",
              price: 1100,
              score: 4.8,
              category: "Pastas",
              image: "URL_ravioles_ricota",
              onPromotion: true
            },
            {
              id: "6",
              title: "Tallarines al pesto",
              name: "Tallarines al pesto",
              description: "Tallarines frescos con salsa de pesto.",
              price: 1000,
              score: 4.6,
              category: "Pastas",
              image: "URL_tallarines_pesto",
              onPromotion: false
            }
          ]
        },
        {
          id: "45654",
          name: "Ensaladas",
          image: "",
          plates: [
            {
              id: "7",
              title: "Ensalada César",
              name: "Ensalada César",
              description: "Clásica ensalada con pollo, crutones y aderezo César.",
              price: 850,
              score: 4.5,
              category: "Ensaladas",
              image: "URL_ensalada_cesar",
              onPromotion: true
            },
            {
              id: "8",
              title: "Ensalada Caprese",
              name: "Ensalada Caprese",
              description: "Tomate, mozzarella y albahaca fresca con aceite de oliva.",
              price: 900,
              score: 4.7,
              category: "Ensaladas",
              image: "URL_ensalada_caprese",
              onPromotion: false
            }
          ]
        },
        {
          id: "13123",
          name: "Entremeses",
          image: "",
          plates: [
            {
              id: "1",
              title: "Bife de chorizo",
              name: "Bife de chorizo",
              description: "Bife a la parrilla con guarnición de papas.",
              price: 1500,
              score: 4.5,
              category: "Carnes",
              image: "URL_bife_chorizo",
              onPromotion: false
            },
            {
              id: "2123123",
              title: "Pollo al horno",
              name: "Pollo al horno",
              description: "Pollo cocido lentamente con hierbas y limón.",
              price: 1200,
              score: 4.3,
              category: "Carnes",
              image: "URL_pollo_horno",
              onPromotion: false
            }
          ]
        },
        {
          id: "12312",
          name: "Postres",
          image: "",
          plates: [
            {
              id: "3",
              title: "Tiramisú",
              name: "Tiramisú",
              description: "Postre clásico italiano con café y crema.",
              price: 800,
              score: 4.7,
              category: "Postres",
              image: "URL_tiramisu",
              onPromotion: true
            },
            {
              id: "4",
              title: "Helado artesanal",
              name: "Helado artesanal",
              description: "Helado casero de chocolate y vainilla.",
              price: 700,
              score: 4.6,
              category: "Postres",
              image: "URL_helado_artesanal",
              onPromotion: false
            }
          ]
        }
      ]
    },
    {
      id: "6",
      name: "Local Parque",
      coverImage: "URL_local_parque",
      categories: []
    },
    {
      id: "7",
      name: "Local Playa",
      coverImage: "URL_local_playa",
      categories: []
    },
    {
      id: "8",
      name: "Local Montaña",
      coverImage: "URL_local_montana",
      categories: []
    }
  ]
};




export class RestaurantRepository {
  private restaurantData: RestaurantEntity;

  constructor() {
    // Inicializa con los datos mock
    this.restaurantData = new RestaurantEntity(mockRestaurantData);
  }

  // Método para obtener los datos del restaurante
  public getRestaurant(): RestaurantEntity {
    return this.restaurantData;
  }

  // Método para obtener un local por ID
  public getLocalById(id: string): LocalEntity | undefined {
    return this.restaurantData.locals.find((local) => local.getId() === id);
  }

  // Método para obtener todos los locales
  public getAllLocals(): LocalEntity[] {
    return this.restaurantData.locals;
  }

  // Puedes agregar más métodos según las necesidades del repositorio
}
