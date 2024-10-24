import React from "react";

interface VolumeInfoProps {
  data: any;
}

const VolumeInfo: React.FC<VolumeInfoProps> = ({ data }) => {
  return (
    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Volume</h3>
      <p>
        <strong>Volume:</strong> {data.volume.toLocaleString()}
      </p>
      <p>
        <strong>Average Volume:</strong> {data.volume_average.toLocaleString()}
      </p>
      <p>
        <strong>10-Day Avg Volume:</strong> {data.volume_average_10d.toLocaleString()}
      </p>
    </div>
  );
};

export default VolumeInfo;
