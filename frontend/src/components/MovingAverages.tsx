import React from "react";

interface MovingAveragesProps {
  data: any;
}

const MovingAverages: React.FC<MovingAveragesProps> = ({ data }) => {
  return (
    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Moving Averages</h3>
      <p>
        <strong>50-Day MA:</strong> ${data.ma_50d}
      </p>
      <p>
        <strong>200-Day MA:</strong> ${data.ma_200d}
      </p>
    </div>
  );
};

export default MovingAverages;
