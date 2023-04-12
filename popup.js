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
    Tonic2: 'Multi-Post Stories',
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

const popup = document.querySelector('#container1');

  popup.innerHTML = `
  <div class="main" id="container">
    <div class='pop-head'>
        <h2 class='Tonic'>${containersworks[0].Tonic}</h2>
        <button class='closepopup'>&times;</button>
    </div>
  <ul class="offer-pop">
  <li class="canopy">${containersworks[0].offer[0]}</li>
  <span class="point"></span>
  <li class="backend">${containersworks[1].offer[1]}</li>
  <span class="point"></span>
  <li class="year">${containersworks[2].offer[2]}</li>
</ul>
    <img class="snapshoot" src="${containersworks[0].snapshoot}" alt="mobile image">
    <img class="desktop" src="${containersworks[0].desktop}" alt="Desktop Image">
 
    <div class="daily">
       <p class="description-pop">${containersworks[0].description}</p>
       
       <ul class="skills">
       <li class="htl"><a href="#"></a>${containersworks[0].skills[0]}</li>
       <li class="css"><a href="#"></a>${containersworks[1].skills[1]}</li>
       <li class="js"><a href="#"></a>${containersworks[2].skills[2]}</li>
       </ul>
       <div class='grand-btn'> 
       <button class='seeproject'><p>See Live</p><img src='Images/live.png'></button>
       <button class='seeproject'><p>See Source</p><img src='image/sm2.png'></button>
       </div>
     </div>
   </div>
  
  `;