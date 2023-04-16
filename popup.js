const containersworks = [
  {
    class: 'container1',
    snapshoot: 'Images/Snapshoot1.png',
    desktop: 'Images/Desktop-img1.png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],

  },
  {
    class: 'container1',
    snapshoot: 'Images/Snapshoot2.png',
    desktop: 'Images/Desktop-img2.png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],

    description: `Experimental content creation feature that allows users to add to an
            existing story over the course of a day without spamming their
            friends.`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
  },
  {
    class: 'container1',
    snapshoot: 'Images/Snapshoot3.png',
    desktop: 'Images/Desktop-img3.png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
  },
  {

    class: 'container1',
    snapshoot: 'Images/Snapshoot4.png',
    desktop: 'Images/Desktop-img4.png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required.`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    skills: ['HTML', 'css', 'javaScript', 'Ruby', 'Boostrap'],
  },
];

const Workcards = document.getElementById('container');

containersworks.forEach((item2) => {
  Workcards.innerHTML += `
<div class="${item2.class}">
        <img
          class="desktop-image"
          src="${item2.desktop}"
          alt="Project Image"
        />
        <img
          class="snapshoot"
          src="${item2.snapshoot}"
          alt="Project Image"
        />
        <div class="daily">
          <h3 class="Tonic">${item2.Tonic}</h3>
          <ul class="offer">
            <li class="canopy">${item2.offer[0]}</li>
            <span class="point"></span>
            <li class="backend">${item2.offer[1]}</li>
            <span class="point"></span>
            <li class="year">${item2.offer[2]}</li>
          </ul>
            <p class="description">${item2.description}</p>
          <ul class="skills">
            <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
            <li class="css"><a href="#"></a>${item2.skills[1]}</li>
            <li class="js"><a href="#"></a>${item2.skills[2]}</li>
          </ul>
          <button class="seeproject" data-modal-target="#modal1">See Project</button>
        </div>
      </div>
`;
});

const modal0 = document.getElementById('modal0');
containersworks.forEach((item2) => {
modal0.innerHTML =`
  
   <nav>
        <h2 class='Tonicpop'>${item2.Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${item2.offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${item2.offer[1]}</li>
  <span class="point"></span>
  <li class="year">${item2.offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${item2.snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${item2.desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${item2.description}</p>
        <p class="description-pop2">${item2.descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${item2.skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${item2.skills[3]}</li>
       <li class="js"><a href="#"></a>${item2.skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `;
});

const modal1 = document.getElementById('modal1');
containersworks.forEach((item2) => {
modal1.innerHTML =`
  
   <nav>
        <h2 class='Tonicpop'>${item2.Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${item2.offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${item2.offer[1]}</li>
  <span class="point"></span>
  <li class="year">${item2.offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${item2.snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${item2.desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${item2.description}</p>
        <p class="description-pop2">${item2.descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${item2.skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${item2.skills[3]}</li>
       <li class="js"><a href="#"></a>${item2.skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `;
});

const modal2 = document.getElementById('modal2');
containersworks.forEach((item2) => {
modal2.innerHTML =`
  
   <nav>
        <h2 class='Tonicpop'>${item2.Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${item2.offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${item2.offer[1]}</li>
  <span class="point"></span>
  <li class="year">${item2.offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${item2.snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${item2.desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${item2.description}</p>
        <p class="description-pop2">${item2.descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${item2.skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${item2.skills[3]}</li>
       <li class="js"><a href="#"></a>${item2.skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `;
});

const modal3 = document.getElementById('modal3');
containersworks.forEach((item2) => {
modal3.innerHTML =`
  
   <nav>
        <h2 class='Tonicpop'>${item2.Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </nav>
  <ul class="offer-pop">
  <li class="canopy">${item2.offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${item2.offer[1]}</li>
  <span class="point"></span>
  <li class="year">${item2.offer[2]}</li>
</ul>
    <img class="snapshootpop" src="${item2.snapshoot}" alt="mobile image">
    <img class="desktoppop" src="${item2.desktop}" alt="Desktop Image">
 
    <div class="dailypop">
       <p class="description-pop">${item2.description}</p>
        <p class="description-pop2">${item2.descriptionpop}</p>
       <div>
       <ul class="skillspop">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${item2.skills[2]}</li>
       </ul>

       <ul class="skillspop2">
       <li class="htl"><a href="#"></a>${item2.skills[0]}</li>
       <li class="css"><a href="#"></a>${item2.skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[0].skills[2]}</li>
       </ul>
       <ul class="skillspop2">
       <li class="css"><a href="#"></a>${item2.skills[3]}</li>
       <li class="js"><a href="#"></a>${item2.skills[4]}</li>
       </ul>
       <div class="see-live">
          <a href="#" class="seelive">See live <img class="img-live" src="./Images/live.png" alt="live" width="24"></a>
          <a href="#" class="seelive">See Source <img class="img-live" src="./Images/Vector.png" alt="live" width="24"></a>
       </div>
     </div>
     </div>
     `;
});
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
    const modal1 = button.closest('.modal1');
    closeModal1(modal1);
  });
});

seeproject[2].addEventListener('click', () => {
  modal2.classList.add('active');
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