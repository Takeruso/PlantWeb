document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submitBtn = document.getElementById('submitForm');
    const previewContent = document.getElementById('previewContent');

    // 検証関数
    function validateName(name) {
        const re = /^[A-Za-z]{1,25}$/;
        return re.test(name);
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = form.querySelector('#first-name').value;
        const lastName = form.querySelector('#last-name').value;
        const email = form.querySelector('#email').value;
        const phone = form.querySelector('#phone').value;

        let errorMessage = '';
        if (!validateName(firstName) || !validateName(lastName)) {
            errorMessage += 'Please enter a valid first and last name.\n';
        }
        if (!validateEmail(email)) {
            errorMessage += 'Please enter a valid email address.\n';
        }
        if (!validatePhone(phone)) {
            errorMessage += 'Phone number must be 10 digits.\n';
        }

        const feedbackRating = form.querySelector('input[name="service-rating"]:checked');
        if (!feedbackRating) {
            errorMessage += 'Please select a feedback rating.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        let previewText = '';
        for (const [key, value] of new FormData(form).entries()) {
            previewText += `${key}: ${value}<br>`;
        }
        previewContent.innerHTML = previewText;
        modal.style.display = 'block';
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    submitBtn.onclick = function() {
        form.submit();
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
