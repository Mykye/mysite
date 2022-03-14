const button = document.querySelector('.contacts_button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close_popup');
const body = document.querySelectorAll('.body');

button.addEventListener('click', function (e) {
    popup.classList.add('open');
    e.preventDefault();
});

closePopup.addEventListener('click',function (e) {
    popup.classList.remove('open');
    e.preventDefault();
});

popup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup_content')) {
        popup.classList.remove('open');
    }
});
