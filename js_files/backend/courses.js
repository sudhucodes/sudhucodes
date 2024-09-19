const courses = [
    {
      image: "images/Coming-Soon.jpg",
      title: "Web Development Bootcamp",
      description: "Learn web development basics, including HTML, CSS, and JavaScript, to build responsive websites.",
      price: "Free",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "Frontend Dev with React",
      description: "Master React.js by building dynamic single-page applications with state management and hooks.",
      price: "Paid",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "JavaScript Complete Guide",
      description: "Understand JavaScript from the ground up, including functions, closures, and async programming.",
      price: "Paid",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "HTML/CSS Zero to Hero",
      description: "A beginner's guide to HTML and CSS, teaching you how to create modern and responsive websites.",
      price: "Free",
      link: ""
    },
    {
      image: "images/Coming-Soon.jpg",
      title: "React JS from Basic to Advanced",
      description: "Learn the core concepts of React, including components, state, and API integration for real projects.",
      price: "Paid",
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
  