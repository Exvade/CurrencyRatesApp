import Table from "./Table"

export default function MainContent() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-[url('/src/assets/image.jpg')] bg-cover bg-center">
      <div className="w-[50%]">
        <Table />
        <div className="flex flex-col justify-center items-center mt-4 font-bold text-yellow-400">
          <p>Rates are based from 1 USD</p>
          <p>This Application uses API from <a href="https://currencyfreaks.com" className="underline">Currency Freaks</a></p>
        </div>
      </div>
    </div>
  )
}