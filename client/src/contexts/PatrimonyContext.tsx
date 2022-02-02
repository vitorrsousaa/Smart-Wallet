import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface PatrimonyContextProps {
  value: string;
}

interface PatrimonyDataProps {
  name: string;
  boughtAt: string;
  price: number;
  time: number;
  type: string;
  volume: number;
  year: number;
}

interface PatrimonyProviderProps {
  children: ReactNode;
}

interface testeProps {
  name: string;
  time: number;
  volume: number;
  boughtPrice: string;
}

export const PatrimonyContext = createContext<PatrimonyContextProps>(
  {} as PatrimonyContextProps
);

export function PatrimonyProvider({ children }: PatrimonyProviderProps) {
  const [patrimonyData, setPatrimonyData] = useState<PatrimonyDataProps[]>(
    [] as PatrimonyDataProps[]
  );

  const [closingPrice, setClosingPrice] = useState("");

  let closing = "";

  useEffect(() => {
    getPatrimony();
  }, []);

  async function getPatrimony() {
    await api.get("/data").then((response) => setPatrimonyData(response.data));
  }

  async function getPrice(
    name: string,
    month: number,
    year: number,
    day: number
  ) {
    await axios
      .get(
        `https://www.mercadobitcoin.net/api/${name}/day-summary/${year}/${
          month + 1
        }/${day}/`
      )
      .then((response) => {
        setClosingPrice(response.data.closing);
      });
  }

  const value = "vitão";

  console.log(patrimonyData);
  return (
    <PatrimonyContext.Provider value={{ value }}>
      {children}
    </PatrimonyContext.Provider>
  );
}

export function usePatrimony() {
  const context = useContext(PatrimonyContext);

  return context;
}
