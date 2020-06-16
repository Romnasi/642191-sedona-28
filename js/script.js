let mainForm = document.querySelector('.main-form-search');
let buttonHide = document.querySelector('.hidding-form');
let dateArrival = document.querySelector('.date-arrival-field');
let dateDeparture = document.querySelector('.date-departure-field');
let quantityAdults = document.querySelector('.field-quantity-adults');
let quantityChildren = document.querySelector('.field-quantity-children');

let isStorageSupport = true;
let storageAdults = '';
let storageChildren = '';

try {
  storageAdults = localStorage.getItem('adults');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

buttonHide.addEventListener('click', function () {
  mainForm.classList.toggle('hide');
  dateArrival.focus();

  if (storageAdults && storageChildren) {
    quantityAdults.value = storageAdults;
    quantityChildren.value = storageChildren;
  }
});

mainForm.addEventListener('submit', function (evt) {
  if (mainForm.classList.contains('form-error')) {
    mainForm.classList.remove("form-error");
    mainForm.offsetWidth = mainForm.offsetWidth;
  }

  if (!dateArrival.value || !dateDeparture.value || !quantityAdults.value || !quantityChildren.value) {
    evt.preventDefault();
    mainForm.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', quantityAdults.value);
      localStorage.setItem('children', quantityChildren.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mainForm.classList.contains('hide')) {
    } else {
      mainForm.classList.add('hide');
    }
  }
})
