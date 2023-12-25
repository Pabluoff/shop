document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

const reviewSections = document.querySelectorAll('.customer-review');

reviewSections.forEach(review => {
    const likeBtn = review.querySelector('.like-btn');
    const dislikeBtn = review.querySelector('.dislike-btn');

    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active-like');
        dislikeBtn.classList.remove('active-dislike');
    });

    dislikeBtn.addEventListener('click', () => {
        dislikeBtn.classList.toggle('active-dislike');
        likeBtn.classList.remove('active-like');
    });
});
