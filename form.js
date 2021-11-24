function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var name = document.Form.name.value;
  var lname = document.Form.lname.value;
  var address = document.Form.address.value;
  var email = document.Form.email.value;
  var pincode = document.Form.pincode.value;
  var state = document.Form.state.value;
  var country = document.Form.country.value;
  var gender = document.Form.gender.value;

  var nameErr =
    (lastnameErr =
    addressErr =
    emailErr =
    pincodeErr =
    stateErr =
    countryErr =
    genderErr =
      true);

  if (name == "") {
    printError("nameErr", "Please enter your name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  if (lname == "") {
    printError("lnameErr", "Please enter your name");
    var elem = document.getElementById("lname");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      printError("lnameErr", "Please enter a valid name");
      var elem = document.getElementById("lname");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("lnameErr", "");
      nameErr = false;
      var elem = document.getElementById("lname");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  if (address == "") {
    printError("addressErr", "Please enter your address");
    var elem = document.getElementById("address");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z0-9\s,/]+$/;
    if (regex.test(address) === false) {
      printError("addressErr", "Please enter a valid address");
      var elem = document.getElementById("address");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("addressErr", "");
      nameErr = false;
      var elem = document.getElementById("address");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (pincode == "") {
    printError("pincodeErr", "Please enter your pincode");
    var elem = document.getElementById("pincode");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[1-9]\d{5}$/;
    if (regex.test(pincode) === false) {
      printError("pincodeErr", "Please enter a valid 6 digit pincode");
      var elem = document.getElementById("pincode");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("pincodeErr", "");
      pincodeErr = false;
      var elem = document.getElementById("pincode");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  if (state == "Select") {
    printError("stateErr", "Please select your state ");
    var elem = document.getElementById("state");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("stateErr", "");
    stateErr = false;
    var elem = document.getElementById("state");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (country == "Select") {
    printError("countryErr", "Please select your country");
    var elem = document.getElementById("country");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("countryErr", "");
    countryErr = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (gender == "") {
    printError("genderErr", "Please select your gender");
    var elem = document.getElementById("gender");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("genderErr", "");
    genderErr = false;
    var elem = document.getElementById("gender");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (
    (nameErr ||
      lastnameErr ||
      addressErr ||
      emailErr ||
      pincodeErr ||
      stateErr ||
      countryErr ||
      genderErr) == true
  ) {
    return false;
  }
}
