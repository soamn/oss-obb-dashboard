import React from "react";

interface YearlyRangeProps {
  data: any;
}

const YearlyRange: React.FC<YearlyRangeProps> = ({ data }) => {
  return (
    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Yearly Range</h3>
      <p>
        <strong>52-Week High:</strong> ${data.year_high}
      </p>
      <p>
        <strong>52-Week Low:</strong> ${data.year_low}
      </p>
    </div>
  );
};

export default YearlyRange;
