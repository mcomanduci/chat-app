type HistoryEntry = {
  question: string;
  answer: string;
};

const AnswerSummary = ({ history }: { history: HistoryEntry[] }) => (
  <div className="relative bg-white text-black mt-6 p-4 rounded shadow">
    <h2 className="text-lg font-bold">Collected Answers:</h2>
    <ul className="list-disc pl-6">
      {history.map((entry, index) => (
        <li key={index}>
          <strong>{entry.question}</strong>: {entry.answer}
        </li>
      ))}
    </ul>
  </div>
);

export default AnswerSummary;
