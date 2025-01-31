$(document).ready(function () {

const searchResults = JSON.parse(localStorage.getItem("searchResults")) || [];
const $resultsDiv = $("#results");

if (searchResults.length > 0) {
    searchResults.forEach(product => {
        console.log("Product",product);
        
        const productHTML = `
            <div class="card m-3 box" style="width: 18rem; " >
                <img src="${product.img}" class="card-img-top" alt="${product.name || 'unnamed product'}">
                <div class="card-body ">
                    <h4 class="card-title">${product.name || 'unnamed product'}</h4>
                    <p class="card-text">Price: ${product.price || 'N/A'}</p>
                    <p class="card-text">Rating: ${renderStars(product.stars || 0)}</p>
                    
                </div>
            </div>
        `;
        $resultsDiv.append(productHTML);
    });
} else {
    $resultsDiv.html("<p>No products found.</p>");
}

// Function to render star ratings
function renderStars(stars) {
    const fullStar = '<span class="text-warning">★</span>';
    const halfStar = '<span class="text-warning">☆</span>';
    const emptyStar = '<span class="text-secondary">★</span>';

    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(stars)) {
            starHTML += fullStar;
        } else if (i === Math.ceil(stars) && stars % 1 !== 0) {
            starHTML += halfStar;
        } else {
            starHTML += emptyStar;
        }
    }
    return starHTML;
}
});
