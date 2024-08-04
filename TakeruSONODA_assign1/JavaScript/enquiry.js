document.querySelectorAll('.enquiry-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const subject = this.getAttribute('data-subject');
        const description = this.getAttribute('data-description');

        sessionStorage.setItem('enquirySubject', `RE: Enquiry on ${subject} - ${description}`);

        window.location.href = 'Enquiry.html';
    });
});

