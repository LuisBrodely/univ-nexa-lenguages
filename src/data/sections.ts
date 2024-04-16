import { Section } from "../models/Section";

export const sections: Section[] = [
  {
    id: 1,
    section: "Animals",
    icon: "paw",
    questions: [
      {
        id: 1,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_perro',
        options: [
          { id: 1, text: "Perro", isCorrect: true },
          { id: 2, text: "Gato", isCorrect: false },
          { id: 3, text: "Elefante", isCorrect: false },
          { id: 4, text: "Oso", isCorrect: false }
        ],
        explanation: "Dog"
      },
      {
        id: 2,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_gato',
        options: [
          { id: 5, text: "Gato", isCorrect: true },
          { id: 6, text: "Perro", isCorrect: false },
          { id: 7, text: "León", isCorrect: false },
          { id: 8, text: "Tigre", isCorrect: false }
        ],
        explanation: "Cat"
      },
      {
        id: 3,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_elefante',
        options: [
          { id: 9, text: "Elefante", isCorrect: true },
          { id: 10, text: "Jirafa", isCorrect: false },
          { id: 11, text: "Rinoceronte", isCorrect: false },
          { id: 12, text: "Hipopótamo", isCorrect: false }
        ],
        explanation: "Elephant"
      },
      {
        id: 4,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_leon',
        options: [
          { id: 13, text: "León", isCorrect: true },
          { id: 14, text: "Leopardo", isCorrect: false },
          { id: 15, text: "Tigre", isCorrect: false },
          { id: 16, text: "Jaguar", isCorrect: false }
        ],
        explanation: "Lion"
      },
      {
        id: 5,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_caballo',
        options: [
          { id: 17, text: "Caballo", isCorrect: true },
          { id: 18, text: "Vaca", isCorrect: false },
          { id: 19, text: "Cerdo", isCorrect: false },
          { id: 20, text: "Oveja", isCorrect: false }
        ],
        explanation: "Horse"
      },
      {
        id: 6,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_vaca',
        options: [
          { id: 21, text: "Vaca", isCorrect: true },
          { id: 22, text: "Cabra", isCorrect: false },
          { id: 23, text: "Búfalo", isCorrect: false },
          { id: 24, text: "Yak", isCorrect: false }
        ],
        explanation: "Cow"
      },
      {
        id: 7,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'url_de_la_imagen_oveja',
        options: [
          { id: 25, text: "Oveja", isCorrect: true },
          { id: 26, text: "Cerdo", isCorrect: false },
          { id: 27, text: "Cabra", isCorrect: false },
          { id: 28, text: "Vaca", isCorrect: false }
        ],
        explanation: "Sheep"
      }
    ]
  },
  {
    id: 2,
    section: "Fruits and Vegetables",
    icon: "food-apple",
    questions: [
      {
        id: 8,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_1',
        options: [
          { id: 1, text: "Manzana", isCorrect: true },
          { id: 2, text: "Naranja", isCorrect: false },
          { id: 3, text: "Plátano", isCorrect: false },
          { id: 4, text: "Pera", isCorrect: false }
        ],
        explanation: "Apple"
      },
      {
        id: 9,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_2',
        options: [
          { id: 5, text: "Naranja", isCorrect: true },
          { id: 6, text: "Manzana", isCorrect: false },
          { id: 7, text: "Plátano", isCorrect: false },
          { id: 8, text: "Uva", isCorrect: false }
        ],
        explanation: "Orange"
      },
      {
        id: 10,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_3',
        options: [
          { id: 9, text: "Plátano", isCorrect: true },
          { id: 10, text: "Manzana", isCorrect: false },
          { id: 11, text: "Uva", isCorrect: false },
          { id: 12, text: "Pera", isCorrect: false }
        ],
        explanation: "Banana"
      },
      {
        id: 11,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_4',
        options: [
          { id: 13, text: "Uva", isCorrect: true },
          { id: 14, text: "Manzana", isCorrect: false },
          { id: 15, text: "Plátano", isCorrect: false },
          { id: 16, text: "Naranja", isCorrect: false }
        ],
        explanation: "Grape"
      },
      {
        id: 12,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_5',
        options: [
          { id: 17, text: "Pera", isCorrect: true },
          { id: 18, text: "Manzana", isCorrect: false },
          { id: 19, text: "Plátano", isCorrect: false },
          { id: 20, text: "Naranja", isCorrect: false }
        ],
        explanation: "Pear"
      },
      {
        id: 13,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_6',
        options: [
          { id: 21, text: "Sandía", isCorrect: true },
          { id: 22, text: "Naranja", isCorrect: false },
          { id: 23, text: "Manzana", isCorrect: false },
          { id: 24, text: "Uva", isCorrect: false }
        ],
        explanation: "Watermelon"
      },
      {
        id: 14,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'url_de_la_imagen_fruta_verdura_7',
        options: [
          { id: 25, text: "Zanahoria", isCorrect: true },
          { id: 26, text: "Lechuga", isCorrect: false },
          { id: 27, text: "Tomate", isCorrect: false },
          { id: 28, text: "Pepino", isCorrect: false }
        ],
        explanation: "Carrot"
      }
    ]
  },
  {
    id: 3,
    section: "Colors",
    icon: "palette", // Ícono de Material Design para colores
    questions: [
      {
        id: 15,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_1',
        options: [
          { id: 29, text: "Red", isCorrect: true },
          { id: 30, text: "Blue", isCorrect: false },
          { id: 31, text: "Green", isCorrect: false },
          { id: 32, text: "Yellow", isCorrect: false }
        ],
        explanation: "Rojo"
      },
      {
        id: 16,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_2',
        options: [
          { id: 33, text: "Blue", isCorrect: true },
          { id: 34, text: "Red", isCorrect: false },
          { id: 35, text: "Yellow", isCorrect: false },
          { id: 36, text: "Green", isCorrect: false }
        ],
        explanation: "Azul"
      },
      {
        id: 17,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_3',
        options: [
          { id: 37, text: "Green", isCorrect: true },
          { id: 38, text: "Yellow", isCorrect: false },
          { id: 39, text: "Red", isCorrect: false },
          { id: 40, text: "Blue", isCorrect: false }
        ],
        explanation: "Verde"
      },
      {
        id: 18,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_4',
        options: [
          { id: 41, text: "Yellow", isCorrect: true },
          { id: 42, text: "Green", isCorrect: false },
          { id: 43, text: "Blue", isCorrect: false },
          { id: 44, text: "Red", isCorrect: false }
        ],
        explanation: "Amarillo"
      },
      {
        id: 19,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_5',
        options: [
          { id: 45, text: "Purple", isCorrect: true },
          { id: 46, text: "Orange", isCorrect: false },
          { id: 47, text: "Pink", isCorrect: false },
          { id: 48, text: "Brown", isCorrect: false }
        ],
        explanation: "Morado"
      },
      {
        id: 20,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_6',
        options: [
          { id: 49, text: "Orange", isCorrect: true },
          { id: 50, text: "Purple", isCorrect: false },
          { id: 51, text: "Pink", isCorrect: false },
          { id: 52, text: "Brown", isCorrect: false }
        ],
        explanation: "Naranja"
      },
      {
        id: 21,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'url_de_la_imagen_color_7',
        options: [
          { id: 53, text: "Pink", isCorrect: true },
          { id: 54, text: "Purple", isCorrect: false },
          { id: 55, text: "Orange", isCorrect: false },
          { id: 56, text: "Brown", isCorrect: false }
        ],
        explanation: "Rosa"
      }
    ]
  },
  {
    id: 4,
    section: "Numbers",
    icon: "format-list-numbered", // Ícono de Material Design para números
    questions: [
      {
        id: 22,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_1',
        options: [
          { id: 57, text: "One", isCorrect: true },
          { id: 58, text: "Two", isCorrect: false },
          { id: 59, text: "Three", isCorrect: false },
          { id: 60, text: "Four", isCorrect: false }
        ],
        explanation: "Uno"
      },
      {
        id: 23,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_2',
        options: [
          { id: 61, text: "Two", isCorrect: true },
          { id: 62, text: "One", isCorrect: false },
          { id: 63, text: "Three", isCorrect: false },
          { id: 64, text: "Four", isCorrect: false }
        ],
        explanation: "Dos"
      },
      {
        id: 24,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_3',
        options: [
          { id: 65, text: "Three", isCorrect: true },
          { id: 66, text: "One", isCorrect: false },
          { id: 67, text: "Two", isCorrect: false },
          { id: 68, text: "Four", isCorrect: false }
        ],
        explanation: "Tres"
      },
      {
        id: 25,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_4',
        options: [
          { id: 69, text: "Four", isCorrect: true },
          { id: 70, text: "One", isCorrect: false },
          { id: 71, text: "Two", isCorrect: false },
          { id: 72, text: "Three", isCorrect: false }
        ],
        explanation: "Cuatro"
      },
      {
        id: 26,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_5',
        options: [
          { id: 73, text: "Five", isCorrect: true },
          { id: 74, text: "Six", isCorrect: false },
          { id: 75, text: "Seven", isCorrect: false },
          { id: 76, text: "Eight", isCorrect: false }
        ],
        explanation: "Cinco"
      },
      {
        id: 27,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_6',
        options: [
          { id: 77, text: "Six", isCorrect: true },
          { id: 78, text: "Five", isCorrect: false },
          { id: 79, text: "Seven", isCorrect: false },
          { id: 80, text: "Eight", isCorrect: false }
        ],
        explanation: "Seis"
      },
      {
        id: 28,
        sectionId: 4,
        questionText: "What number is this?",
        img: 'url_de_la_imagen_numero_7',
        options: [
          { id: 81, text: "Seven", isCorrect: true },
          { id: 82, text: "Five", isCorrect: false },
          { id: 83, text: "Six", isCorrect: false },
          { id: 84, text: "Eight", isCorrect: false }
        ],
        explanation: "Siete"
      }
    ]
  },
  {
    id: 5,
    section: "Food and Drinks",
    icon: "food",
    questions: [
      {
        id: 29,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_1',
        options: [
          { id: 85, text: "Pizza", isCorrect: true },
          { id: 86, text: "Hamburger", isCorrect: false },
          { id: 87, text: "Hot Dog", isCorrect: false },
          { id: 88, text: "Sandwich", isCorrect: false }
        ],
        explanation: "Pizza"
      },
      {
        id: 30,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_2',
        options: [
          { id: 89, text: "Hamburger", isCorrect: true },
          { id: 90, text: "Pizza", isCorrect: false },
          { id: 91, text: "Hot Dog", isCorrect: false },
          { id: 92, text: "Sandwich", isCorrect: false }
        ],
        explanation: "Hamburger"
      },
      {
        id: 31,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_3',
        options: [
          { id: 93, text: "Hot Dog", isCorrect: true },
          { id: 94, text: "Pizza", isCorrect: false },
          { id: 95, text: "Hamburger", isCorrect: false },
          { id: 96, text: "Sandwich", isCorrect: false }
        ],
        explanation: "Hot Dog"
      },
      {
        id: 32,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_4',
        options: [
          { id: 97, text: "Sandwich", isCorrect: true },
          { id: 98, text: "Pizza", isCorrect: false },
          { id: 99, text: "Hamburger", isCorrect: false },
          { id: 100, text: "Hot Dog", isCorrect: false }
        ],
        explanation: "Sandwich"
      },
      {
        id: 33,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_5',
        options: [
          { id: 101, text: "Coke", isCorrect: true },
          { id: 102, text: "Coffee", isCorrect: false },
          { id: 103, text: "Tea", isCorrect: false },
          { id: 104, text: "Water", isCorrect: false }
        ],
        explanation: "Coke"
      },
      {
        id: 34,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_6',
        options: [
          { id: 105, text: "Coffee", isCorrect: true },
          { id: 106, text: "Coke", isCorrect: false },
          { id: 107, text: "Tea", isCorrect: false },
          { id: 108, text: "Water", isCorrect: false }
        ],
        explanation: "Coffee"
      },
      {
        id: 35,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'url_de_la_imagen_alimento_bebida_7',
        options: [
          { id: 109, text: "Tea", isCorrect: true },
          { id: 110, text: "Coke", isCorrect: false },
          { id: 111, text: "Coffee", isCorrect: false },
          { id: 112, text: "Water", isCorrect: false }
        ],
        explanation: "Tea"
      }
    ]
  },
  {
    id: 6,
    section: "Family and Relationships",
    icon: "group", // Ícono de Material Design para familia y relaciones
    questions: [
      {
        id: 36,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_1',
        options: [
          { id: 113, text: "Father", isCorrect: true },
          { id: 114, text: "Mother", isCorrect: false },
          { id: 115, text: "Brother", isCorrect: false },
          { id: 116, text: "Sister", isCorrect: false }
        ],
        explanation: "Padre"
      },
      {
        id: 37,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_2',
        options: [
          { id: 117, text: "Mother", isCorrect: true },
          { id: 118, text: "Father", isCorrect: false },
          { id: 119, text: "Brother", isCorrect: false },
          { id: 120, text: "Sister", isCorrect: false }
        ],
        explanation: "Madre"
      },
      {
        id: 38,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_3',
        options: [
          { id: 121, text: "Brother", isCorrect: true },
          { id: 122, text: "Father", isCorrect: false },
          { id: 123, text: "Mother", isCorrect: false },
          { id: 124, text: "Sister", isCorrect: false }
        ],
        explanation: "Hermano"
      },
      {
        id: 39,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_4',
        options: [
          { id: 125, text: "Sister", isCorrect: true },
          { id: 126, text: "Father", isCorrect: false },
          { id: 127, text: "Mother", isCorrect: false },
          { id: 128, text: "Brother", isCorrect: false }
        ],
        explanation: "Hermana"
      },
      {
        id: 40,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_5',
        options: [
          { id: 129, text: "Grandfather", isCorrect: true },
          { id: 130, text: "Grandmother", isCorrect: false },
          { id: 131, text: "Uncle", isCorrect: false },
          { id: 132, text: "Aunt", isCorrect: false }
        ],
        explanation: "Abuelo"
      },
      {
        id: 41,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_6',
        options: [
          { id: 133, text: "Grandmother", isCorrect: true },
          { id: 134, text: "Grandfather", isCorrect: false },
          { id: 135, text: "Uncle", isCorrect: false },
          { id: 136, text: "Aunt", isCorrect: false }
        ],
        explanation: "Abuela"
      },
      {
        id: 42,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'url_de_la_imagen_familiar_7',
        options: [
          { id: 137, text: "Uncle", isCorrect: true },
          { id: 138, text: "Grandfather", isCorrect: false },
          { id: 139, text: "Grandmother", isCorrect: false },
          { id: 140, text: "Aunt", isCorrect: false }
        ],
        explanation: "Tío"
      }
    ]
  }    
]