const courses = [
    {
      image: "images/Coming-Soon.jpg",
      title: "Login-Page Full tutorial",
      description: "Login-Page full tutorial for beginners in a simple way and easy to understand",
      price: "Paid",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "Login-Page Full tutorial",
      description: "Login-Page full tutorial for beginners in a simple way and easy to understand",
      price: "Paid",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "Login-Page Full tutorial",
      description: "Login-Page full tutorial for beginners in a simple way and easy to understand",
      price: "Free",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "Login-Page Full tutorial",
      description: "Login-Page full tutorial for beginners in a simple way and easy to understand",
      price: "Free",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "Login-Page Full tutorial",
      description: "Login-Page full tutorial for beginners in a simple way and easy to understand",
      price: "Free",
      link: ""
    }
  ];

  function renderCourses() {
    const container = document.querySelector('.all-cource-container');
    const countParagraph = document.getElementById('all-cource-count');
  
    // Render courses
    container.innerHTML = courses.map(course => `
      <div class="cource-container">
        <div class="cource-img">
          <img src="${course.image}" height="100px" loading="lazy" alt="Coming Soon">
        </div>
        <div class="cource-elements">
          <div class="cource-title">
            <p>${course.title}</p>
          </div>
          <div class="cource-paragraph">
            <p>${course.description}</p>
          </div>
          <div class="cource-details">
            <button>${course.price}</button>
            <a href="${course.link}">
              ${course.price === 'Free' ? 'Watch Now' : 'Enroll Now'}
              <img height="16px" src="${course.price === 'Free' ? 'images/youtube_logo.2165aab9.svg' : 'images/play_icon.157ba63a.png'}" alt="${course.price === 'Free' ? 'YouTube Logo' : 'Play Icon'}" loading="lazy">
            </a>
          </div>
        </div>
      </div>
    `).join('');
  
    countParagraph.textContent = `${courses.length}`;
  }
  
  // Call the function to render the courses and update the count
  renderCourses();
  