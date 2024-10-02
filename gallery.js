const foodButton = document.getElementById('food-btn')
const travelButton = document.getElementById('travel-btn')
const homeButton = document.getElementById('home-btn')
document.getElementById('more-options').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
});


foodButton.addEventListener('click', function() {
    filterImages('food');
});

homeButton.addEventListener('click', function(){
    filterImages('home');
});

travelButton.addEventListener('click', function() {
    filterImages('travel');
});
console.log(travelButton)

document.getElementById('lifestyle-btn').addEventListener('click', function() {
    filterImages('all');
});

function filterImages(category) {
    const images = document.querySelectorAll('.sass-gallery img');
    
    images.forEach(image => {
        if (category === 'all' || image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
console.log(filterImages)