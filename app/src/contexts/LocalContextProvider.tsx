"use client";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useRestaurantContext } from "./RestaurantContextProvider"; // Importa el contexto del restaurante
import { LocalService } from "../services/LocalService";

// Definir el tipo del contexto
interface LocalContextProps {
  localService: LocalService| null; // Aquí puedes definir el tipo específico de tu servicio local
  setLocalService: (service: LocalService) => void; // Cambia 'any' por el tipo real de LocalService
  error: string | null; // Variable para manejar errores
  loading: boolean; // Variable para manejar el estado de carga
}

// Crear el contexto con un valor por defecto
const CreateLocalContext = createContext<LocalContextProps>({
  localService: null,
  setLocalService: (service) => {},
  error: null,
  loading: false,
});

// Hook para acceder al contexto
export const useLocalContext = () => useContext(CreateLocalContext);

// Proveedor del contexto
interface LocalProviderProps {
  children: ReactNode;
}

function LocalContextProvider({ children }: LocalProviderProps) {
  const [localService, setLocalService] = useState<LocalService| null>(null); // Cambia 'any' por el tipo real de LocalService
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga

  const { selectedLocal } = useRestaurantContext(); // Obtiene el local seleccionado del contexto de Restaurant

  useEffect(() => {
    if (selectedLocal) {
      setLoading(true); // Iniciar la carga
      // Aquí puedes inicializar tu LocalService basado en el local seleccionado
      try {
        const newLocalService = {}; // Crea una nueva instancia de tu LocalService
        setLocalService(new LocalService(selectedLocal)); // Establece el nuevo servicio local
      } catch (err) {
        setError("Error al crear el servicio local: " + (err as Error).message); // Manejo de errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    }
  }, [selectedLocal]); // Se ejecuta cuando selectedLocal cambia
  return (
    <CreateLocalContext.Provider value={{ localService, setLocalService, error, loading }}>
      {children}
    </CreateLocalContext.Provider>
  );
}

export default LocalContextProvider;
