document.addEventListener('DOMContentLoaded', () => {
    console.log('Google Form Widget Loaded');

    // Example functionality: Open Google Form in a new tab
    document.querySelector('#google-form .btn').addEventListener('click', () => {
        window.open('https://docs.google.com/forms/', '_blank');
    });
});
