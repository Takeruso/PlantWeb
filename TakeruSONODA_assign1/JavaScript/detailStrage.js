document.addEventListener('DOMContentLoaded', function() {
    const subject = sessionStorage.getItem('enquirySubject');

    if (subject) {
        const subjectField = document.getElementById('subject-detail');
        if (subjectField) {
            subjectField.value = subject;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function validateNumberGreaterThanZero(value) {
        const number = parseInt(value, 10);
        return !isNaN(number) && number > 0;
    }

    const plantsDropdown = document.getElementById('plants');
    const subjectField = document.getElementById('subject-detail');
    const plants = ['Dipterocarpaceae', 'Lauraceae', 'Burseraceae', 'Myristicaceae', 'Chrysobalanaceae', 'Meliaceae', 'Ebenaceae'];
    plants.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant;
        option.textContent = plant;
        plantsDropdown.appendChild(option);
    });

    plantsDropdown.addEventListener('change', function() {
        subjectField.value = `RE: Enquiry on ${this.value}`;
    });


    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let errorMessage = '';

        const firstName = document.getElementById('first-name').value;
        if (!validateName(firstName)) {
            errorMessage += 'First name must be 1-25 letters.\n';
        }

        const lastName = document.getElementById('last-name').value;
        if (!validateName(lastName)) {
            errorMessage += 'Last name must be 1-25 letters.\n';
        }

        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            errorMessage += 'Invalid email format.\n';
        }

        const streetAddress = document.getElementById('street-address').value;
        if (!validateText(streetAddress)) {
            errorMessage += 'Street address is required.\n';
        }

        const city = document.getElementById('city').value;
        if (!validateText(city) || city.length > 20) {
            errorMessage += 'City/Town name must be within 20 characters.\n';
        }

        const state = document.getElementById('state').value;
        if (!validateSelect(state)) {
            errorMessage += 'Please select a state.\n';
        }

        const postcode = document.getElementById('postcode').value;
        if (!validateNumberGreaterThanZero(postcode)) {
            errorMessage += 'Postcode must be a number greater than 0.\n';
        }

        const phone = document.getElementById('phone').value;
        if (!validatePhone(phone)) {
            errorMessage += 'Invalid phone number. It should be 10 digits.\n';
        }

        const plants = document.getElementById('plants').value;
        if (!validateSelect(plants)) {
            errorMessage += 'Please select a plant.\n';
        }

        const subjectDetail = document.getElementById('subject-detail').value;
        if (!validateText(subjectDetail)) {
            errorMessage += 'Subject detail is required.\n';
        }

        if (errorMessage !== '') {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});

function validateName(name) {
    const re = /^[A-Za-z]{1,25}$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

function validateText(text) {
    return text.trim() !== '';
}

function validateSelect(value) {
    return value !== '';
}

function validatePostcode(postcode) {
    const re = /^\d{5}$/;
    return re.test(postcode);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
