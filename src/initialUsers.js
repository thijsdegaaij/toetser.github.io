const initialUsers = [
  {
    id: '1',
    voornaam: 'Thijs',
    achternaam: 'de Gaaij',
    quantityAnswers: 4,
    conceptsOfQ: [
      { word: 'paard', image: 'paard.jpg' },
      { word: 'geit', image: 'geit.jpg' },
      { word: 'koe', image: 'koe.jpg' },
      { word: 'schaap', image: 'schaap.jpg' },
    ],
  },
  {
    id: 'question_2',
    title: 'Bedektzadigen',
    category: 'cat_img1',
    quantityAnswers: 2,
    imageGroot: 'tomaat_zaad-vrucht.png',
    conceptsOfQ: [
      { word: 'zaadje', X_c: '5vw', Y_c: '45vh' },
      { word: 'vruchtvlees', X_c: '5vw', Y_c: '3vh' },
    ],
    image: { location: 'tomaat_zaad-vrucht.png', X_c: '110px', Y_c: '120px' },
  },
]

export default initialUsers
