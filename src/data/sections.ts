import { Section } from "../models/Section";

export const sections: Section[] = [
  {
    id: 1,
    section: "Countries",
    icon: "flag",
    questions: [
      {
        id: 1,
        sectionId: 1,
        questionText: "What is the capital of France?",
        options: [
          { id: 1, text: "London", isCorrect: false },
          { id: 2, text: "Paris", isCorrect: true },
          { id: 3, text: "Berlin", isCorrect: false },
          { id: 4, text: "Madrid", isCorrect: false }
        ],
        explanation: "Paris is the capital of France."
      },
      {
        id: 2,
        sectionId: 1,
        questionText: "What is the capital of Italy?",
        options: [
          { id: 5, text: "Rome", isCorrect: true },
          { id: 6, text: "Madrid", isCorrect: false },
          { id: 7, text: "Athens", isCorrect: false },
          { id: 8, text: "Berlin", isCorrect: false }
        ],
        explanation: "Rome is the capital of Italy."
      },
      {
        id: 3,
        sectionId: 1,
        questionText: "What is the capital of Japan?",
        options: [
          { id: 9, text: "Tokyo", isCorrect: true },
          { id: 10, text: "Beijing", isCorrect: false },
          { id: 11, text: "Seoul", isCorrect: false },
          { id: 12, text: "Bangkok", isCorrect: false }
        ],
        explanation: "Tokyo is the capital of Japan."
      },
      {
        id: 4,
        sectionId: 1,
        questionText: "What is the capital of Brazil?",
        options: [
          { id: 13, text: "São Paulo", isCorrect: false },
          { id: 14, text: "Brasília", isCorrect: true },
          { id: 15, text: "Rio de Janeiro", isCorrect: false },
          { id: 16, text: "Buenos Aires", isCorrect: false }
        ],
        explanation: "Brasília is the capital of Brazil."
      },
    ]
  },
  {
    id: 2,
    section: "Colors",
    icon: "palette",
    questions: [
      {
        id: 5,
        sectionId: 2,
        questionText: "Which color is a mixture of red and blue?",
        options: [
          { id: 17, text: "Green", isCorrect: false },
          { id: 18, text: "Purple", isCorrect: true },
          { id: 19, text: "Yellow", isCorrect: false },
          { id: 20, text: "Orange", isCorrect: false }
        ],
        explanation: "Purple is a mixture of red and blue."
      },
      {
        id: 6,
        sectionId: 2,
        questionText: "What color is the sky on a clear day?",
        options: [
          { id: 21, text: "Green", isCorrect: false },
          { id: 22, text: "Blue", isCorrect: true },
          { id: 23, text: "Red", isCorrect: false },
          { id: 24, text: "Yellow", isCorrect: false }
        ],
        explanation: "The sky is blue on a clear day."
      },
      {
        id: 7,
        sectionId: 2,
        questionText: "Which color is often associated with love and passion?",
        options: [
          { id: 25, text: "Green", isCorrect: false },
          { id: 26, text: "Blue", isCorrect: false },
          { id: 27, text: "Red", isCorrect: true },
          { id: 28, text: "Yellow", isCorrect: false }
        ],
        explanation: "Red is often associated with love and passion."
      },
      {
        id: 8,
        sectionId: 2,
        questionText: "What color is a lemon?",
        options: [
          { id: 29, text: "Green", isCorrect: false },
          { id: 30, text: "Blue", isCorrect: false },
          { id: 31, text: "Yellow", isCorrect: true },
          { id: 32, text: "Orange", isCorrect: false }
        ],
        explanation: "A lemon is yellow in color."
      },
    ]
  },
  // Sección 3: Animals
  {
    id: 3,
    section: "Animals",
    icon: "paw",
    questions: [
      {
        id: 9,
        sectionId: 3,
        questionText: "Which animal is known as the 'King of the Jungle'?",
        options: [
          { id: 33, text: "Elephant", isCorrect: false },
          { id: 34, text: "Giraffe", isCorrect: false },
          { id: 35, text: "Lion", isCorrect: true },
          { id: 36, text: "Tiger", isCorrect: false }
        ],
        explanation: "The lion is often referred to as the 'King of the Jungle'."
      },
      {
        id: 10,
        sectionId: 3,
        questionText: "Which bird is known for its ability to imitate human speech?",
        options: [
          { id: 37, text: "Crow", isCorrect: false },
          { id: 38, text: "Parrot", isCorrect: true },
          { id: 39, text: "Pigeon", isCorrect: false },
          { id: 40, text: "Sparrow", isCorrect: false }
        ],
        explanation: "The parrot is known for its ability to mimic human speech."
      },
      {
        id: 11,
        sectionId: 3,
        questionText: "Which animal is the largest living terrestrial mammal?",
        options: [
          { id: 41, text: "Giraffe", isCorrect: false },
          { id: 42, text: "Elephant", isCorrect: true },
          { id: 43, text: "Hippopotamus", isCorrect: false },
          { id: 44, text: "Rhinoceros", isCorrect: false }
        ],
        explanation: "The elephant is the largest living terrestrial mammal."
      },
      {
        id: 12,
        sectionId: 3,
        questionText: "Which animal is known for its ability to change color to match its surroundings?",
        options: [
          { id: 45, text: "Chameleon", isCorrect: true },
          { id: 46, text: "Lizard", isCorrect: false },
          { id: 47, text: "Frog", isCorrect: false },
          { id: 48, text: "Snake", isCorrect: false }
        ],
        explanation: "The chameleon is known for its ability to change color."
      },
    ]
  },
];
