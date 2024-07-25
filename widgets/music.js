document.addEventListener('DOMContentLoaded', () => {
    console.log('Music Widget Loaded');

    // Example functionality: Open Spotify in a new tab
    document.querySelector('#music .btn').addEventListener('click', () => {
        window.open('https://www.spotify.com/', '_blank');
    });
});
