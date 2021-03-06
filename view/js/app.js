let form = document.getElementById("form");
let formPayment = document.getElementById("formPayment");
let modalResult = document.getElementById("response-to-user");
let modalMessageTitle = document.getElementById("modalTitle");
let modalMessageSubTitle = document.getElementById("modalSubTitle");
let nome = document.getElementById("name");
let phone = document.getElementById("phone");
let birth = document.getElementById("birthdate");
let date = Date.parse(birth.value);
let email = document.getElementById("email");
let city = document.getElementById("city");
let college = document.getElementById("college");
let radios1 = document.getElementsByName("knowing");
let radios2 = document.getElementsByName("radio2");
let paymentRadios = document.getElementsByName("payment");
let loadingDiv = document.getElementById("loading");
let body = {};
let outroradio = document.getElementsByClassName("outro");
let outroinput = document.getElementsByClassName("outroinput");

console.log(city.value);

form.addEventListener("submit", function (stop) {
  stop.preventDefault();
  let error = 0;
  if (
    /[^0-9][a-z][^0-9]/gi.test(nome.value) == false ||
    nome.value === undefined
  ) {
    error += 1;
    document.getElementById("nametitle").innerText = nome.title;
  } else {
    error = 0;
    document.getElementById("nametitle").innerText = "";
  }

  if (
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      phone.value
    ) == false ||
    phone.value === undefined
  ) {
    error += 1;
    document.getElementById("phonetitle").innerText = phone.title;
  } else {
    error = 0;
    document.getElementById("phonetitle").innerText = "";
  }
  if (
    /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z])?$/.test(email.value) ==
      false ||
    email.value === undefined
  ) {
    error += 1;
    document.getElementById("emailtitle").innerText = email.title;
  } else {
    error = 0;
    document.getElementById("emailtitle").innerText = "";
  }
  if (isNaN(date) || birth.value === undefined) {
    error += 1;
    document.getElementById("birthtitle").innerText = birth.title;
  } else {
    error = 0;
    document.getElementById("birthtitle").innerText = "";
  }
  if (/[A-Z]{2}\/\D{3}/.test(city.value) == false || city.value === undefined) {
    error += 1;
    document.getElementById("citytitle").innerText = city.title;
  } else {
    error = 0;
    document.getElementById("citytitle").innerText = "";
  }

  if (
    /[^0-9][a-z][^0-9]/gi.test(college.value) == false ||
    college.value === undefined
  ) {
    error += 1;
    document.getElementById("collegetitle").innerText = college.title;
  } else {
    error = 0;
    document.getElementById("collegetitle").innerText = "";
  }

  if (
    radios1[0].checked === false &&
    radios1[1].checked === false &&
    radios1[2].checked === false &&
    radios1[3].checked === false &&
    radios1[4].checked === false &&
    radios1[5].checked === false &&
    radios1[6].checked === false
  ) {
    error += 1;
    document.getElementById("radios1title").innerText = "Escolha uma Op????o";
  } else {
    error = 0;
    document.getElementById("radios1title").innerText = "";
  }

  if (
    radios2[0].checked === false &&
    radios2[1].checked === false &&
    radios2[2].checked === false &&
    radios2[3].checked === false &&
    radios2[4].checked === false &&
    radios2[5].checked === false &&
    radios2[6].checked === false
  ) {
    error += 1;
    document.getElementById("radios2title").innerText = "Escolha um op????o";
  } else {
    error = 0;
    document.getElementById("radios2title").innerText = "";
  }

  if (error === 0) {
    savePersonalData();
    callPaymetnForm();
  }
});
outroinput[0].style.display = "none";
form.addEventListener("change", function input0() {
  if (outroradio[0].checked === true) {
    outroinput[0].style.display = "flex";
  }
  if (outroradio[0].checked === false) {
    outroinput[0].style.display = "none";
  }
});
form.addEventListener("change", function () {
  if (outroradio[1].checked === true) {
    outroinput[1].style.display = "flex";
  }
  if (outroradio[1].checked === false) {
    outroinput[1].style.display = "none";
  }
});

formPayment.addEventListener("submit", function (stop) {
  stop.preventDefault();
  let error = 0;

  if (
    !paymentRadios[0].checked &&
    !paymentRadios[1].checked &&
    !paymentRadios[2].checked
  ) {
    error += 1;
    document.getElementById("paymentRadioTitle").innerText = "Escolha um op????o";
  } else {
    error = 0;
    document.getElementById("paymentRadioTitle").innerText = "";
  }

  if (error === 0) {
    savePayment();
    postDataForm();
  }
});

async function postDataForm() {
  const url = "https://formengcomprapi.azurewebsites.net/v1/subs";

  showSpinner();
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    modalMessageTitle.innerHTML =
      "A equipe da Brainstorm agradece sua inscri????o!";
    modalMessageSubTitle.innerHTML =
      "Aguarde nosso contato para mais informa????es";
    console.log("response", response);
    hideSpinner();
  } catch (error) {
    hideSpinner();
    modalMessageTitle.innerHTML = "Opa!, algo deu errado";
    console.log("Erro:", error);
  }
  callModalResult();
}

function savePayment() {
  let paymentChecked;

  for (var i = 0; i < paymentRadios.length; i++) {
    if (paymentRadios[i].checked) {
      paymentChecked = paymentRadios[i];
    }
  }

  body.paycheck = paymentChecked.value;
}

function savePersonalData() {
  let KnowingChecked;
  let degreeChecked;

  for (var i = 0; i < radios2.length; i++) {
    if (radios2[i].checked) {
      KnowingChecked = radios2[i];
    }
  }
  for (var i = 0; i < radios1.length; i++) {
    if (radios1[i].checked) {
      degreeChecked = radios1[i];
    }
  }

  body = {
    name: nome.value,
    phone: phone.value,
    birthdate: birth.value,
    email: email.value,
    city: city.value,
    college: college.value,
    degree: degreeChecked.value,
    knowing: KnowingChecked.value,
  };
}

function callPaymetnForm() {
  form.classList.remove("show");
  form.classList.add("hide");
  formPayment.classList.add("show");
}

function callModalResult() {
  formPayment.classList.remove("show");
  formPayment.classList.add("hide");
  modalResult.classList.add("show");
}

function backTobegin() {
  clearInputs();
  modalResult.classList.remove("show");
  modalResult.classList.add("hide");
  form.classList.add("show");
}

function showSpinner() {
  loadingDiv.style.visibility = "visible";
}

function hideSpinner() {
  loadingDiv.style.visibility = "hidden";
}

function clearInputs() {
  nome.value = "";
  phone.value = "";
  birth.value = "";
  email.value = "";
  city.value = "";
  college.value = "";
  modalMessageTitle = "";
  modalMessageSubTitle = "";
  clearRadioButtons(radios1);
  clearRadioButtons(radios2);
  clearRadioButtons(paymentRadios);
}

function clearRadioButtons(radioArray) {
  for (let i = 0; i < radioArray.length; i++) {
    radioArray[i].checked = false;
  }
}
