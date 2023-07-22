'use strict';

//1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
let divElem;
let textareaElem;
let pElem;
let h2Elem;
let h1Elem;
divElem = document.querySelector('#block-text');
textareaElem = document.querySelector('#textarea');

function createElement() {
   pElem = document.createElement('p');
   divElem = document.createElement('div');
   textareaElem = document.createElement('textarea');
   h1Elem = document.createElement('h1');
   h1Elem.textContent = 'Javascript Event';
   h2Elem = document.createElement('h2');
   h2Elem.textContent = 'Task-1'
   pElem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed repellendus iusto ipsam aperiam harum unde rerum, esse ea distinctio expedita dicta ut facere sunt mollitia optio eius minus! Commodi fugit voluptate dicta sequi suscipit nam fugiat amet mollitia perferendis blanditiis quae quod hic ratione sint at, molestiae voluptatum nostrum sunt repellendus corporis magnam culpa quas. Atque veritatis aut corrupti sit assumenda deserunt earum praesentium dignissimos placeat. Nobis minima assumenda eligendi alias, facere dolores, voluptate cum, explicabo officiis rem temporibus. Non, aliquid consequatur. Nesciunt repellat illo in hic expedita beatae totam. Laudantium voluptatem, iure perferendis velit eveniet reprehenderit culpa atque?';
   // Добавляем <p> как потомка внутрь тега <div>
   divElem.appendChild(pElem);
}
createElement();
//Добавляем класс к тегам
function addClass() {
   textareaElem.classList.add('hidden');
   textareaElem.classList.add('textarea');
   divElem.classList.add('block');
   pElem.classList.add('block__text');
   h1Elem.classList.add('title-1');
   h2Elem.classList.add('title-2');
}
addClass();

//добавляем атрибут id
function addId() {
   divElem.id = 'block-text';
   textareaElem.id = 'textarea';
}
addId();

function addElemBody() {
   document.body.appendChild(h1Elem);
   document.body.appendChild(h2Elem);
   document.body.appendChild(divElem);
   document.body.appendChild(textareaElem);

}
addElemBody();

// Функція для відключення стандартної поведінки браузера для комбінації клавіш Ctrl + E і Ctrl + S
function preventDefaultKey(event) {
   if (event.ctrlKey && event.key === 'e' || event.ctrlKey && event.key === 'у') {
      event.preventDefault();
   }
   if (event.ctrlKey && event.key === 's' || event.ctrlKey && event.key === 'ы') {
      event.preventDefault();
   }
}
// Відслідковуємо натискання клавіш
document.addEventListener('keydown', (e) => {
   preventDefaultKey(e);
   // При натисканні Ctrl + E відображаємо textarea
   if (e.ctrlKey && e.key === 'e' || e.ctrlKey && e.key === 'у') {
      divElem.classList.add('hidden');
      textareaElem.classList.remove('hidden');
      textareaElem.value = divElem.innerText;
   }
   // При натисканні Ctrl + S відображаємо div
   if (e.ctrlKey && e.key === 's' || e.ctrlKey && e.key === 'ы') {
      textareaElem.classList.add('hidden');
      divElem.classList.remove('hidden');
      divElem.innerText = textareaElem.value;
   }
});
