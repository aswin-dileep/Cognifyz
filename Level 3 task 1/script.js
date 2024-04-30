function showImage(imageUrl) {
    const enlargedImage = document.getElementById('enlarged-img');
    enlargedImage.src = imageUrl;
    document.getElementById('enlarged-image').style.display = 'block';
}

function hideImage() {
    document.getElementById('enlarged-image').style.display = 'none';
}


let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); 
}