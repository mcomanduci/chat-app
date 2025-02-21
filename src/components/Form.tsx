import React from "react";
import { type FormProps } from "../types";
import Picture from "./Picture";

const Form: React.FC<FormProps> = ({
  question,
  onSubmit,
  setCurrentIndex,
  setHistory,
}) => {
  if (!question) return null;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const answerElement = form.elements.namedItem("answer") as HTMLInputElement;
    const answer = answerElement.value.trim();
    if (!answer) return;
    onSubmit(answer);
    form.reset();
  };

  const handleButtonClick = (answer: "Sim" | "Não"): void => {
    if (answer === "Sim") {
      onSubmit(answer);
    } else {
      onSubmit("Não");
      setCurrentIndex((prev) => Math.max(prev - 2, 0));
      setHistory((prev) => prev.slice(0, -2));
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col">
      <div className="grid grid-cols-[auto_1fr] gap-1 mob:gap-2 mb-2">
        <Picture />
        <label className="bg-[#1E293B] px-4 py-2 rounded-md shadow text-left justify-self-start block">
          {typeof question.question === "function"
            ? question.question("")
            : question.question}
        </label>
      </div>
      <div className="justify-end flex gap-2 w-full">
        {question.type === "choose" ? (
          <div className="w-full max-w-[350px] flex gap-2">
            <button
              type="button"
              className="w-full px-4 py-3 bg-[#003BC4] text-white rounded-md"
              onClick={() => handleButtonClick("Sim")}
            >
              Sim
            </button>
            <button
              type="button"
              className="w-full px-4 py-3 bg-red-400 text-white rounded-md"
              onClick={() => handleButtonClick("Não")}
            >
              Não
            </button>
          </div>
        ) : (
          <>
            <div className="w-full max-w-[350px] flex gap-2">
              <input
                type={question.type}
                autoComplete="off"
                name="answer"
                className="w-full p-4 border-none rounded-md bg-[#1E293B] text-white placeholder:text-[#9095A0] placeholder:font-thin focus:outline-none"
                placeholder={question.placeholder}
              />
              <button
                type="submit"
                className="p-4 bg-[#0042DA] text-white rounded-md font-bold"
              >
                Enviar
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
