let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    const title = document.querySelector('#quote-title')
      console.log(title);
      title.addEventListener('click', (evt) => {
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
          ;
      })
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
const changeTitle = function() {
  const title = document.getElementById('main-title');
  title.textContent = 'Welcome';
}
changeTitle();


  // Part 2
const changeColor = function() {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'Green';
}
changeColor();

  // Part 3
const deleteLi = function() {
  const ul = document.querySelector('ul');
  const lastLi = ul.children[5];
  lastLi.remove();
}
deleteLi();

  // Part 4
const changeFont = function() {
  const specialTitle = document.querySelectorAll('.special-title');
  // console.log(specialTitle);
  for(let i = 0; i <specialTitle.length; i++){
    specialTitle[i].style.fontSize = '2rem';
  }
}
changeFont();

  // Part 5
const deleteRace = function() {
  const races = document.getElementById('past-races');
  // console.log(races);
  const removeChicago = races.children[3];
  removeChicago.remove();
}
deleteRace();


  // Part 6
const addCity = function() {
  const ul = document.getElementById('past-races');
  const addLi = document.createElement('li');
  addLi.innerHTML = 'Prage';
  ul.appendChild(addLi);
}
addCity();


  // Part 7
const addBlog = function () {
  const newBlog = document.getElementById('dom-adventures');

  const addLiCity = document.createElement('div');
  addLiCity.className = 'blog-post purple';

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Prague';
  console.log(h1);
  addLiCity.appendChild(h1);

  const p = document.createElement('p');
  p.innerHTML = 'It would be a cool movie';
  console.log(p);
  addLiCity.appendChild(p);

  console.log(addLiCity);

  newBlog.appendChild(addLiCity);

  // instead of writting all this code, how would the clone method work here?
}

addBlog();


  // Part 8

// For part 8, see lines 10 - 20.

  // Part 9
const addE = function () {
  const addEvent = document.querySelector('.blog-post purple');
  console.log(addEvent);
}

});
