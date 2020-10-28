const form = document.getElementById('form');
const phone = document.getElementById('input-phone-number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkOtpForm();
});

function popupUploadForm(){
 var newWindow = window.open('verify.html', 'name', 'height=500,width=600');
}

function closeSelf(){
 self.close();
 return true;
}

function checkPhoneValidity(phone) {
 if (phone === '') {
  return false;
 } else if (phone.length < 8) {
  return false;
 } else if (phone.includes('-') ) {
  return false;
 } else if (!phone.match(/^8|9\d+$/)) {
  return false;
 } else {
  return true;
 }
}

function checkOtpForm() {
    // trim to remove the whitespaces
    //Add status default false
    let status = false;
    const phoneValue = phone.value.trim();

    if (checkPhoneValidity(phoneValue)) {
      status = setSuccessFor(phone);
    } else {
      status = setErrorFor(phone, 'The Phone Number field is invalid.');
    }
    return status;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    return false;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    return true;
}