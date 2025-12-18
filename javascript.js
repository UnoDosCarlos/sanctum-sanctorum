const openFormBtn = document.querySelector('#openFormBtn');
const submitBtn = document.querySelector('#submitBtn');
const addTomePopUp = document.querySelector('.addTomePopUp');

openFormBtn.addEventListener('click', () => {
    addTomePopUp.classList.add('visible');
    openFormBtn.disabled = true;
    console.log(addTomePopUp.classList.contains('visible'));
});

submitBtn.addEventListener('click', () => {
    addTomePopUp.classList.remove('visible');
    openFormBtn.disabled = false;
});


const myLibrary = [];

function Book(title, author,description) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.id = addId();
};

Book.prototype.addId = function() {
    crypto.randomUUID()
};




function addBookToLibrary () {

};