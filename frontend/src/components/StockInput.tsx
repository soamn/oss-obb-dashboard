import React from "react";

interface StockInputProps {
  ticker: string;
  setTicker: (ticker: string) => void;
  handleSubmit: () => void;
}

const StockInput: React.FC<StockInputProps> = ({ ticker, setTicker, handleSubmit }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <input
        className="border-2 border-gray-300 rounded-md p-2 w-1/3"
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter Ticker Symbol"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md ml-4 hover:bg-blue-600 transition duration-300"
        onClick={handleSubmit}
      >
        Fetch Data
      </button>
    </div>
  );
};

export default StockInput;
