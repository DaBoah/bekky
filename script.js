const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0; 
const totalImages = images.length;


const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);


track.style.transform = `translateX(-100vw)`;


function moveCarousel() {
    currentIndex++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;


    track.addEventListener('transitionend', () => {
        if (currentIndex === totalImages) {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(-${currentIndex * 100}vw)`;
        } else if (currentIndex === -1) {
            track.style.transition = 'none';
            currentIndex = totalImages - 1;
            track.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }
    });
}


setInterval(moveCarousel, 3000);
