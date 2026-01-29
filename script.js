document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // UI Feedback
            const container = form.parentElement;

            // Create success message element
            const successMsg = document.createElement('div');
            successMsg.className = 'fade-in';
            successMsg.style.fontFamily = 'var(--font-serif)';
            successMsg.style.fontSize = '1.5rem';
            successMsg.style.marginTop = '2rem';
            successMsg.textContent = 'Received.';

            // Hide form and show message
            form.style.display = 'none';
            container.appendChild(successMsg);
        });
    }

    // Auto-resize textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
});
