const containersworks = [
  {
    snapshoot: 'Images/Snapshoot1.png',
    desktop: 'Images/Desktop-img1.png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],

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
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
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
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
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
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
  },
];

const modal0 = document.querySelector('.modal0');

modal0.insertAdjacentHTML(
  'afterbegin',
  `
   <nav>
        <h2 class='Tonicpop'>${containersworks[0].Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[0].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[0].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[0].desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${containersworks[0].description}</p>
        <p class="description-pop2">${containersworks[0].descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[0].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[0].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${containersworks[0].skills[3]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `,
);

const modal1 = document.querySelector('.modal1');

modal1.insertAdjacentHTML(
  'afterbegin',
  `
   <nav>
        <h2 class='Tonicpop'>${containersworks[1].Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[1].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[1].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[1].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[1].desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${containersworks[1].description}</p>
        <p class="description-pop2">${containersworks[1].descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${containersworks[1].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[1].skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${containersworks[1].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[1].skills[2]}</li>
        </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${containersworks[1].skills[3]}</li>
       <li class="js"><a href="#"></a>${containersworks[1].skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `,
);

const modal2 = document.querySelector('.modal2');

modal2.insertAdjacentHTML(
  'afterbegin',
  `
   <nav>
        <h2 class='Tonicpop'>${containersworks[2].Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[2].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[2].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[2].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[2].desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${containersworks[2].description}</p>
        <p class="description-pop2">${containersworks[2].descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${containersworks[2].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[2].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${containersworks[2].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[2].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
        </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${containersworks[2].skills[3]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `,
);

const modal3 = document.querySelector('.modal3');

modal3.insertAdjacentHTML(
  'afterbegin',
  `
   <nav>
        <h2 class='Tonicpop'>${containersworks[3].Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[3].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[3].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[3].offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${containersworks[3].snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${containersworks[3].desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${containersworks[3].description}</p>
        <p class="description-pop2">${containersworks[3].descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${containersworks[3].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[3].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[3].skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${containersworks[3].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[3].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[3].skills[2]}</li>
      </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${containersworks[3].skills[3]}</li>
       <li class="js"><a href="#"></a>${containersworks[3].skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `,
);

const seeproject = document.querySelectorAll('.seeproject');
const closepop = document.querySelectorAll('.closepopup');
const overlay = document.getElementById('overlay');

seeproject[0].addEventListener('click', () => {
  modal0.classList.add('active');
  overlay.classList.add('active');
});

function closeModal0(modal0) {
  if (modal0 == null) return;
  modal0.classList.remove('active');
  overlay.classList.remove('active');
}

closepop.forEach((button) => {
  button.addEventListener('click', () => {
    const modal0 = button.closest('.modal0');
    closeModal0(modal0);
  });
});

seeproject[1].addEventListener('click', () => {
  modal1.classList.add('active');
  overlay.classList.add('active');
});

function closeModal1(modal1) {
  if (modal1 == null) return;
  modal1.classList.remove('active');
  overlay.classList.remove('active');
}

closepop.forEach((button) => {
   button.addEventListener('click', () => {
    const closeModal1 = button.closest('.modal1');
    closeModal1(modal1);
  });
});

seeproject[2].addEventListener('click', () => {
  modal1.classList.add('active');
  overlay.classList.add('active');
  });
  
function closeModal2(modal2) {
  if (modal2 == null) return;
  modal2.classList.remove('active');
  overlay.classList.remove('active');
}

closepop.forEach((button) => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2');
    closeModal2(modal2);
  });
});

seeproject[3].addEventListener('click', () => {
  modal3.classList.add('active');
  overlay.classList.add('active');
});

function closeModal3(modal3) {
  if (modal3 == null) return;
  modal3.classList.remove('active');
  overlay.classList.remove('active');
}

closepop.forEach((button) => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3');
    closeModal3(modal3);
  });
});
