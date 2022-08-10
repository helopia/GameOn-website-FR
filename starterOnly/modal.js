function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//retour formulaire
function refresh() {
    location.reload();
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnValidate = document.querySelector(".btn-submit");


// DOM Elements Form
const formModal = document.querySelector("#formulaire");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
let checkboxes = document.querySelectorAll(".checkbox-input");
let arrayCheckboxes = Array.from(checkboxes);
// const elementsForm = document.querySelectorAll("div.formData > input");
const checkboxConditions = document.getElementById("checkbox1");
const today = new Date().toISOString().split('T')[0];

//Regex
const regexEmail = RegExp('^[a-zA-Z0-9.-_]{2,25}[@]{1}[a-zA-Z0-9-_]+[.]{1}[a-z]{2,10}$', 'g');
const regexNombreTournois = /^[0-9]+$/;

// DOM Elements error
const errorMessageFirst = document.querySelector(".errorFirstName");
const errorMessageLast = document.querySelector(".errorLastName");
const errorMessageEmail = document.querySelector(".errorEmail");
const errorMessageBirthdate = document.querySelector(".errorBirthdate");
const errorMessageQuantity = document.querySelector(".errorQuantity");
const errorMessageSelection = document.querySelector(".errorSelection");
const errorMessagesAll = document.querySelectorAll("div.formData > span");
const errorMessageConditions = document.querySelector(".errorConditions");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal formulaire on click
closeModal.addEventListener("click", (e) => {
    modalbg.style.display = "none";
    refresh();
});
// Validation elements Form
formModal.addEventListener('submit', validate);
// Date Exact
birthdate.max = today;

// Email validation

function validateEmail() {
    if (email.value === "") {
        errorMessageEmail.textContent = "Email manquant";
        errorMessageEmail.style.fontSize = "12px";
        errorMessageEmail.style.color = "red";
        return false;
    } else if (regexEmail.test(email.value) === false) {
        errorMessageEmail.textContent = "Adresse e-mail invalide";
        errorMessageEmail.style.fontSize = "12px";
        errorMessageEmail.style.color = "red";
        return false;
    }
    errorMessageEmail.textContent = "";
    return true;
}

// Name validation
function validateLastname() {
    if (!lastName.value.trim()) {
        errorMessageLast.textContent = "Nom manquant";
        errorMessageLast.style.fontSize = "12px";
        errorMessageLast.style.color = "red";

        lastName.value = ""
        return false;
    } else if (lastName.value.length < 2) {
        errorMessageLast.textContent = "Veuillez entrer 2 caractères ou plus pour ce champ";
        errorMessageLast.style.fontSize = "12px";
        errorMessageLast.style.color = "red";
        return false;
    }
    errorMessageLast.textContent = "";
    return true;
}

// firstname validation
function validateFirstname() {
    if (!firstName.value.trim()) {
        errorMessageFirst.textContent = "Prénom manquant";
        errorMessageFirst.style.fontSize = "12px";
        errorMessageFirst.style.color = "red";
        firstName.value = "";
        return false;

    } else if (firstName.value.length < 2) {
        errorMessageFirst.textContent = "Veuillez entrer 2 caractères ou plus pour ce champ";
        errorMessageFirst.style.fontSize = "12px";
        errorMessageFirst.style.color = "red";
        return false;
    }
    errorMessageFirst.textContent = "";
    return true;

}

// Birthdate Validation
function validateBirthdate() {
    if (birthdate.value === "") {
        errorMessageBirthdate.textContent = "Date d'anniversaire manquante";
        errorMessageBirthdate.style.fontSize = "12px";
        errorMessageBirthdate.style.color = "red";
        return false;
    }
    errorMessageBirthdate.textContent = "";
    return true;
}

// Quantity of Challenges validation
function validateQuantity() {
    if (quantity.value === "") {
        errorMessageQuantity.textContent = "Nombre de tournois manquants";
        errorMessageQuantity.style.fontSize = "12px";
        errorMessageQuantity.style.color = "red";
        return false;
    } else if (regexNombreTournois.test(quantity.value) === false) {
        errorMessageQuantity.textContent = "format incorrect";
        errorMessageQuantity.style.fontSize = "12px";
        errorMessageQuantity.style.color = "red";
        return false;
    }
    errorMessageQuantity.textContent = "";
    return true;
}

//All elem validation
function validate(e) {
    e.preventDefault();
    const valideFirstname = validateFirstname();
    const valideLastname = validateLastname();
    const valideEmail = validateEmail();
    const valideBirthdate = validateBirthdate();
    const valideQuantity = validateQuantity();
// chekbox validation
    if (arrayCheckboxes.some(check)) {
        errorMessageSelection.textContent = "";

    } else {
        errorMessageSelection.textContent = "Veuillez choisir au moins une ville";
        errorMessageSelection.style.fontSize = "12px";
        errorMessageSelection.style.color = "red";
    }

    if (checkboxConditions.checked) {
        errorMessageConditions.textContent = "";

    } else if (checkboxConditions.checked === false) {
        errorMessageConditions.textContent = "Veuillez acceptez les termes et conditions";
        errorMessageConditions.style.fontSize = "12px";
        errorMessageConditions.style.color = "red";
    }
    ;

    if (valideFirstname && valideLastname && valideEmail && valideBirthdate && valideQuantity && arrayCheckboxes.some(check) && checkboxConditions.checked) {

        let contentForm = document.querySelector(".mainFormData");

        contentForm.textContent = "Merci ! Votre réservation a été reçue.";
        contentForm.style.fontSize = "36px";
        contentForm.style.padding = "7.9rem";
        contentForm.style.paddingLeft = "3.5rem";
        contentForm.style.paddingTop = "10rem";
        contentForm.style.margin = "0px";
        contentForm.style.height = "550px";
        contentForm.style.width = "120%";

        btnValidate.value = "Fermer";

        btnValidate.addEventListener("click", e => {
            refresh();
        })

    }
    ;

};

//Boucle pour vérification des checkboxs
function check() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            return true;
        }
    }
};




