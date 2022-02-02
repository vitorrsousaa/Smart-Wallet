import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ContribuitionsContextProps {
  contribuitionsData: Contribuitions[];
}

interface Contribuitions {
  contribuitions: number;
  timeZone: number;
  date: string;
}

interface DataProviderProps {
  children: ReactNode;
}

export const ContribuitionsContext = createContext<ContribuitionsContextProps>(
  {} as ContribuitionsContextProps
);

export function ContribuitionsProvider({ children }: DataProviderProps) {
  const [contribuitionsData, setContribuitionsData] = useState<
    Contribuitions[]
  >([]);

  useEffect(() => {
    getContribuitions();
  }, []);

  async function getContribuitions() {
    await api
      .get("/data/contribuitions")
      .then((response) => setContribuitionsData(response.data));
  }

  return (
    <ContribuitionsContext.Provider value={{ contribuitionsData }}>
      {children}
    </ContribuitionsContext.Provider>
  );
}

export function useContribuitions() {
  const context = useContext(ContribuitionsContext);

  return context;
}
