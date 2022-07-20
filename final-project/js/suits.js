const suite1 = document.querySelector('#suite1');
const suite2 = document.querySelector('#suite2');
const suite3 = document.querySelector('#suite3');
const suite4 = document.querySelector('#suite4');
const suite5 = document.querySelector('#suite5');
const suite_paragraph = document.querySelector('#suite_p');

const changeP = () => {
    suite_paragraph.textContent = 'double room with bathroom and living room with a minimum area of ​​12 m2';
}

const changeP2 = () => {
    suite_paragraph.textContent = 'Double room with bathroom and living room with a minimum area of ​​8 m2';
}

const changeP3 = () => {
    suite_paragraph.textContent = 'Two or more double rooms with their corresponding bathrooms and a common room. The large suite must be marketed as a whole';
}

const changeP4 = () => {
    suite_paragraph.textContent = 'from 6 m2 in a 1-star hotel and from 10 m2 in a 5-star hotel';
}

const changeP5 = () => {
    suite_paragraph.textContent = 'from 11 m2 in 1 star and from 16.5 m2 in 5 stars';
}


suite1.addEventListener('click', changeP);
suite2.addEventListener('click', changeP2);
suite3.addEventListener('click', changeP3);
suite4.addEventListener('click', changeP4);
suite5.addEventListener('click', changeP5);


