let params = new URLSearchParams(window.location.search);
const imageCategory = params.get("category");
const images = document.querySelectorAll(".gallery__image");
console.log(images)

if (params.has("category")) {
    images.forEach(function(image) {
        if (image.dataset.category != imageCategory) {
            image.style.display = "none";
        }
    });
}