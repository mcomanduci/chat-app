import React from "react";
import { type HistoryEntry } from "../types";
import Picture from "./Picture";
interface HistoryProps {
  history: HistoryEntry[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="space-y-2">
      {history.map((entry, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="grid grid-cols-[auto_1fr] gap-1 mob:gap-2">
            <Picture />
            <div className="bg-[#1E293B] px-4 py-2 rounded-md shadow text-left justify-self-start">
              <p>{entry.question}</p>
            </div>
          </div>
          <div className="bg-[#FF8E21] px-4 py-2 rounded-md shadow text-right self-end">
            <p>{entry.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
