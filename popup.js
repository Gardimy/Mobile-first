const containersworks = [
  {
    snapshoot: 'Images/Snapshoot1.png',
    desktop: 'Images/Desktop-img1.png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus`,
    skills: ['HTML', 'css', 'javaScript'],

  },
  {
    snapshoot: 'Images/Snapshoot2.png',
    desktop: 'Images/Desktop-img2.png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minusbsbusb dkdnojdpckdc dkpkvpdkdfd  djgjwoajsmlncknckdv`,
    skills: ['HTML', 'css', 'javaScript'],
  },
  {
    snapshoot: 'Images/Snapshoot3.png',
    desktop: 'Images/Desktop-img3.png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minusbsbusb dkdnojdpckdc dkpkvpdkdfd  djgjwoajsmlncknckdv`,
    skills: ['HTML', 'css', 'javaScript'],
  },
  {
    snapshoot: 'Images/Snapshoot4.png',
    desktop: 'Images/Desktop-img4.png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minusbsbusb dkdnojdpckdc dkpkvpdkdfd  djgjwoajsmlncknckdv`,
    skills: ['HTML', 'css', 'javaScript'],
  },
];

const modal0 = document.querySelector('.modal0');

modal0.insertAdjacentHTML(
  'afterbegin',
// modal0.innerHTML = 
`
    <div class='pop-head'>
        <h2 class='Tonic'>${containersworks[0].Tonic}</h2>
        <button data-close-button class='closepopup'>&times;</button>
    </div>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[0].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[0].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[0].desktop}" alt="Desktop Image">
 
    <div class="daily">
       <p class="description-pop">${containersworks[0].description}</p>
       
       <ul class="skills">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
       </ul>
       <div class='seelive'> 
       <button class='seelive1'><p>See Live</p><img src='Images/live.png'></button>
       <button class='seelive1'><p>See Source</p><img src='image/sm2.png'></button>
       </div>
     </div>`
     
)



const modal2 = document.querySelector('.modal2');

modal2.insertAdjacentHTML(
  'afterbegin',
  `
    <div class='pop-head'>
        <h2 class='Tonic'>${containersworks[0].Tonic}</h2>
        <button data-close-button class='closepopup'>&times;</button>
    </div>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[0].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[0].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[0].desktop}" alt="Desktop Image">
 
    <div class="daily">
       <p class="description-pop">${containersworks[0].description}</p>
       
       <ul class="skills">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
       </ul>
       <div class='seelive'> 
       <button class='seelive1'><p>See Live</p><img src='Images/live.png'></button>
       <button class='seelive1'><p>See Source</p><img src='image/sm2.png'></button>
       </div>
     </div>
  
  `,
);

const modal3 = document.querySelector('.modal3');
modal3.insertAdjacentHTML(
  'afterbegin',
  `
    <div class='pop-head'>
        <h2 class='Tonic'>${containersworks[0].Tonic}</h2>
        <button data-close-button class='closepopup'>&times;</button>
    </div>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[0].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[0].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[0].desktop}" alt="Desktop Image">
 
    <div class="daily">
       <p class="description-pop">${containersworks[0].description}</p>
       
       <ul class="skills">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
       </ul>
       <div class='seelive'> 
       <button class='seelive1'><p>See Live</p><img src='Images/live.png'></button>
       <button class='seelive1'><p>See Source</p><img src='image/sm2.png'></button>
       </div>
     </div>
  `,
);

//   const modal4 = document.querySelector('#container4');

//   modal4.insertAdjacentHTML(
//   'afterbegin',
//     `
//     <div class='pop-head'>
//         <h2 class='Tonic'>${containersworks[0].Tonic}</h2>
//         <button data-close-button class='closepopup'>&times;</button>
//     </div>
//   <ul class="offer-pop">
//   <li class="canopy">${containersworks[0].offer[0]}</li>
//   <span class="point"></span>
//   <li class="backend">${containersworks[1].offer[1]}</li>
//   <span class="point"></span>
//   <li class="year">${containersworks[2].offer[2]}</li>
// </ul>
//     <img class="snapshootpop" src="${containersworks[0].snapshoot}" alt="mobile image">
//     <img class="desktoppop" src="${containersworks[0].desktop}" alt="Desktop Image">

//     <div class="daily">
//        <p class="description-pop">${containersworks[0].description}</p>

//        <ul class="skills">
//        <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
//        <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
//        <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
//        </ul>
//        <div class='seelive'> 
//        <button class='seelive1'><p>See Live</p><img src='Images/live.png'></button>
//        <button class='seelive1'><p>See Source</p><img src='image/sm2.png'></button>
//        </div>
//      </div>

//   `,
//   );

const seeproject = document.querySelectorAll('.seeproject');
console.log(seeproject);
const closepop = document.querySelectorAll('.closepopup');
console.log(closepop);
const overlay = document.getElementById('overlay');

seeproject.forEach((opt) => {
  opt.addEventListener('click', () => {
    const modal0 = document.querySelector(opt.seeproject);
    // openModal(modal0);
  });
});

seeproject[0].addEventListener('click', () => {
  // openModal(modal0)
  modal0.classList.add('active');
  overlay.classList.add('active');
})

seeproject[1].addEventListener('click', () => {
  // openModal(modal0)
  modal1.classList.add('active');
  overlay.classList.add('active');
})

seeproject[3].addEventListener('click', () => {
  // openModal(modal0)
  modal3.classList.add('active');
  overlay.classList.add('active');
})

seeproject[4].addEventListener('click', () => {
  // openModal(modal0)
  modal4.classList.add('active');
  overlay.classList.add('active');
})

// function openModal(modal0) {
//   // if (modal0 == null) return;
//   modal0.classList.add('active');
//   overlay.classList.add('active');
// }



// function closeModal(modal0) {
//   if (modal0 == null) return;
//   modal0.classList.remove('active');
//   overlay.classList.remove('active');
// }



closepop.forEach((button) => {
  button.addEventListener('click', () => {
    const modal0 = button.closest('.modal0');
    closeModal(modal0);
  });
});

function closeModal1(modal1) {
  if (modal1 == null) return;
  modal1.classList.remove('active');
  overlay.classList.remove('active');
}

seeproject.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget);
    // openModal(modal1);
  });
});

closepop.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1');
    closeModal1(modal1);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal0.active');
  modals.forEach((modal0) => {
    closeModal(modal0);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active');
  modals.forEach((modal1) => {
    closeModal(modal1);
  });
});
