const initialQuestions = [
  {
    id: 'question_1',
    title: 'Boerderijdieren',
    category: 'cat_img4',
    quantityAnswers: 4,
    concepts: [
      { nr: 1, word: 'paard', image: 'paard.jpg' },
      { nr: 2, word: 'geit', image: 'geit.jpg' },
      { nr: 3, word: 'koe', image: 'koe.jpg' },
      { nr: 4, word: 'schaap', image: 'schaap.jpg' },
    ],
  },
  {
    id: 'question_2',
    title: 'Bedektzadigen',
    category: 'cat_img1',
    quantityAnswers: 2,
    imageGroot: 'tomaat_doorsnede.png',
    concepts: [
      { word: 'zaadje', X_c: 25, Y_c: 100, X_t: 38.6, Y_t: 75.2 },
      { word: 'vruchtvlees', X_c: 25, Y_c: 0, X_t: 14, Y_t: 20 },
    ],
    image: { location: 'tomaat_doorsnede.png', X_c: '110px', Y_c: '120px' },
  },
  {
    id: 'question_3',
    title: 'Bedektzadigen II',
    category: 'cat_img1',
    quantityAnswers: 3,
    imageGroot: 'tomaat_doorsnede.png',
    concepts: [
      { word: 'zaadje', X_c: 15, Y_c: 100, X_t: 20, Y_t: 37 },
      { word: 'vruchtvlees', X_c: 15, Y_c: 0, X_t: 24, Y_t: 20 },
      { word: 'steeltje', X_c: 75, Y_c: 0, X_t: 50, Y_t: 20 },
    ],
    image: { location: 'tomaat_doorsnede.png', X_c: '110px', Y_c: '120px' },
  },
  {
    id: 'question_4',
    title: 'Bedektzadigen',
    category: 'cat_img1',
    quantityAnswers: 2,
    imageGroot: 'tomaat_doorsnede.png',
    concepts: [
      { word: 'zaadje', X_c: 25, Y_c: 100, X_t: 38.6, Y_t: 75.2 },
      { word: 'vruchtvlees', X_c: 25, Y_c: 0, X_t: 14, Y_t: 20 },
    ],
    image: { location: 'tomaat_doorsnede.png', X_c: '110px', Y_c: '120px' },
  },
  {
    id: 'question_5',
    title: 'Bedektzadigen',
    category: 'cat_img1',
    quantityAnswers: 2,
    imageGroot: 'tomaat_doorsnede.png',
    concepts: [
      { word: 'zaadje', X_c: 25, Y_c: 100, X_t: 38.6, Y_t: 75.2 },
      { word: 'vruchtvlees', X_c: 25, Y_c: 0, X_t: 14, Y_t: 20 },
    ],
    image: { location: 'tomaat_doorsnede.png', X_c: '110px', Y_c: '120px' },
  },
  {
    id: 'question_3',
    title: 'question_3',
    QuantityAnswers: false,
    correctResponse: 'correct response!',
    incorrectResponse: 'incorrect response!',
  },
  {
    id: 'question_4',
    title: 'question 4',
    QuantityAnswers: false,
    correctResponse: 'correct response!',
    incorrectResponse: 'incorrect response!',
  },
]

export default initialQuestions
