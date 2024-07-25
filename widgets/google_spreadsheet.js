document.addEventListener('DOMContentLoaded', () => {
    console.log('Google Spreadsheet Widget Loaded');

    // Example functionality: Open Google Spreadsheet in a new tab
    document.querySelector('#google-spreadsheet .btn').addEventListener('click', () => {
        window.open('https://docs.google.com/spreadsheets/d/1Dgo3ts3jN7PD5ovwMqT0mHs9HRz9FeUjnd1ejKQqoa8/edit?usp=sharing');
    });
});
