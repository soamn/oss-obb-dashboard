import { useState } from "react";
import StockInput from "./components/StockInput";
import StockInfo from "./components/StockInfo";
import MovingAverages from "./components/MovingAverages";
import VolumeInfo from "./components/VolumeInfo";
import YearlyRange from "./components/YearlyRange";
import StockChart from "./components/StockChart";

function App() {
  const [data, setData] = useState<any>();
  const [ticker, setTicker] = useState<string>("");
  const [error, setError] = useState<string>();
  const [loading, setLoadaing] = useState<boolean>();

  const getData = async (ticker: string) => {
    try {
      setLoadaing(true);
      const response = await fetch(`http://localhost:5000/openbb/${ticker}`);
      if (!response.ok) {
        setLoadaing(false);
        setError("Failed to fetch data. Please check the ticker symbol.");
        return;
      }
      setLoadaing(false);
      const res = await response.json();
      setData(res[0]);
    } catch (error) {
      setLoadaing(false);
      setError("Failed to fetch data. Please check the ticker symbol.");
    }
  };

  const handleSubmit = () => {
    setError("");
    if (!ticker) {
      setError("There is not Ticker Entered");
      return;
    }
    getData(ticker);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 ">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <StockInput
          ticker={ticker}
          setTicker={setTicker}
          handleSubmit={handleSubmit}
        />
        {error ? (
          <p className="text-red-500 text-center font-bold">{error}</p>
        ) : (
          <></>
        )}
        {data && !loading ? (
          <div className="grid grid-cols-2 gap-6">
            <StockInfo data={data} />
            <MovingAverages data={data} />
            <VolumeInfo data={data} />
            <YearlyRange data={data} />
            <div className="col-span-2 mt-6">
              <StockChart data={data} />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No data available. Please enter a ticker symbol.
          </p>
        )}
      </div>
      {loading ? (
        <>
          <div className="text-xl text-center">Loading ..</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
