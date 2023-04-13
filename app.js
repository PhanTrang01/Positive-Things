// local reviews data
const reviews = [
    {
      id: 1,
      img: '/img/img_1.jpg',
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    },
    {
      id: 2,
      img: '/img/img_2.jpeg',
      text: 'Setting goals is the first step in turning the invisible into the visible.',
    },
    {
      id: 3,
      img: '/img/img_3.png',
      text: 'Only in the darkness can you see the stars.',
    },
    {
      id: 4,
      img: '/img/img_4.jpg',
      text: 'Choose to be optimistic, it feels better. ',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
//   randomBtn.addEventListener('click', function () {
//     console.log('hello');
  
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson(currentItem);
//   });