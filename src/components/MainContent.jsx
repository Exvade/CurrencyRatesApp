import Table from "./Table"

export default function MainContent() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-[url('/src/assets/image.jpg')] bg-cover bg-center">
      <div className="w-[50%]">
        <Table />
      </div>
    </div>
  )
}