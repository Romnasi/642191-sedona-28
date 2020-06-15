let mainForm = document.querySelector('.main-form-search');
let buttonHide = document.querySelector('.hidding-form');
let dateArrival = document.querySelector('.date-arrival-field');
let dateDeparture = document.querySelector('.date-departure-field');
let quantityAdults = document.querySelector('.field-quantity-adults');
let quantityChildren = document.querySelector('.field-quantity-children');

let isStorageSupport = true;
let storageAdults = "";

try {
  storageAdults = localStorage.getItem('adults');
} catch (err) {
  isStorageSupport = false;
}

buttonHide.addEventListener('click', function () {
  mainForm.classList.toggle('hide');
  dateArrival.focus();

  if (storageAdults) {
    quantityAdults.value = storageAdults;
  }
});



mainForm.addEventListener('submit', function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !quantityAdults.value || !quantityChildren.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', quantityAdults.value);
    }
  }

});
