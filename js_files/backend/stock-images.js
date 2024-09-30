const stockImages = [
    { name: "Unsplash", link: "https://unsplash.com/", imgSrc: "images/icons/redirect-icon.svg" },
    { name: "Pexels", link: "https://www.pexels.com/", imgSrc: "images/icons/redirect-icon.svg" },
    { name: "Pixabay", link: "https://pixabay.com/", imgSrc: "images/icons/redirect-icon.svg" }
  ];
  
  const stockIcons = [
    { name: "Icons8", link: "https://icons8.com/", imgSrc: "images/icons/redirect-icon.svg" },
    { name: "Flaticon", link: "https://www.flaticon.com/", imgSrc: "images/icons/redirect-icon.svg" }
  ];
  
  const stockIllustrations = [
    { name: "Undraw", link: "https://undraw.co/illustrations", imgSrc: "images/icons/redirect-icon.svg" }
  ];
  

  function renderStockSections() {
    const stockMain = document.querySelector('.stock-main');
    const countStockImages = document.getElementById('all-stockimages-count');
    // Render stock images
    const stockImageSection = `
      <div class="stock-image-div">
        <p class="stock-title">Stock Images</p>
        <div class="stock-image-links">
          ${stockImages.map(stock => `
            <a target="_blank" href="${stock.link}">
              <img height="19px" src="${stock.imgSrc}" alt="${stock.name}" loading="lazy">
              <p>${stock.name}</p>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  
    // Render stock icons
    const stockIconSection = `
      <div class="stock-image-div">
        <p class="stock-icon-title">Stock Icons</p>
        <div class="stock-image-links">
          ${stockIcons.map(stock => `
            <a target="_blank" href="${stock.link}">
              <img height="19px" src="${stock.imgSrc}" alt="${stock.name}" loading="lazy">
              <p>${stock.name}</p>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  
    // Render stock illustrations
    const stockIllustrationSection = `
      <div class="stock-image-div">
        <p class="stock-icon-title">Stock Illustrations</p>
        <div class="stock-image-links">
          ${stockIllustrations.map(stock => `
            <a target="_blank" href="${stock.link}">
              <img height="19px" src="${stock.imgSrc}" alt="${stock.name}" loading="lazy">
              <p>${stock.name}</p>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  
    // Combine all sections
    stockMain.innerHTML = `
      ${stockImageSection}
      ${stockIconSection}
      ${stockIllustrationSection}
      <div class="stock-soon">
        <h1>Work in Progress...</h1>
      </div>
    `;
    countStockImages.textContent = `${stockImages.length}`;
  }
  
  // Call the function to render the stock sections
  renderStockSections();
  