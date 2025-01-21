export interface HistoryEntry {
  question: string;
  answer: string;
}

export interface Question {
  question: string | ((prevAnswer: string) => string);
  type: "text" | "email" | "tel" | "choose";
  placeholder?: string;
}

export interface FormProps {
  question: Question;
  onSubmit: (answer: string) => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
}
