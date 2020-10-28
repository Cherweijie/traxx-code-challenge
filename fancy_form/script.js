const form = document.getElementById('form');
const address = document.getElementById('input-address');
const amount = document.getElementById('input-amount');
const otp = document.getElementById('input-otp');
const phone = document.getElementById('input-phone-number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function areForbiddenCharactersPresent(address) {
  var address_includes_0 = address.includes("0");
  var address_includes_O = address.includes("O");
  var address_includes_I = address.includes("I");
  var address_includes_l = address.includes("l");
  return address_includes_0 && address_includes_I && address_includes_O && address_includes_l;
}

function checkAmountValidity(amount) {
  if(amount === '') {
    return false;
  } else if (amount.includes("-")) {
      return false;
  } else {
    return true;
  }
}

function checkAddressValidity(address) {
  var length_of_address = address.length;
  var forbiddenCharactersArePresent = areForbiddenCharactersPresent(address);
  if (address === '') {
    return false;
  } else if (!address.match(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/)) {
    // Regex bitcoin taken from the link below to check a rough validity of the bitcoin address.
    // http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html
    return false;
  } else if (address.match(/(\W)/)) {
      // The bitcoin address is invalid. It cannot have symbols and other characters.
      return false;
  } else {
    return true;
  }
}

function popupUploadForm(){
        var newWindow = window.open('verify.html', 'name', 'height=500,width=600');
}

function closeSelf(){
    self.close();
    return true;
}

function checkInputs() {
    // trim to remove the whitespaces
    let status = false;        //Add status default false
    const addressValue = address.value.trim();
    const amountValue = amount.value.trim();
    const otpValue = otp.value.trim();

    if (addressValue === '') {
       status = setErrorFor(address, 'The Bitcoin Address is invalid.');
       //if not validating then "false"
    } else {
      if (checkAddressValidity(addressValue)) {
        status = setSuccessFor(address);
      } else {
        status = setErrorFor(address, 'The Bitcoin Address is invalid.')
      }
    }

    if (checkAmountValidity(amountValue)) {
      status = setSuccessFor(amount);
    } else {
      status = setErrorFor(amount, 'The input amount is invalid.')
    }

    if (checkOtpValidity(otpValue)) {
      status =  setSuccessFor(otp);
    } else {
       status = setErrorFor(otp, 'The OTP field is invalid.');
    }
    return status;
}

function checkOtpValidity(otp) {
  if (otp === '') {
    return false;
  } else if (otp.length != 6) {
    return false;
  } else {
    return true;
  }
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