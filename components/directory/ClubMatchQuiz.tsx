"use client";

import { useState } from "react";
import Link from "next/link";
import { chapters } from "@/lib/data";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: { [key: string]: number };
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What gets you most excited about after-school activities?",
    options: [
      { text: "Building and creating things", scores: { STEM: 3, Arts: 1 } },
      { text: "Competing and winning", scores: { Academic: 2, STEM: 2 } },
      { text: "Helping others", scores: { Service: 3, Cultural: 1 } },
      { text: "Expressing myself", scores: { Arts: 3, Cultural: 1 } },
      {
        text: "Learning about cultures",
        scores: { Cultural: 3, Service: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to work?",
    options: [
      {
        text: "Small focused team on technical projects",
        scores: { STEM: 3, Academic: 1 },
      },
      {
        text: "Large group with social interaction",
        scores: { Service: 2, Cultural: 2, Arts: 1 },
      },
      {
        text: "Independently with occasional collaboration",
        scores: { Academic: 3, Arts: 1 },
      },
      {
        text: "Leading others toward a goal",
        scores: { Service: 2, Cultural: 1, Academic: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "What skill do you most want to develop?",
    options: [
      { text: "Technical problem-solving", scores: { STEM: 3, Academic: 2 } },
      {
        text: "Public speaking & debate",
        scores: { Academic: 3, Cultural: 1 },
      },
      {
        text: "Creativity & artistic expression",
        scores: { Arts: 3, Cultural: 1 },
      },
      {
        text: "Leadership & organization",
        scores: { Service: 2, Academic: 1, Cultural: 1 },
      },
      { text: "Cultural awareness", scores: { Cultural: 3, Service: 1 } },
    ],
  },
  {
    id: 4,
    question: "What type of events interest you most?",
    options: [
      { text: "Hackathons and build competitions", scores: { STEM: 3 } },
      { text: "Academic tournaments", scores: { Academic: 3 } },
      { text: "Performances and exhibitions", scores: { Arts: 3 } },
      { text: "Community service projects", scores: { Service: 3 } },
      { text: "Cultural celebrations", scores: { Cultural: 3 } },
    ],
  },
  {
    id: 5,
    question: "How much time can you commit weekly?",
    options: [
      {
        text: "1-2 hours (light)",
        scores: { Cultural: 1, Arts: 1, Service: 1 },
      },
      {
        text: "3-5 hours (moderate)",
        scores: { Academic: 2, Service: 2, Arts: 2 },
      },
      { text: "6-10 hours (significant)", scores: { STEM: 2, Academic: 2 } },
      { text: "10+ hours (intensive)", scores: { STEM: 3, Academic: 3 } },
    ],
  },
];

const categoryInfo: Record<string, { emoji: string; description: string }> = {
  STEM: {
    emoji: "🔬",
    description:
      "You love building, experimenting, and solving technical challenges.",
  },
  Academic: {
    emoji: "📚",
    description:
      "Intellectual challenges, debate, and competitions motivate you.",
  },
  Arts: {
    emoji: "🎨",
    description:
      "Creative expression through visual arts, music, theater, or writing.",
  },
  Service: {
    emoji: "❤️",
    description:
      "Making a difference and helping your community gives you purpose.",
  },
  Cultural: {
    emoji: "🌍",
    description:
      "Learning about cultures and connecting diverse people inspires you.",
  },
};

export default function ClubMatchQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    STEM: 0,
    Academic: 0,
    Arts: 0,
    Service: 0,
    Cultural: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const option = quizQuestions[currentQuestion].options[optionIndex];
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([cat, score]) => {
      newScores[cat] = (newScores[cat] || 0) + score;
    });
    setScores(newScores);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopCategories = () =>
    Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

  const getRecommendedClubs = () => {
    const topCats = getTopCategories().map(([cat]) => cat);
    return chapters.filter((c) => topCats.includes(c.category)).slice(0, 4);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ STEM: 0, Academic: 0, Arts: 0, Service: 0, Cultural: 0 });
    setShowResults(false);
    setIsStarted(false);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (!isStarted) {
    return (
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 border border-primary-800 p-5 md:p-6 rounded-xl h-full flex flex-col justify-between">
        <div className="text-white">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-heading font-bold">Club Match Quiz</h2>
          </div>
          <p className="text-white/85 leading-relaxed">
            Not sure which club is right for you? Take our quick personality
            quiz to discover clubs that match your interests, goals, and
            schedule.
          </p>
          <p className="text-white/60 text-sm mt-2">
            5 questions · Takes about 1 minute
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={() => setIsStarted(true)}
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 font-semibold transition-colors rounded-md w-full"
          >
            Start Quiz →
          </button>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/resources"
              className="border border-white/40 hover:bg-white/10 text-white px-5 py-3 font-semibold transition-colors text-center rounded-md"
            >
              Browse Resources
            </Link>
            <Link
              href="/events"
              className="border border-white/40 hover:bg-white/10 text-white px-5 py-3 font-semibold transition-colors text-center rounded-md"
            >
              Suggested Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const top = getTopCategories();
    const recommended = getRecommendedClubs();
    const maxScore = Math.max(...Object.values(scores));
    return (
      <div className="bg-white border border-neutral-200 p-5 md:p-6 space-y-5 animate-fade-up rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-secondary-500 uppercase tracking-wider">
              Your Results
            </p>
            <h2 className="text-2xl font-heading font-bold text-primary-700 mt-1">
              {categoryInfo[top[0][0]]?.emoji} Best Match: {top[0][0]} Clubs
            </h2>
            <p className="text-neutral-600 mt-1">
              {categoryInfo[top[0][0]]?.description}
            </p>
          </div>
          <button
            onClick={resetQuiz}
            className="text-sm font-semibold text-primary-600 hover:underline"
          >
            Retake Quiz
          </button>
        </div>

        <div className="space-y-3">
          {top.map(([category, score], idx) => {
            const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
            return (
              <div key={category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-neutral-700">
                    {categoryInfo[category]?.emoji} {category}
                  </span>
                  <span className="text-neutral-500">{score} pts</span>
                </div>
                <div className="h-3 bg-neutral-200 overflow-hidden rounded-full">
                  <div
                    className={`h-full transition-all duration-700 ${
                      idx === 0
                        ? "bg-secondary-500"
                        : idx === 1
                          ? "bg-primary-500"
                          : "bg-neutral-400"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">
            Recommended Clubs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {recommended.map((club) => (
              <Link
                key={club.id}
                href={`/directory/${club.id}`}
                className="border border-neutral-200 p-4 hover:border-primary-300 hover:bg-primary-50/40 transition-all group rounded-lg"
              >
                <p className="font-bold text-primary-700 group-hover:text-primary-600">
                  {club.name}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {club.category} · {club.memberCount} members
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 p-5 md:p-6 animate-fade-up rounded-xl">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-neutral-600 mb-2">
          <span>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-neutral-200 overflow-hidden mb-6 rounded-full">
          <div
            className="h-full bg-secondary-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-xl font-heading font-bold text-primary-700 mb-6 text-center">
          {quizQuestions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {quizQuestions[currentQuestion].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full p-4 text-left border border-neutral-200 hover:border-primary-400 hover:bg-primary-50 transition-all font-medium text-neutral-700 hover:text-primary-600 rounded-lg"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={resetQuiz}
            className="text-neutral-500 hover:text-neutral-700 text-sm"
          >
            Start Over
          </button>
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              ← Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
