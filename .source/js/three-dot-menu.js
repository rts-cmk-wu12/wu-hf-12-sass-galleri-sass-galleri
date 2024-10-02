let threeDotMenu = document.querySelector("#threeDotMenu");
const threeDotMenuFrame = document.querySelector("#threeDotMenuFrame");

threeDotMenu.addEventListener('click', function() {

    if (threeDotMenuFrame.classList.contains("hidden")) {
    threeDotMenuFrame.classList.remove("hidden");
    } else {
        threeDotMenuFrame.classList.add("hidden");
    }
});

document.addEventListener('click', function(e) {

    if (!e.target.classList.contains('menu-frame')) {
        threeDotMenuFrame.classList.add('hidden');
    }
});