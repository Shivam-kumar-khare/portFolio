document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this site.");
});

// Disable F12, Ctrl+Shift+I, and other developer tools shortcuts
document.addEventListener('keydown', function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J"))) {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
});

window.addEventListener('load', function () {
    if (window.innerWidth < 1000) {
        alert("This site is best viewed on a desktop only.");
        document.body.style.display = 'none';
    }
});