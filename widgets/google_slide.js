document.addEventListener('DOMContentLoaded', () => {
    console.log('Google Slides Widget Loaded');

    // Example functionality: Open Google Slides in a new tab
    document.querySelector('#google-slides .btn').addEventListener('click', () => {
        window.open('https://docs.google.com/presentation/', '_blank');
    });
});
