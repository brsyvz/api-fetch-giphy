'use strict';

const spinner = document.getElementById('spinner');

// random cat gifs

let btn = document.getElementById('btn');
const img = document.querySelector('img');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  spinner.removeAttribute('hidden');
  let text = document.getElementById('search');
  btn.textContent = `show me another ${text.value}`;
  img.src = '';
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=bcvSrcsUJTovc8VlAWL1TtqH8N7Bpal0&s=${text.value}`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      spinner.setAttribute('hidden', '');
      img.src = response.data.images.original.url;
      console.log('success');
    })
    .catch((e) => {
      console.log('fail');
      img.src = './error404.png';
      spinner.setAttribute('hidden', '');
    });
});
