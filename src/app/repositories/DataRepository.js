const data = [
  {
    name: "BCFF11",
    type: "funds",
    volume: 200,
    price: 70.8,
    boughtAt: new Date(2022, 0, 11),
    month: new Date(2022, 0, 11).getMonth(),
    year: new Date(2022, 0, 11).getFullYear(),
  },
  {
    name: "BCFF11",
    volume: 100,
    type: "funds",
    price: 68,
    boughtAt: new Date(2021, 0, 11),
    month: new Date(2021, 0, 11).getMonth(),
    year: new Date(2021, 0, 11).getFullYear(),
  },
  {
    name: "BCFF11",
    type: "funds",
    volume: 100,
    price: 71,
    boughtAt: new Date(2020, 3, 23),
    month: new Date(2020, 3, 23).getMonth(),
    year: new Date(2020, 3, 23).getFullYear(),
  },
  {
    name: "BCFF11",
    type: "funds",
    volume: 100,
    price: 69.8,
    boughtAt: new Date(2021, 4, 25),
    month: new Date(2021, 4, 25).getMonth(),
    year: new Date(2021, 4, 25).getFullYear(),
  },
  {
    name: "BCFF11",
    type: "funds",
    volume: 100,
    price: 72,
    boughtAt: new Date(2021, 11, 20),
    month: new Date(2021, 11, 20).getMonth(),
    year: new Date(2021, 11, 20).getFullYear(),
  },
  {
    name: "PETR4",
    type: "stocks",
    volume: 100,
    price: 24,
    boughtAt: new Date(2021, 11, 20),
    month: new Date(2021, 11, 20).getMonth(),
    year: new Date(2021, 11, 20).getFullYear(),
  },
  {
    name: "ABEV3",
    type: "stocks",
    volume: 100,
    price: 24,
    boughtAt: new Date(2020, 11, 20),
    month: new Date(2020, 11, 20).getMonth(),
    year: new Date(2020, 11, 20).getFullYear(),
  },
  {
    name: "ABEV3",
    type: "stocks",
    volume: 100,
    price: 24,
    boughtAt: new Date(2020, 10, 20),
    month: new Date(2020, 10, 20).getMonth(),
    year: new Date(2020, 10, 20).getFullYear(),
  },
];

class DataRepository {
  findAll() {
    return new Promise((resolve) => resolve(data));
  }

  findAllContribuitions() {
    return new Promise((resolve) => {
      const totalVolumeStocksByTime = [];

      const getAllOfDates = data.map((entradas) => entradas.boughtAt.getTime());

      const getSingleDates = getAllOfDates.filter(
        (elementCurrent, indexOfElementCurrent, self) => {
          return self.indexOf(elementCurrent) === indexOfElementCurrent;
        }
      );

      const getDateFormat = getSingleDates.map((timeZone) => {
        return {
          month: new Date(timeZone).getUTCMonth(),
          year: new Date(timeZone).getFullYear(),
          timeZone: timeZone,
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
          contribuitions: totalVolume,
          month: date.month,
          year: date.year,
          timeZone: date.timeZone,
        });
      });

      const result = totalVolumeStocksByTime.map((entry) => {
        return {
          contribuitions: entry.contribuitions,
          timeZone: entry.timeZone,
          date: new Intl.DateTimeFormat("pt-BR", {
            month: "short",
            year: "numeric",
          })
            .format(new Date(entry.timeZone))
            .replace(". de ", "/"),
        };
      });

      const resultOrdened = result.sort((a, b) => {
        return a.timeZone < b.timeZone ? -1 : 1;
      });

      resolve(resultOrdened);
    });
  }

  findTotalVolumeStocks() {
    return new Promise((resolve) => {
      const totalVolumeStock = [];

      const getAllNameStocks = data.map((entryStocks) => entryStocks.name);

      const getSingleNameStocks = getAllNameStocks.filter(
        (elementCurrent, indexOfElementCurrent) => {
          return (
            getAllNameStocks.indexOf(elementCurrent) === indexOfElementCurrent
          );
        }
      );

      getSingleNameStocks.forEach((stock) => {
        let totalVolume = 0;
        data
          .filter((entryStocks) => {
            if (entryStocks.name === stock) {
              return entryStocks;
            }
          })
          .map((entryStock) => entryStock.volume)
          .forEach((volumeStock) => (totalVolume += volumeStock));

        totalVolumeStock.push({ name: stock, volume: totalVolume });
      });
      resolve(totalVolumeStock);
    });
  }
}

module.exports = new DataRepository();
