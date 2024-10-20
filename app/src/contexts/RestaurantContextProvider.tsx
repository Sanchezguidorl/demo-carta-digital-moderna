"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { RestaurantService } from "../services/RestaurantService";
import { LocalEntity } from "../domain/entity/Local.entity";
import { getRestaurant } from "../usecases/RestaurantCases";

// Definir el tipo del contexto
interface RestaurantContextProps {
  restaurantService: RestaurantService | null;
  setRestaurantService: (service: RestaurantService) => void;
  selectedLocal: LocalEntity | null;
  setSelectedLocal: (local: LocalEntity) => void;
  error: string | null; // Variable para manejar errores
  loading: boolean; // Variable para manejar el estado de carga
  refetch:()=>void;
}

// Crear el contexto con un valor por defecto
const RestaurantContext = createContext<RestaurantContextProps>({
  restaurantService: null,
  setRestaurantService: (service) => {},
  selectedLocal: null,
  setSelectedLocal: (local) => {},
  error: null,
  loading: false,
  refetch:()=>{}
});

// Hook para acceder al contexto
export const useRestaurantContext = () => useContext(RestaurantContext);

// Proveedor del contexto
interface RestaurantProviderProps {
  children: ReactNode;
}

function RestaurantContextProvider({ children }: RestaurantProviderProps) {
  const [restaurantService, setRestaurantService] =
    useState<RestaurantService | null>();
  const [selectedLocal, setSelectedLocal] = useState<LocalEntity | null>(null); // Estado para manejar el local seleccionado
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga

  const fetchData = () => {
    setLoading(true); // Iniciar la carga
    getRestaurant()
      .then((service) => {
        setRestaurantService(service);
      })
      .catch((err) => {
        setError("Error al cargar el restaurante: " + err.message); // Manejo de errores
      })
      .finally(() => {
        setSelectedLocal(null);
        setLoading(false); // Finalizar la carga
      });
  };
  useEffect(() => {
     if(!restaurantService){
      console.log("se acciona fetch")
      fetchData();
     }

    if (!selectedLocal && restaurantService) {
      setSelectedLocal(restaurantService.getAllLocales()[0]);
    }
  }, [restaurantService]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurantService,
        setRestaurantService,
        selectedLocal,
        setSelectedLocal,
        error,
        refetch:fetchData,
        loading,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContextProvider;
