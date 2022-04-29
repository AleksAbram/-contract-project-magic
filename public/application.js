// document.addEventListener('DOMContentLoaded', () => {
const cardButtons = document.querySelectorAll('.card button');
const cardBox = document.querySelectorAll('.card');
const shop = document.querySelector('.shop');
const magaz = document.querySelector('#magaz');
// const cardForm = document.querySelector('#form');

const arrCards = [];
cardBox.forEach((el) => {
  el.querySelector('button').addEventListener('click', async (event) => {
    event.preventDefault();
    // this.disabled = true;
    const idCard = event.target.dataset.cardid;
    let cards;

    if (localStorage.getItem('cards')) {
      cards = JSON.parse(localStorage.getItem('cards'));
    } else {
      cards = [];
    }

    cards.push(idCard);

    localStorage.setItem('cards', JSON.stringify(cards));

    // console.log(cards)
  });
});

magaz.addEventListener('click', async (event) => {
  // event.preventDefault();

  const response = await fetch('/shop/getCards', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ idNik: JSON.parse(localStorage.getItem('cards')) }),
  });
});

// cardButtons.forEach((el) => {
//   el.addEventListener('click', (event) => {
//     console.log('2222222222222222', event.target);
//     event.preventDefault();
//     const idCard = event.target.dataset.cardid;
//     // const idImg = event.target.dataset.cardimg;
//     // const idTitle = event.target.dataset.cardtitle;
//     // const idCond = event.target.dataset.cardcond;
//     // const idCity = event.target.dataset.cardcity;
//     // const idPrice = event.target.dataset.cardprice;

//     console.log(idCard, idImg, idTitle, idCond, idCity, idPrice);

// console.log(idCard);
// console.log(event.target.getAttribute('mycity'));

// );

//     console.log(cardFromStorage);
//   });
// });

// cardBox.addEventListener('click', (event) => {
//   event.preventDefault();

//   const str = 'hello';
//   console.log(cardBox);

//   localStorage.setItem('cardID', JSON.stringify(cardBox.value));
//   console.log(localStorage.getItem('cardID'));
// });
// // });
