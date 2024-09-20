// Array of star data
const stars = [
    { imgSrc: 'images/sudhanshu_img_logo.png', name: 'Sudhanshu Kumar', project: 'E-Commerce Website', profileLink: 'https://www.instagram.com/ig__sudhanshu__/', rating: 3 },
    { imgSrc: 'images/User_img.jpeg', name: 'Aman Kumar', project: 'Portfolio Website', profileLink: 'https://www.instagram.com/_its.aman04/', rating: 4 }
];
function renderStars(filteredStars) {
    const container = document.querySelector('.stars-container');
    const starsHtml = filteredStars.map(star => {
        const ratingStars = Array(star.rating).fill('<img src="images/star-emoji-icon.svg" alt="Star">').join('');

        return `
            <div class="star">
                <div class="star-profile">
                    <div class="star-profile-link">
                    <a target="_blank" href="${star.profileLink}">Profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <img class="star-image" src="${star.imgSrc}" alt="${star.name}">
                    <div class="star-rating">
                        ${ratingStars}
                    </div>
                </div>
                <p class="starName">${star.name}</p>
                <p class="starProject">${star.project}</p>
            </div>
        `;
    }).join('');
    container.innerHTML = starsHtml;
}

function handleSearch() {
    const searchInput = document.getElementById('stars-search-input');
    const query = searchInput.value.toLowerCase();
    const filteredStars = stars.filter(star => star.name.toLowerCase().includes(query));

    renderStars(filteredStars);
}

document.getElementById('stars-search-input').addEventListener('input', handleSearch);

renderStars(stars);
