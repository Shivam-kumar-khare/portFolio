document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this site.");
});

document.addEventListener('keydown', function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J"))) {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
});

window.addEventListener('load', function () {
    if (window.innerWidth < 1000) {
        alert("This website is only visible at Desktop pls open in your desktop.");
        document.body.style.display = 'none'; 
        document.body.innerHTML = '<h2 style="text-align: center; margin-top: 20%;">Please open this website on a desktop only.</h2>'; 
        document.body.style.display = 'block';
    }
});
