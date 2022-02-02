const data = [
  {
    name: "BTC",
    type: "cripto",
    volume: 0.9,
    price: 218572,
    boughtAt: new Date(2022, 0, 11),
    time: new Date(2022, 0, 11).getTime(),
    month: new Date(2022, 0, 11).getMonth(),
    year: new Date(2022, 0, 11).getFullYear(),
  },
  {
    name: "ETH",
    type: "cripto",
    volume: 0.2,
    price: 218572,
    boughtAt: new Date(2022, 0, 11),
    time: new Date(2022, 0, 11).getTime(),
    month: new Date(2022, 0, 11).getMonth(),
    year: new Date(2022, 0, 11).getFullYear(),
  },
  {
    name: "BTC",
    type: "cripto",
    volume: 0.9,
    price: 218572,
    boughtAt: new Date(2021, 3, 11),
    time: new Date(2021, 3, 11).getTime(),
    month: new Date(2021, 3, 11).getMonth(),
    year: new Date(2021, 3, 11).getFullYear(),
  },
  {
    name: "ETH",
    volume: 0.3,
    type: "cripto",
    price: 218572,
    boughtAt: new Date(2021, 0, 11),
    time: new Date(2021, 0, 11).getTime(),
    month: new Date(2021, 0, 11).getMonth(),
    year: new Date(2021, 0, 11).getFullYear(),
  },
  {
    name: "BTC",
    volume: 0.8,
    type: "cripto",
    price: 218572,
    boughtAt: new Date(2020, 0, 11),
    time: new Date(2020, 0, 11).getTime(),
    month: new Date(2020, 0, 11).getMonth(),
    year: new Date(2020, 0, 11).getFullYear(),
  },
];

class DataRepository {
  findAllOrdened() {
    return new Promise((resolve) => {
      const resultOrdened = data.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      });

      resolve(resultOrdened);
    });
  }

  findAllContribuitions(dataOrdened) {
    return new Promise((resolve) => {
      const totalVolumeStocksByTime = [];

      const getAllOfDates = dataOrdened.map((entradas) => entradas.time);

      const getSingleDates = getAllOfDates.filter(
        (elementCurrent, indexOfElementCurrent, self) => {
          return self.indexOf(elementCurrent) === indexOfElementCurrent;
        }
      );

      const getDateFormat = getSingleDates.map((time) => {
        return {
          month: new Date(time).getUTCMonth(),
          year: new Date(time).getFullYear(),
          time: time,
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
          time: date.time,
        });
      });

      const result = totalVolumeStocksByTime.map((entry) => {
        return {
          contribuitions: entry.contribuitions,
          time: entry.time,
          date: new Intl.DateTimeFormat("pt-BR", {
            month: "short",
            year: "numeric",
          })
            .format(new Date(entry.time))
            .replace(". de ", "/"),
        };
      });

      resolve(result);
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
