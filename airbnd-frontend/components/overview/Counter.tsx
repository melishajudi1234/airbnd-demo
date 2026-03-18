import React from "react";
import { Plus, Minus } from "lucide-react";

interface CounterProps {
  label: string;
  subtitle?: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minValue?: number;
  maxValue?: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  subtitle,
  value,
  onIncrease,
  onDecrease,
  minValue = 0,
  maxValue = 100,
}) => {
  return (
    <div className="flex items-center justify-between py-6 border-b border-zinc-100 last:border-0 w-full">
      <div className="flex flex-col">
        <span className="text-zinc-900 text-md font-medium">{label}</span>
        {subtitle && <span className="text-zinc-500 text-sm">{subtitle}</span>}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          disabled={value <= minValue}
          className={`w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center transition-all ${value <= minValue ? "opacity-30 cursor-not-allowed" : "hover:border-zinc-700 active:scale-95"
            }`}
        >
          <Minus className="w-2 h-2.5 text-zinc-600" />
        </button>

        <span className="text-zinc-900 text-lg min-w-[20px] text-center">{value}</span>

        <button
          onClick={onIncrease}
          disabled={value >= maxValue}
          className={`w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center transition-all ${value >= maxValue ? "opacity-30 cursor-not-allowed" : "hover:border-zinc-700 active:scale-95"
            }`}
        >
          <Plus className="w-2.5 h-2.5 text-zinc-600" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
