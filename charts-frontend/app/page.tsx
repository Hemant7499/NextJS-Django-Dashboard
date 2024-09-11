import LineChart from "./components/linechart"
import BarChart from "./components/barchart"
import PieChart from "./components/piechart"
import CandlestickChart from "./components/candlestick"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-center mb-4">Line Chart</h2>
          <LineChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-center mb-4">Bar Chart</h2>
          <BarChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-center mb-4">Pie Chart</h2>
          <PieChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-center mb-4">Candlestick Chart</h2>
          <CandlestickChart />
        </div>
      </main>
    </div>
  );
}
