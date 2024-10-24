import React from "react";

interface StockInfoProps {
  data: any;
}

const StockInfo: React.FC<StockInfoProps> = ({ data }) => {
  return (
    <div className="col-span-2 text-center mb-4">
      <h1 className="text-2xl font-bold">
        {data.name} ({data.symbol})
      </h1>
      <p className="text-gray-500">
        Exchange: {data.exchange} | Currency: {data.currency}
      </p>
    </div>
  );
};

export default StockInfo;
