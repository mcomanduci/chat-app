const QuestionDisplay = ({
  currentQuestion,
  onSubmit,
  currentIndex,
  totalQuestions,
}: {
  currentQuestion: Question & { question: string };
  onSubmit: (answer: string) => void;
  currentIndex: number;
  totalQuestions: number;
}) => {
  if (currentIndex >= totalQuestions) {
    return <p className="mt-4 text-green-500">All questions answered!</p>;
  }

  return <Form question={currentQuestion} onSubmit={onSubmit} />;
};
