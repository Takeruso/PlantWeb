document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submitBtn = document.getElementById('submitForm');
    const previewContent = document.getElementById('previewContent');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(form);
        let previewText = '';
        for (const [key, value] of formData.entries()) {
            previewText += `${key}: ${value}<br>`; 
        }
        previewContent.innerHTML = previewText; 
        modal.style.display = 'block';
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    submitBtn.onclick = function() {
        form.submit();
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
