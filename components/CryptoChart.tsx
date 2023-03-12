import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale);

interface ICryptoData {
  name: string;
  id: string;
}

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
  }[];
}

const CryptoChart = () => {
  const [cryptoList, setCryptoList] = useState<ICryptoData[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [chartData, setChartData] = useState<IChartData>({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      fill: false,
      borderColor: '',
    }],
  });

  useEffect(() => {
    const fetchCryptoList = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
      const data = await response.json();
      const filteredData = data.filter((item: { symbol: string; }) => item.symbol !== 'eur' && item.symbol !== 'usd'); // filter out fiat currencies
      const formattedData = filteredData.map((item: { name: string; id: string; }) => ({ name: item.name, id: item.id }));
      setCryptoList(formattedData);
    };
    fetchCryptoList();
  }, []);

  useEffect(() => {
    const fetchCryptoData = async () => {
      if (!selectedCrypto) return;
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=1`);
      const data = await response.json();
      const formattedData = {
        labels: data.prices.map((item: number[]) => new Date(item[0]).toLocaleDateString()),
        datasets: [{
          label: `${selectedCrypto.toUpperCase()} price in USD`,
          data: data.prices.map((item: number[]) => item[1]),
          fill: false,
          borderColor: '#E8682B',
        }],
      };
      setChartData(formattedData);
    };
    fetchCryptoData();
  }, [selectedCrypto]);

  const handleSelectCrypto = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(event.target.value);
  };

  return (
    <div className='flex flex-col bg-grey1 ml-[3%] p-[2%] rounded-2xl mb-[5%]'>
      <label className='text-xl mb-[2%]'>Crypto Price Chart</label>
      <select value={selectedCrypto} onChange={handleSelectCrypto} className="bg-grey1">
        <option value="">Select a cryptocurrency</option>
        {cryptoList.map((item: ICryptoData) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
      {chartData.labels.length > 0 && (
        <Line data={chartData} />
      )}
    </div>
  );
};

export default CryptoChart;
