const items = document.querySelector('#favchap');
const button = document.querySelector('#adding');
const lista = document.querySelector('.list');


button.addEventListener('click', () => {
    const chapter = items.value;
    items.value = '';


    const favoriteChapter = document.createElement('li');
    const text = document.createElement('span');
    const buttonList = document.createElement('button');

    favoriteChapter.appendChild(text);
    text.textContent = chapter;
    favoriteChapter.appendChild(buttonList);
    buttonList.textContent = "X";

    lista.appendChild(favoriteChapter);

    buttonList.addEventListener('click', () => {
        lista.removeChild(favoriteChapter);
    })
})

