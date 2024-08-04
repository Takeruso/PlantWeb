document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submitBtn = document.getElementById('submitForm');

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    submitBtn.onclick = function() {
        document.querySelector('form').submit();
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
