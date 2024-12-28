document.addEventListener('DOMContentLoaded', function() {
    console.log('SINISTER code editor website loaded.');
});

function copyToClipboard(button, text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.disabled = true;
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    });
}
