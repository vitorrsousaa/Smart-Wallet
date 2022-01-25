import { HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { DashboardItem } from "./DashboardItem";

interface totalVolumeStockProps {
  name: string | undefined;
  volume: number | undefined;
}

interface totalVolumeStocksByTimeProps {
  patrimony: number;
  month: number;
  year: number;
}

export const DashboardInformation = () => {
  const data = [
    {
      name: "BCFF11",
      volume: 200,
      price: 70.8,
      boughtAt: new Date(2021, 0, 11),
      month: new Date(2021, 0, 11).getMonth(),
      year: new Date(2021, 0, 11).getFullYear(),
    },
    {
      name: "BCFF11",
      volume: 100,
      price: 68,
      boughtAt: new Date(2021, 0, 11),
      month: new Date(2021, 0, 11).getMonth(),
      year: new Date(2021, 0, 11).getFullYear(),
    },
    {
      name: "BCFF11",
      volume: 100,
      price: 71,
      boughtAt: new Date(2021, 3, 23),
      month: new Date(2021, 3, 23).getMonth(),
      year: new Date(2021, 3, 23).getFullYear(),
    },
    {
      name: "BCFF11",
      volume: 100,
      price: 69.8,
      boughtAt: new Date(2021, 4, 25),
      month: new Date(2021, 4, 25).getMonth(),
      year: new Date(2021, 4, 25).getFullYear(),
    },
    {
      name: "BCFF11",
      volume: 100,
      price: 72,
      boughtAt: new Date(2021, 11, 20),
      month: new Date(2021, 11, 20).getMonth(),
      year: new Date(2021, 11, 20).getFullYear(),
    },
    {
      name: "PETR4",
      volume: 100,
      price: 24,
      boughtAt: new Date(2021, 11, 20),
      month: new Date(2021, 11, 20).getMonth(),
      year: new Date(2021, 11, 20).getFullYear(),
    },
    {
      name: "ABEV3",
      volume: 100,
      price: 24,
      boughtAt: new Date(2021, 11, 20),
      month: new Date(2021, 11, 20).getMonth(),
      year: new Date(2021, 11, 20).getFullYear(),
    },
  ];

  console.log(data);

  // //Obter o volume total de ações
  // function getTotalVolumeStock() {
  //   const totalVolumeStock: totalVolumeStockProps[] = [];

  //   const getAllNameStocks = data.map((entryStocks) => entryStocks.name);

  //   const getSingleNameStocks = getAllNameStocks.filter(
  //     (elementCurrent, indexOfElementCurrent) => {
  //       return (
  //         getAllNameStocks.indexOf(elementCurrent) === indexOfElementCurrent
  //       );
  //     }
  //   );

  //   getSingleNameStocks.forEach((stock) => {
  //     let totalVolume = 0;
  //     data
  //       .filter((entryStocks) => {
  //         if (entryStocks.name === stock) {
  //           return entryStocks;
  //         }
  //       })
  //       .map((entryStock) => entryStock.volume)
  //       .forEach((volumeStock) => (totalVolume += volumeStock));

  //     totalVolumeStock.push({ name: stock, volume: totalVolume });
  //   });
  //   console.log(totalVolumeStock);
  // }

  // Obter o volume de ações pelo tempo

  function getVolumeStockByTime() {
    const totalVolumeStocksByTime: totalVolumeStocksByTimeProps[] = [];
    const getAllOfDates = data.map((entradas) => entradas.boughtAt.getTime());

    const getSingleDates = getAllOfDates.filter(
      (elementCurrent, indexOfElementCurrent, self) => {
        return self.indexOf(elementCurrent) === indexOfElementCurrent;
      }
    );

    const getDateFormat = getSingleDates.map((timeZone) => {
      return {
        month: new Date(timeZone).getMonth(),
        year: new Date(timeZone).getFullYear(),
      };
    });

    getDateFormat.forEach((date) => {
      let totalVolume = 0;

      data
        .filter((entryStocks) => {
          if (
            entryStocks.month === date.month &&
            entryStocks.year === date.year
          ) {
            return entryStocks;
          }
        })
        .map((entryStock) => {
          const total = entryStock.volume * entryStock.price;
          totalVolume += total;
        });

      totalVolumeStocksByTime.push({
        patrimony: totalVolume,
        month: date.month,
        year: date.year,
      });
    });

    console.log(totalVolumeStocksByTime, "totalVolumeStocksByTime");
  }

  useEffect(() => {
    //getTotalVolumeStock();
    getVolumeStockByTime();
  }, []);

  return (
    <HStack gap={4}>
      <DashboardItem title="Aportes" />
      <DashboardItem title="Patrimônio" />
    </HStack>
  );
};
