
import React from 'react';
import type { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string;
  onAnswerChange: (answer: string) => void;
  submitted: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, selectedAnswer, onAnswerChange, submitted }) => {
  const getOptionClass = (option: string) => {
    if (!submitted) {
      return selectedAnswer === option ? 'bg-cyan-100 border-cyan-500 ring-2 ring-cyan-500' : 'bg-white border-gray-300 hover:bg-gray-50';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-gray-50 border-gray-200 text-gray-500';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all">
      <p className="text-sm font-semibold text-cyan-600 mb-2">Domanda {questionNumber}</p>
      {question.scenario && <p className="text-gray-500 italic mb-3 bg-gray-50 p-3 rounded-md">{question.scenario}</p>}
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswerChange(option)}
            disabled={submitted}
            className={`w-full text-left p-4 border rounded-lg transition-all text-gray-700 ${getOptionClass(option)} ${!submitted ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
      {submitted && (
        <div className="mt-4 p-4 rounded-lg bg-gray-100 border border-gray-200">
          <p className="font-bold text-gray-700 mb-1">
            {selectedAnswer === question.correctAnswer ? 
                <span className="text-green-600"><i className="fas fa-check-circle mr-2"></i>Risposta Corretta</span> : 
                <span className="text-red-600"><i className="fas fa-times-circle mr-2"></i>Risposta Sbagliata</span>
            }
          </p>
          <p className="text-sm text-gray-600">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
