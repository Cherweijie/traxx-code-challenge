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

function checkAddressValidity(address) {
  var first_char = address.charAt(0);
  var length_of_address = address.length;
  var forbiddenCharactersArePresent = areForbiddenCharactersPresent(address);

  if (!bitCoinAddr.match(/(1|3|bc1)/)) {
    alert('The bitcoin address is invalid. The first character should be a 1 or 3.');
    return false;
  } else {
    if (length_of_address < 26 || length_of_address > 35) {
      //alert('The bitcoin address is invalid. It has to be between 26 and 35 characters long.');
      return false;
    }
    if (forbiddenCharactersArePresent) {
      //alert('The bitcoin address is invalid. It should not contain 0, O, I or l.');
      return false;
    }
    if (address.match(/(\W)/)) {
      alert("The bitcoin address is invalid. It cannot have symbols and other characters.");
      return false;
    }
    if (length_of_address >= 26 && length_of_address <= 35 && !forbiddenCharactersArePresent) {
      //alert('The bitcoin address is valid.');
      return true;
    }
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
    const phoneValue = phone.value.trim();

    if(addressValue === '') {
       status = setErrorFor(address, 'The Bitcoin Address is invalid.');
                                 //if not validating then "false"
    } else {
      if (checkAddressValidity(addressValue)) {
        status = setSuccessFor(address);
      } else {
        status = setErrorFor(address, 'The Bitcoin Address is invalid.')
      }
    }

    if(amountValue === '') {
       status =  setErrorFor(amount, 'The input amount is invalid.');
    } else {
       status =  setSuccessFor(amount);
    }

    if(otpValue === '') {
       status =  setErrorFor(otp, 'The OTP field is invalid.');
    } else {
       status =  setSuccessFor(otp);
    }

    if (phoneValue === '') {
      status = setErrorFor(phone, 'The Phone Number field is empty.');
    } else {
      status = setSuccessFor(phone);
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