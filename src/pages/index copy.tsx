"use client";
import { useState } from "react";
import History from "./components/History";
import Form from "./components/Form";

interface Question {
  question: string | ((prevAnswer: string) => string);
  type: "text" | "email" | "tel" | "choose";
  placeholder?: string;
}

interface HistoryEntry {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "Qual o seu nome?",
    type: "text",
    placeholder: "Nome",
  },
  {
    question: "Qual seu Whatsapp?",
    type: "tel",
    placeholder: "Telefone",
  },
  {
    question: (prevAnswer: string) => `O número ${prevAnswer} está correto?`,
    type: "choose",
  },
  {
    question: "Qual o seu email?",
    type: "email",
    placeholder: "Email",
  },
];

export default function ChatbotForm(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const getCurrentQuestion = (): string => {
    const currentQuestion = questions[currentIndex].question;
    if (typeof currentQuestion === "function") {
      const prevAnswer = history[history.length - 1]?.answer || "";
      return currentQuestion(prevAnswer);
    }
    return currentQuestion;
  };

  const handleAnswerSubmit = (answer: string): void => {
    setHistory([...history, { question: getCurrentQuestion(), answer }]);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-teste bg-cover bg-center pt-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-md mx-auto p-4 bg-black/50 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Chatbot Form</h1>
        <History history={history} />

        {currentIndex < questions.length ? (
          <Form
            question={{
              ...questions[currentIndex],
              question: getCurrentQuestion(),
            }}
            onSubmit={handleAnswerSubmit}
            setCurrentIndex={setCurrentIndex}
            setHistory={setHistory}
          />
        ) : (
          <div>
            <p className="mt-4 text-white">
              Obrigado por responder as perguntas, em breve retornaremos o
              contato!
            </p>

            <div className="relative bg-white text-black mt-6">
              <h2 className="text-lg font-bold">
                Respostas: (desenvolvimento / Serão enviadas ao email do
                cliente)
              </h2>
              <ul className="list-disc pl-6">
                {history.map((entry, index) => (
                  <li key={index}>
                    <strong>{entry.question}</strong>: {entry.answer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
