import axios from 'axios';
import { useEffect, useState } from 'react';
import CryptoSummary from './CryptoSummary';
import  {Crypto}  from './Types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Chart() {
    const [cryptos, setCryptos] = useState<Crypto[] | null>(null);
    const [selected, setSelected] = useState<Crypto[]>([]);
    const [range, setRange] = useState<Number>(30);
    
    const [data, setData] = useState<ChartData<'line'>>();
    const [options, setOptions] = useState<ChartOptions<'line'>>({
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    });
    

    useEffect(() => {
        const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        axios.get(url).then((response) => {
            setCryptos(response.data);
        });
    }, []);

    
    useEffect(() => {
        if (!selected) return;
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${range}&${range === 1 ? 'interval=hourly' : `interval=daily`}`
            )
            .then((response) => {
                console.log(response.data);
                setData({
                    labels: response.data.prices.map((price: number[]) => {
                        return moment
                            .unix(price[0] / 1000)
                            .format(range === 1 ? 'HH:MM' : 'MM-DD');
                    }),
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: response.data.prices.map(
                                (price: number[]) => {
                                    return price[1].toFixed(2);
                                }
                            ),
                            borderColor: 'rgb(232, 104, 43)',
                            backgroundColor: 'rgba(232, 104, 43, 0.5)',
                        },
                    ],
                });
                setOptions({
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: false,
                            // text:
                            //     `${selected?.name} Price Over Last ` +
                            //     range +
                            //     (range === 1 ? ' Day.' : ' Days.'),
                        },
                    },
                });
            });
    }, [selected, range]);
    
    return (
        <div className='flex flex-col bg-grey1 ml-[3%] px-[2%] py-[3%] mb-[5%] rounded-2xl'>
            <div>
                <select
                    onChange={(e) => {
                        const c = cryptos?.find(
                            (x) => x.id === e.target.value
                        ) as Crypto;
                        setSelected([c]);
                    }}
                    defaultValue="default"
                    className='bg-grey1 rounded-lg py-[1%] px-[%] mb-[3%] text-xl'
                >
                    <option value="default">Choose an option</option>
                    {cryptos
                        ? cryptos.map((crypto) => {
                              return (
                                  <option key={crypto.id} value={crypto.id}>
                                      {crypto.name}
                                  </option>
                              );
                          })
                        : null}
                </select>

                {/* <select onChange={(e) => {setRange(parseInt(e.target.value))}}>
                    <option value="30">30 Days</option>
                    <option value="7">7 Days</option>
                    <option value="1">1 Day</option>
                </select> */}
            </div>

            {data ? (
                <div style={{ width: 600 }}>
                    <Line options={options} data={data} />
                </div>
            ) : null}
        </div>
    );
}

export default Chart;
