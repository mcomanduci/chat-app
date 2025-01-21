"use client";
import { useEffect, useState } from "react";
import History from "../components/History";
import Form from "../components/Form";
import Intro from "../components/Intro";
import { HistoryEntry, Question } from "../types";

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

export default function ChatbotForm() {
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

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [history]);

  return (
    <>
      <div className="h-1 w-full bg-[#474C58] fixed top-0 z-50">
        <div
          className="h-1 bg-[#0042DA] transition-width duration-300"
          style={{ width: `${(currentIndex / questions.length) * 100}%` }}
        ></div>
      </div>
      {/* <div className="relative min-h-screen bg-teste bg-cover bg-center pt-10"> */}
      <div className="relative h-full w-full max-w-[800px] pt-9 mx-auto px-5 pb-[10%]">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        {/* <div className="relative max-w-xl mx-auto p-4 bg-[#171923] rounded shadow"> */}
        <Intro />
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
            <div className="flex gap-4 mt-2">
              <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
              <div className="bg-[#1E293B] px-4 py-2 rounded-md shadow text-left self-start">
                <p className="">
                  Obrigado por responder as perguntas, em breve retornaremos o
                  contato!
                </p>
              </div>
            </div>

            <div className="relative bg-white text-black mt-6 p-4">
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
        {/* <div className="h-1/5 w-full"></div> */}
        {/* </div> */}
      </div>
    </>
  );
}
