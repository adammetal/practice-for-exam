import data from './data.js';

const root = document.querySelector("#root");

function main() {
  let i = 1;

  const section = document.createElement('section');
  section.className = 'intro';

  const h1 = document.createElement('h1');
  h1.className = 'intro__h1'; // BEM Style
  h1.innerText = 'Welcome to gifs paradise';

  section.append(h1);
  root.append(section);

  const main = document.createElement("main");
  main.className = 'cards';

  for (const image of data) {
    const card = document.createElement("div");
    card.className = 'card';

    const h1 = document.createElement("h1");
    h1.className = 'card__header'; // BEM Style

    const body = document.createElement("div");
    body.className = 'card__body'; // BEM Style

    h1.innerText = `Card ${i}.`;

    const img = document.createElement('img');
    img.src = image;

    card.append(h1, body);
    body.append(img);
    main.append(card);
  }

  root.append(main);
}

main();
