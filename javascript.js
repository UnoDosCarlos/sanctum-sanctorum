const openFormBtn = document.querySelector('#openFormBtn');
const submitBtn = document.querySelector('#submitBtn');
const readBtn = document.querySelector('#readBtn');
const addTomePopUp = document.querySelector('.addTomePopUp');
const bottomSection = document.querySelector('.bottom-section');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputDescription = document.querySelector('#description');
const displayTitle = document.querySelector('.display-title');
const displayAuthor = document.querySelector('.display-author');
const displayDescription = document.querySelector('.display-description');
const tomeCard = document.querySelector('.tome-card');
const tomeBtn = document.querySelector('#tomeBtn');


let bookID;

openFormBtn.addEventListener('click', () => {
    addTomePopUp.classList.add('visible');
    openFormBtn.disabled = true;
});

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    if( inputTitle.value === '' || inputAuthor.value === '' || inputDescription.value === '') {
        return;
    } 
    addTomeToLibrary();
    inputTitle.value = null;
    inputAuthor.value = null;
    inputDescription.value = null;
    addTomePopUp.classList.remove('visible');
    openFormBtn.disabled = false;
});

readBtn.addEventListener('click', () => {

    if(tomeCard.classList.contains('read')) {
    tomeCard.classList.remove('read');
    } else {
    tomeCard.classList.add('read');
    };
    
});



const myLibrary = [];

function Tome(title, author,description) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.id;
};





function addTomeToLibrary () {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const description = inputDescription.value;

    const newTome = new Tome(title,author,description);
    let tome = document.createElement('div');
    const tomeTitle = document.createElement('h3');
    const tomeAuthor = document.createElement('h4');
    const tomeDesc = document.createElement('p');
    const tomeBtn = document.createElement('button');

    function createTomeID() {
        let tomeID;
        if(tomeID === true) {
            tomeID = '';
            tomeID = crypto.randomUUID()
            return tomeID;
        } else {
            tomeID = crypto.randomUUID();
        return tomeID;

        }

    };


    tomeTitle.id = createTomeID();
    tomeTitle.textContent += newTome.title;
    tomeAuthor.textContent += newTome.author;
    tomeDesc.textContent += newTome.description;
    tomeBtn.textContent = 'Read';
    tomeBtn.id = 'tomeBtn';

    tome.classList.add('tome-card');
    tome.classList.add('visible');
    bottomSection.appendChild(tome);
    tome.appendChild(tomeTitle);
    tome.appendChild(tomeAuthor);
    tome.appendChild(tomeDesc);
    tome.appendChild(tomeBtn);

    console.log(tomeTitle.id);

    tomeBtn.addEventListener('click', () => {

        if(tome.classList.contains('read')) {
        tome.classList.remove('read');
        } else {
        tome.classList.add('read');
        };
        
    });


};
