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

interface testeProps {
  name: string;
  volume: number;
}

export const ContribuitionsContext = createContext<ContribuitionsContextProps>(
  {} as ContribuitionsContextProps
);

export function ContribuitionsProvider({ children }: DataProviderProps) {
  const [contribuitionsData, setContribuitionsData] = useState<
    Contribuitions[]
  >([]);

  const [teste, setTeste] = useState<testeProps[]>([]);

  useEffect(() => {
    getContribuitions();
  }, []);

  async function getContribuitions() {
    await api
      .get("/data/contribuitions")
      .then((response) => setContribuitionsData(response.data));
  }

  useEffect(() => {
    api
      .get(
        "https://api.hgbrasil.com/finance/stock_price?key=4704ba4f&symbol=bidi4"
      )
      .then((response) => console.log(response.data));
  }, []);

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
