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
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    if (width < 1.3 * height) {
        alert("Please rotate your phone to view this website.");
        document.body.style.display = 'none'; 
        document.body.innerHTML = '<h2 style="text-align: center; margin-top: 20%;">Please rotate your phone to view this website.</h2>'; 
        document.body.style.display = 'block';
    }
});