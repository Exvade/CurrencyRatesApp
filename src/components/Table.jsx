import axios from "axios"
import { useEffect, useState } from "react"


export default function Table() {
  const [currency, setCurrency] = useState([])
  const getResults = async () => {
    await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9679cc0fdbcf4e51b9e3954e6dd8ffb7')
      .then(response => {
        setCurrency(response.data.rates);
      })
      .catch((error) => console.error(`Error fetching data: ${error}`))
  }
  useEffect(() => {
    getResults();
  }, [])

  const weBuy = (rate) => (rate * 1.05).toFixed(3);
  const weSell = (rate) => (rate * 0.95).toFixed(3);
  return (
    <table className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
      <thead className="text-xl">
        <tr>
          <th className="px-4 py-3 font-bold text-white tracking-wider">
            Currency
          </th>
          <th className="px-4 py-3 font-bold text-white tracking-wider">
            We Buy
          </th>
          <th className="px-4 py-3 font-bold text-white tracking-wider">
            Exchange Rate
          </th>
          <th className="px-4 py-3 font-bold text-white tracking-wider">
            We Sell
          </th>
        </tr>
      </thead>
      <tbody className="text-white font-semibold">
        <tr className="text-center">
          <td className="px-4 py-3">CAD</td>
          <td className="px-4 py-3">{weBuy(Number(currency.CAD))}</td>
          <td className="px-4 py-3">{Number(currency.CAD).toFixed(3)}</td>
          <td className="px-4 py-3">{weSell(Number(currency.CAD))}</td>
        </tr>
        <tr className="text-center">
          <td className="px-4 py-3">EUR</td>
          <td className="px-4 py-3">{weBuy(Number(currency.EUR))}</td>
          <td className="px-4 py-3">{Number(currency.EUR).toFixed(3)}</td>
          <td className="px-4 py-3">{weSell(Number(currency.EUR))}</td>
        </tr>
        <tr className="text-center">
          <td className="px-4 py-3">IDR</td>
          <td className="px-4 py-3">{weBuy(Number(currency.IDR))}</td>
          <td className="px-4 py-3">{Number(currency.IDR).toFixed(3)}</td>
          <td className="px-4 py-3">{weSell(Number(currency.IDR))}</td>
        </tr>
        <tr className="text-center">
          <td className="px-4 py-3">JPY</td>
          <td className="px-4 py-3">{weBuy(Number(currency.JPY))}</td>
          <td className="px-4 py-3">{Number(currency.JPY).toFixed(3)}</td>
          <td className="px-4 py-3">{weSell(Number(currency.JPY))}</td>
        </tr>
        <tr className="text-center">
          <td className="px-4 py-3">CHF</td>
          <td className="px-4 py-3">{weBuy(Number(currency.CHF))}</td>
          <td className="px-4 py-3">{Number(currency.CHF).toFixed(3)}</td>
          <td className="px-4 py-3">{weSell(Number(currency.CHF))}</td>
        </tr>
        <tr className="text-center">
          <td className="px-4 pt-3 pb-4">GBP</td>
          <td className="px-4 pt-3 pb-4">{weBuy(Number(currency.GBP))}</td>
          <td className="px-4 pt-3 pb-4">{Number(currency.GBP).toFixed(3)}</td>
          <td className="px-4 pt-3 pb-4">{weSell(Number(currency.GBP))}</td>
        </tr>
      </tbody>
    </table>
  )
}