const frame = document.getElementById('lapodiFrame');
const loader = document.getElementById('loader');
const errorBox = document.getElementById('errorBox');
const fullscreenBtn = document.getElementById('fullscreenBtn');

/* Loader success */
frame.addEventListener('load', () => {
    loader.classList.add('hidden');
});

/* Network error fallback */
setTimeout(() => {
    if (!frame.contentWindow) {
        loader.classList.add('hidden');
        errorBox.classList.remove('hidden');
    }
}, 15000);

/* Reload */
function reloadApp() {
    location.reload();
}

/* Fullscreen toggle */
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
