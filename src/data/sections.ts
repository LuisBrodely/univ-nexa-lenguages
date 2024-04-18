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
        img: 'https://th.bing.com/th/id/OIP.5VD5u8Dw_Z-XOcpuK9BUrAHaHW?rs=1&pid=ImgDetMain',
        options: [
          { id: 2, text: "Cat", isCorrect: false },
          { id: 1, text: "Dog", isCorrect: true },
          { id: 3, text: "Elephant", isCorrect: false },
          { id: 4, text: "Bear", isCorrect: false }
        ],
        explanation: "Perro"
      },
      {
        id: 2,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://th.bing.com/th/id/R.1708adc730375680d40f8dfc4bb33565?rik=P4UFPLhh%2bkfYnw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f1b%2fGato_meditando.jpg&ehk=Jv7Vyqr9gBFq109T1pYR%2fkj%2b1Gd1V0pDs%2bwTm7Axt4U%3d&risl=&pid=ImgRaw&r=0',
        options: [
          { id: 6, text: "Dog", isCorrect: false },
          { id: 7, text: "Lion", isCorrect: false },
          { id: 5, text: "Cat", isCorrect: true },
          { id: 8, text: "Tiger", isCorrect: false }
        ],
        explanation: "Gato"
      },
      {
        id: 3,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://th.bing.com/th/id/R.eabc7594704938c63c65f75d66ea2e8c?rik=t4%2biO63ALDWkyw&riu=http%3a%2f%2fcbsnews1.cbsistatic.com%2fhub%2fi%2f2015%2f08%2f11%2f56e7f8c4-5815-4915-94f5-157e852170c6%2fgettyimages-103453502.jpg&ehk=NAc5%2b9XPgOfYYGRf8LGeKf9cgvsE7D6ZySoI%2f6N26uc%3d&risl=1&pid=ImgRaw&r=0',
        options: [
          { id: 9, text: "Elephant", isCorrect: true },
          { id: 10, text: "Giraffe", isCorrect: false },
          { id: 11, text: "Rhinoceros", isCorrect: false },
          { id: 12, text: "Hippopotamus", isCorrect: false }
        ],
        explanation: "Elefante"
      },
      {
        id: 4,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://th.bing.com/th/id/R.2b8de67e2a185ac65806049ca1b8963c?rik=IHrf04QRxFZ%2fgA&pid=ImgRaw&r=0',
        options: [
          { id: 14, text: "Leopard", isCorrect: false },
          { id: 15, text: "Tiger", isCorrect: false },
          { id: 16, text: "Jaguar", isCorrect: false },
          { id: 13, text: "Lion", isCorrect: true },
        ],
        explanation: "León"
      },
      {
        id: 5,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://th.bing.com/th/id/OIP.7ZI--KrTSaRi4iV_wVxyYgHaEo?rs=1&pid=ImgDetMain',
        options: [
          { id: 18, text: "Cow", isCorrect: false },
          { id: 17, text: "Horse", isCorrect: true },
          { id: 19, text: "Pig", isCorrect: false },
          { id: 20, text: "Sheep", isCorrect: false }
        ],
        explanation: "Caballo"
      },
      {
        id: 6,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://i.pinimg.com/originals/71/7c/dd/717cdd97856075453d99bbc4a59ec94d.jpg',
        options: [
          { id: 22, text: "Goat", isCorrect: false },
          { id: 21, text: "Cow", isCorrect: true },
          { id: 23, text: "Buffalo", isCorrect: false },
          { id: 24, text: "Yak", isCorrect: false }
        ],
        explanation: "Vaca"
      },
      {
        id: 7,
        sectionId: 1,
        questionText: "What animal is this?",
        img: 'https://th.bing.com/th/id/R.f37b08ae26b38432507bd675c5ebfe6d?rik=KLl7jqtpE0jXZQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-n3QYXsV1n4s%2fTmZZ9SXcBtI%2fAAAAAAAALbA%2f-dzBIlWvWr4%2fs1600%2fOveja-cordero.jpg&ehk=MKUiew2stnswIsJtXmsuR88r5sgs9oQgqRLqNyExZOM%3d&risl=&pid=ImgRaw&r=0',
        options: [
          { id: 25, text: "Sheep", isCorrect: true },
          { id: 26, text: "Pig", isCorrect: false },
          { id: 27, text: "Goat", isCorrect: false },
          { id: 28, text: "Cow", isCorrect: false }
        ],
        explanation: "Oveja"
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
        img: 'https://www.definicionabc.com/wp-content/uploads/general/Manzana.jpg',
        options: [
          { id: 2, text: "Orange", isCorrect: false },
          { id: 1, text: "Apple", isCorrect: true },
          { id: 3, text: "Banana", isCorrect: false },
          { id: 4, text: "Pear", isCorrect: false }
        ],
        explanation: "Manzana"
      },
      {
        id: 9,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://th.bing.com/th/id/R.90497a8542e5a8d970eb1ac1e3e20b0b?rik=wMYV7zShzQGdMQ&pid=ImgRaw&r=0',
        options: [
          { id: 6, text: "Apple", isCorrect: false },
          { id: 5, text: "Orange", isCorrect: true },
          { id: 7, text: "Banana", isCorrect: false },
          { id: 8, text: "Grape", isCorrect: false }
        ],
        explanation: "Naranja"
      },
      {
        id: 10,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://th.bing.com/th/id/R.88c4e328642ff140a8ccce9c6145b771?rik=7DeNPvINgpkusw&pid=ImgRaw&r=0',
        options: [
          { id: 10, text: "Apple", isCorrect: false },
          { id: 11, text: "Grape", isCorrect: false },
          { id: 9, text: "Banana", isCorrect: true },
          { id: 12, text: "Pear", isCorrect: false }
        ],
        explanation: "Plátano"
      },
      {
        id: 11,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://th.bing.com/th/id/R.b5e7a1f3a2a45b0b042cdfe6a3d68afd?rik=EOmauX52Y7g0IQ&pid=ImgRaw&r=0',
        options: [
          { id: 14, text: "Apple", isCorrect: false },
          { id: 15, text: "Banana", isCorrect: false },
          { id: 13, text: "Grape", isCorrect: true },
          { id: 16, text: "Orange", isCorrect: false }
        ],
        explanation: "Uva"
      },
      {
        id: 12,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://th.bing.com/th/id/OIP.PctURXjsyimKBOAG7mOOtAHaFj?rs=1&pid=ImgDetMain',
        options: [
          { id: 17, text: "Pear", isCorrect: true },
          { id: 18, text: "Apple", isCorrect: false },
          { id: 19, text: "Banana", isCorrect: false },
          { id: 20, text: "Orange", isCorrect: false }
        ],
        explanation: "Pera"
      },
      {
        id: 13,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://th.bing.com/th/id/R.0a3bb27b157f58e20bd74b73e7425f52?rik=8i5JSRI1VB0a6A&pid=ImgRaw&r=0',
        options: [
          { id: 22, text: "Orange", isCorrect: false },
          { id: 23, text: "Apple", isCorrect: false },
          { id: 21, text: "Watermelon", isCorrect: true },
          { id: 24, text: "Grape", isCorrect: false }
        ],
        explanation: "Sandía"
      },
      {
        id: 14,
        sectionId: 2,
        questionText: "What fruit or vegetable is this?",
        img: 'https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/beneficios_de_la_zanahoria.jpg?v=1617809724',
        options: [
          { id: 26, text: "Lettuce", isCorrect: false },
          { id: 27, text: "Tomato", isCorrect: false },
          { id: 28, text: "Cucumber", isCorrect: false },
          { id: 25, text: "Carrot", isCorrect: true }
        ],
        explanation: "Zanahoria"
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
        img: 'https://th.bing.com/th/id/OIP.VJLWjH-3Qa8307gGUHri3wHaHb?rs=1&pid=ImgDetMain',
        options: [
          { id: 30, text: "Blue", isCorrect: false },
          { id: 31, text: "Green", isCorrect: false },
          { id: 29, text: "Red", isCorrect: true },
          { id: 32, text: "Yellow", isCorrect: false }
        ],
        explanation: "Rojo"
      },
      {
        id: 16,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'https://th.bing.com/th/id/R.5893ab2a61536d2d5738943e54871126?rik=lgeMznxragK2Pw&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f41%2f36%2f7MXDvR.jpg&ehk=nIxSGjKfEV1D%2f%2f0D6TUS8D49yMNcb1yTTEKKQzZHvxw%3d&risl=&pid=ImgRaw&r=0',
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
        img: 'https://th.bing.com/th/id/OIP.-QyGQ5F6u9Ob72fU8HXHuAHaFk?rs=1&pid=ImgDetMain',
        options: [
          { id: 38, text: "Yellow", isCorrect: false },
          { id: 39, text: "Red", isCorrect: false },
          { id: 37, text: "Green", isCorrect: true },
          { id: 40, text: "Blue", isCorrect: false }
        ],
        explanation: "Verde"
      },
      {
        id: 18,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'https://th.bing.com/th/id/OIP.q25WikUFGxbe3PaJdvnK-QHaEo?rs=1&pid=ImgDetMain',
        options: [
          { id: 42, text: "Green", isCorrect: false },
          { id: 43, text: "Blue", isCorrect: false },
          { id: 44, text: "Red", isCorrect: false },
          { id: 41, text: "Yellow", isCorrect: true },
        ],
        explanation: "Amarillo"
      },
      {
        id: 19,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'https://th.bing.com/th/id/OIP.bm42KkVy3Bwk8O50uYsRCAHaHa?rs=1&pid=ImgDetMain',
        options: [
          { id: 46, text: "Orange", isCorrect: false },
          { id: 47, text: "Pink", isCorrect: false },
          { id: 45, text: "Purple", isCorrect: true },
          { id: 48, text: "Brown", isCorrect: false }
        ],
        explanation: "Morado"
      },
      {
        id: 20,
        sectionId: 3,
        questionText: "What color is this?",
        img: 'https://th.bing.com/th/id/R.d80491bb47bcad9178d4a617daa39de8?rik=4tLZhIkTN0Ue4g&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2forange-color%2forange-color-01.jpg&ehk=9FG8xkAdhiUeQpUj8w7%2fh1bwrl%2f3e7VVf13zLiwCc7A%3d&risl=&pid=ImgRaw&r=0',
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
        img: 'https://th.bing.com/th/id/OIP.VdBbqQoLa8awZBrHpO2g9gHaFi?rs=1&pid=ImgDetMain',
        options: [
          { id: 54, text: "Purple", isCorrect: false },
          { id: 55, text: "Orange", isCorrect: false },
          { id: 56, text: "Brown", isCorrect: false },
          { id: 53, text: "Pink", isCorrect: true },
        ],
        explanation: "Rosa"
      }
    ]
  },
  {
    id: 4,
    section: "Numbers",
    icon: "format-list-numbered",
    questions: [
      {
        id: 22,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-1-circle',
        options: [
          { id: 58, text: "Two", isCorrect: false },
          { id: 59, text: "Three", isCorrect: false },
          { id: 60, text: "Four", isCorrect: false },
          { id: 57, text: "One", isCorrect: true },
        ],
        explanation: "Uno"
      },
      {
        id: 23,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-2-circle',
        options: [
          { id: 62, text: "One", isCorrect: false },
          { id: 61, text: "Two", isCorrect: true },
          { id: 63, text: "Three", isCorrect: false },
          { id: 64, text: "Four", isCorrect: false }
        ],
        explanation: "Dos"
      },
      {
        id: 24,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-3-circle',
        options: [
          { id: 66, text: "One", isCorrect: false },
          { id: 65, text: "Three", isCorrect: true },
          { id: 67, text: "Two", isCorrect: false },
          { id: 68, text: "Four", isCorrect: false }
        ],
        explanation: "Tres"
      },
      {
        id: 25,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-4-circle',
        options: [
          { id: 70, text: "One", isCorrect: false },
          { id: 71, text: "Two", isCorrect: false },
          { id: 72, text: "Three", isCorrect: false },
          { id: 69, text: "Four", isCorrect: true },
        ],
        explanation: "Cuatro"
      },
      {
        id: 26,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-5-circle',
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
        icon: 'numeric-6-circle',
        options: [
          { id: 78, text: "Five", isCorrect: false },
          { id: 77, text: "Six", isCorrect: true },
          { id: 79, text: "Seven", isCorrect: false },
          { id: 80, text: "Eight", isCorrect: false }
        ],
        explanation: "Seis"
      },
      {
        id: 28,
        sectionId: 4,
        questionText: "What number is this?",
        icon: 'numeric-7-circle',
        options: [
          { id: 82, text: "Five", isCorrect: false },
          { id: 83, text: "Six", isCorrect: false },
          { id: 81, text: "Seven", isCorrect: true },
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
        img: 'https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F1O0Be1dObiQBm17GQJHLj8%2F3fde720730f0b3616ecf5a82b928e7f9%2Fpizza-a-domicilio-cerca-de-mi.jpg&w=3840&q=75',
        options: [
          { id: 86, text: "Hamburger", isCorrect: false },
          { id: 85, text: "Pizza", isCorrect: true },
          { id: 87, text: "Hot Dog", isCorrect: false },
          { id: 88, text: "Sandwich", isCorrect: false }
        ],
        explanation: "Pizza"
      },
      {
        id: 30,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg',
        options: [
          { id: 90, text: "Pizza", isCorrect: false },
          { id: 89, text: "Hamburger", isCorrect: true },
          { id: 91, text: "Hot Dog", isCorrect: false },
          { id: 92, text: "Sandwich", isCorrect: false }
        ],
        explanation: "Hamburgesa"
      },
      {
        id: 31,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'https://static.fanpage.it/wp-content/uploads/sites/22/2020/01/hotdog.jpg',
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
        img: 'https://cdn.kiwilimon.com/recetaimagen/16320/8269.jpg',
        options: [
          { id: 98, text: "Pizza", isCorrect: false },
          { id: 99, text: "Hamburger", isCorrect: false },
          { id: 100, text: "Hot Dog", isCorrect: false },
          { id: 97, text: "Sandwich", isCorrect: true },
        ],
        explanation: "Sandwich"
      },
      {
        id: 33,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'https://www.coca-cola.com/content/dam/onexp/de/de/article-pages/Branded_Imageray_CokeZero_Desktop.jpg',
        options: [
          { id: 102, text: "Coffee", isCorrect: false },
          { id: 103, text: "Tea", isCorrect: false },
          { id: 101, text: "Coke", isCorrect: true },
          { id: 104, text: "Water", isCorrect: false }
        ],
        explanation: "Coca"
      },
      {
        id: 34,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'https://www.cafe-mx.com/blog/app/assets/media/2018/08/cafe-expreso.jpg',
        options: [
          { id: 106, text: "Coke", isCorrect: false },
          { id: 107, text: "Tea", isCorrect: false },
          { id: 108, text: "Water", isCorrect: false },
          { id: 105, text: "Coffee", isCorrect: true },
        ],
        explanation: "Café"
      },
      {
        id: 35,
        sectionId: 5,
        questionText: "What food or drink is this?",
        img: 'https://th.bing.com/th/id/OIP.AI8IfEWf4vIDCSrV57QYeAHaE8?rs=1&pid=ImgDetMain',
        options: [
          { id: 109, text: "Tea", isCorrect: true },
          { id: 110, text: "Coke", isCorrect: false },
          { id: 111, text: "Coffee", isCorrect: false },
          { id: 112, text: "Water", isCorrect: false }
        ],
        explanation: "Té"
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
        img: 'https://2.bp.blogspot.com/-T82ui-1n9vs/VZP3LjzMNYI/AAAAAAAACAw/l72121_wsGo/s1600/padre.jpg',
        options: [
          { id: 114, text: "Mother", isCorrect: false },
          { id: 115, text: "Brother", isCorrect: false },
          { id: 116, text: "Sister", isCorrect: false },
          { id: 113, text: "Father", isCorrect: true },
        ],
        explanation: "Padre"
      },
      {
        id: 37,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'https://www.elheraldo.co/sites/default/files/styles/1180x664/public/articulo/2019/05/10/web3-happy-loving-young-mother-kisses-her-toddler-son-on-the-walk-shutterstock_317881043.jpg?itok=Fj5pH8Ql',
        options: [
          { id: 118, text: "Father", isCorrect: false },
          { id: 119, text: "Brother", isCorrect: false },
          { id: 117, text: "Mother", isCorrect: true },
          { id: 120, text: "Sister", isCorrect: false }
        ],
        explanation: "Madre"
      },
      {
        id: 38,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'https://th.bing.com/th/id/R.cf015286dac69316198a83e0ece1c2b4?rik=4gjnP3n%2bC24%2fuQ&riu=http%3a%2f%2fdebeverse.com%2fwp-content%2fuploads%2f2015%2f04%2fDSC8158.jpg&ehk=3frJa3vMaAffPfe3yCLhnffwbkd0HAiTpJ8qeW0l4Og%3d&risl=&pid=ImgRaw&r=0',
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
        img: 'https://th.bing.com/th/id/R.17f311316d6d02a6e4dc0b5c5e7f7cb4?rik=lLesXfiCv7Vzog&riu=http%3a%2f%2fwww.okchicas.com%2fwp-content%2fuploads%2f2016%2f03%2fCosas-que-s%c3%b3lo-entienden-las-que-son-hermanas-mayores-3.jpg&ehk=96nApDJttsmenZWnMzA9FVzOHcupd%2fSI%2fHXe1u69ukM%3d&risl=&pid=ImgRaw&r=0',
        options: [
          { id: 126, text: "Father", isCorrect: false },
          { id: 127, text: "Mother", isCorrect: false },
          { id: 125, text: "Sister", isCorrect: true },
          { id: 128, text: "Brother", isCorrect: false }
        ],
        explanation: "Hermana"
      },
      {
        id: 40,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'https://th.bing.com/th/id/OIP.tDwMNFX3KtFXG_6YpUrYBAHaE7?rs=1&pid=ImgDetMain',
        options: [
          { id: 130, text: "Father", isCorrect: false },
          { id: 129, text: "Grandfather", isCorrect: true },
          { id: 131, text: "Uncle", isCorrect: false },
          { id: 132, text: "Aunt", isCorrect: false }
        ],
        explanation: "Abuelo"
      },
      {
        id: 42,
        sectionId: 6,
        questionText: "Who is this?",
        img: 'https://th.bing.com/th/id/OIP.ZxIzQwCgQib9zg8e1tUpSAFSC4?rs=1&pid=ImgDetMain',
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