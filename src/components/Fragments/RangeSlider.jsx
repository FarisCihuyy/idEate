import { useState } from "react";

export default function DistanceSlider() {
  const [value, setValue] = useState(3);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    e.target.style.setProperty("--range-progress", `${((newValue - 1) / 29) * 100}%`);
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-white">{value} km</p>
      <input
        type="range"
        min="1"
        max="30"
        step="1"
        value={value}
        onChange={handleChange}
        className="range-slider"
        style={{ "--range-progress": `${((value - 1) / 29) * 100}%` }}
      />
    </div>
  );
}
