/* Owl Carousel */
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1.9,
      },
      1000: {
        items: 2.9,
      },
    },
  });

  // Custom Button
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPreviousBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});




/*Banner Image Changing*/
const imageSources = [
  {
    id: 1,
    imageSrc: "./images/banner-person-1.png",
    text: "I’m applying for a",
    spanText: "PERSONAL LOAN.",
    normalText: "",
  },
  {
    id: 2,
    imageSrc: "./images/person-2.png",
    text: "I want to",
    spanText: "BUILD BUSINESS CREDIT",
    normalText: "using my SSN.",
  },
  {
    id: 3,
    imageSrc: "./images/person-3.png",
    text: "I need a credit card with a",
    spanText: "HIGH CREDIT LIMIT",
    normalText: "",
  },
  {
    id: 4,
    imageSrc: "./images/person-4.png",
    text: "I need a credit card with a",
    spanText: "HIGH CREDIT LIMIT",
    normalText: "",
  },
  {
    id: 5,
    imageSrc: "./images/person-5.png",
    text: "I just",
    spanText: "FINISHED SCHOOL",
    normalText: "and got my first job",
  },
  {
    id: 6,
    imageSrc: "./images/person-6.png",
    text: "I'm",
    spanText: "REGROUPING QUICKLY",
    normalText: "after the divorce",
  },
  // Add more objects for additional images and text
];

var currentIndex = 0;

function changeImage(index) {
  var image = document.getElementById("personImage");
  var personTile = document.getElementById("personTitle");
  var strongText = document.getElementById("personStrongText");
  var lastText = document.getElementById("lastText");
  var navStatus = document.getElementById("navStatus");
  var textContainer = document.getElementById("textClass");

  if (index !== undefined) {
    currentIndex = index;
  }

  image.src = imageSources[currentIndex].imageSrc;
  personTile.textContent = imageSources[currentIndex].text;
  strongText.textContent = imageSources[currentIndex].spanText;
  lastText.textContent = imageSources[currentIndex].normalText;
  navStatus.textContent = imageSources[currentIndex].id; // Update navigation status

  image.classList.add("w3-animate-zoom");
  textContainer.classList.add("w3-animate-left");

  setTimeout(function () {
    image.classList.remove("w3-animate-zoom");
    textContainer.classList.remove("w3-animate-left")
  }, 2000); //
}

document.getElementById("prevBtn").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  changeImage();
});

document.getElementById("nextBtn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % imageSources.length;
  changeImage();
});

// Initial image change
changeImage();

// Auto change image every 3 seconds
setInterval(function () {
  currentIndex = (currentIndex + 1) % imageSources.length;
  changeImage();
}, 3000);


/* Credit Today Section */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust the threshold as per your preference
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Gradually reveal the title and description
      document.querySelector('.credit-today-title').style.opacity = '1';
      document.querySelector('.credit-today-title').style.visibility = 'visible';
      document.querySelector('.credit-today-des').style.opacity = '1';
      document.querySelector('.credit-today-des').style.visibility = 'visible';

      // Start animating the cards with zoom-in effect one by one
      const cards = document.querySelectorAll('.credit-score-today-card');
      let delay = 0;
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.visibility = 'visible';
          card.classList.add('zoom-in-card');
        }, delay);
        delay += 300; // Adjust the delay time as per your preference
      });

      // Stop observing the section after animations start
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Start observing the section
const creditScoreTodaySection = document.getElementById('creditScoreToday');
observer.observe(creditScoreTodaySection);


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations when the section is in the viewport
function handleAnimations() {
  var section = document.getElementById('openAccountSection');
  var title = document.querySelector('.account-title');
  var desc = document.querySelector('.account-dec');
  var cards = document.querySelectorAll('.plan-card-container');

  if (isElementInViewport(section)) {
    // Add classes to animate the title and description
    title.classList.add('w3-animate-bottom');
    desc.classList.add('w3-animate-bottom');

    // Add classes to animate the cards one by one with a delay
    cards.forEach(function (card, index) {
      setTimeout(function () {
        card.classList.add('animated-card');
      }, index * 250); // Add a delay for each card
    });

    // Remove the event listener once the animations have played
    window.removeEventListener('scroll', handleAnimations);
  }
}

// Add event listener to trigger animations when the user scrolls
window.addEventListener('scroll', handleAnimations);



// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations for the new section
function handleAnimationsNewSection() {
  var section = document.getElementById('startWithMagnumAnimation');

  if (isElementInViewport(section)) {
    // Add class to animate the section with a slow fading animation
    section.classList.add('w3-animate-opacity-new');

    // Remove the event listener once the animation has played
    window.removeEventListener('scroll', handleAnimationsNewSection);
  }
}

// Add event listener to trigger animations when the user scrolls
window.addEventListener('scroll', handleAnimationsNewSection);



/* fico score Js */
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations for the ficoScoreSection
function handleAnimationsFicoSection() {
  var section = document.getElementById('ficoScoreSection');
  var innerDivs = document.querySelectorAll('.fico-title-sub-con, .fico-chart-container, .fico-list-container');

  if (isElementInViewport(section)) {
    // Add class to animate the section background zoom
    section.classList.add('animate-fico-zoom');

    // Trigger animations for inner divs with a delay
    innerDivs.forEach(function (div, index) {
      setTimeout(function () {
        div.classList.add('w3-animate-opacity');
      }, index * 250); // Add a delay for each div
    });

    // Remove the event listener once the animations have played
    window.removeEventListener('scroll', handleAnimationsFicoSection);
  }
}

// Add event listener to trigger animations when the user scrolls
window.addEventListener('scroll', handleAnimationsFicoSection);



/* Best Options JS */

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations for the bestOptionSection
function handleAnimationsBestOptionSection() {
  var section = document.getElementById('bestOptionSection');
  var optionsTitleContainer = document.getElementById('optionsTitleContainer');
  var optionOne = document.getElementById('optionOne');
  var optionTwo = document.getElementById('optionTwo');
  var optionThree = document.getElementById('optionThree');

  if (isElementInViewport(section)) {
    // Animate optionsTitleContainer from left to right
    optionsTitleContainer.classList.add('w3-animate-left');
    optionsTitleContainer.style.opacity = 1;

    // Animate optionOne from right to left with delay
    setTimeout(function () {
      optionOne.classList.add('w3-animate-right');
      optionOne.style.opacity = 1;
    }, 500);


    // Animate optionTwo from right to left with delay
    setTimeout(function () {
      optionTwo.classList.add('w3-animate-right');
      optionTwo.style.opacity = 1;
    }, 750);

    // Animate optionThree from right to left with delay
    setTimeout(function () {
      optionThree.classList.add('w3-animate-right');
      optionThree.style.opacity = 1;
    }, 3000);

    // Remove the event listener once the animations have played
    window.removeEventListener('scroll', handleAnimationsBestOptionSection);
  }
}

// Add event listener to trigger animations when the user scrolls
window.addEventListener('scroll', handleAnimationsBestOptionSection);




/* Why credit is important  */

// Function to add animation class when the element is in view
function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('w3-animate-bottom'); // Add animation class when in view
      observer.unobserve(entry.target); // Stop observing once animation is added
    }
  });
}

// Create an intersection observer for elements with class "animate-on-scroll"
const animateObserver = new IntersectionObserver(animateOnScroll, {
  threshold: 0.5 // Adjust this threshold based on your preference
});

// Get all elements with the class "animate-on-scroll" and observe them
const animateElements = document.querySelectorAll('.animate-on-scroll');
animateElements.forEach(element => {
  animateObserver.observe(element);
});

// Function to add animation class to "whyCreditVideoBg" when it is in view
function animateVideoOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById('whyCreditVideoBg').classList.add('w3-animate-top'); // Add animation class when in view
      observer.unobserve(entry.target); // Stop observing once animation is added
    }
  });
}

// Create an intersection observer for the element with ID "whyCreditVideoBg"
const videoBgObserver = new IntersectionObserver(animateVideoOnScroll, {
  threshold: 0.5 // Adjust this threshold based on your preference
});

// Observe the element with ID "whyCreditVideoBg"
videoBgObserver.observe(document.getElementById('whyCreditVideoBg'));



/* Magnum can help */
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle animations for the magnumCanHelp section
function handleAnimationsMagnumSection() {
  var titleContainer = document.querySelector('.magnum-help-title-container');
  var cards = document.querySelectorAll('.price-card-main-container');

  if (isElementInViewport(titleContainer)) {
    // Add class to animate the title container from the bottom
    titleContainer.classList.add('w3-animate-bottom');
  }

  // Check each card one by one and apply the animation with a delay
  var delay = 0;
  cards.forEach((card, index) => {
    if (isElementInViewport(card)) {
      setTimeout(function () {
        // Add class to animate the card with a slow fading animation
        card.classList.add('w3-animate-opacity-new');
      }, delay);
      delay += 500; // Adjust the delay time (in milliseconds) as per your preference
    }
  });
}

// Add event listener to trigger animations when the user scrolls
window.addEventListener('scroll', handleAnimationsMagnumSection);

// Initial check for animations when the page loads
handleAnimationsMagnumSection();





/* Magnum Help Toggel slide */
function openTab(evt, tabName) {
  // Get all tab elements and hide their line images
  const tabs = document.getElementsByClassName("tab-slider--tabs")[0].getElementsByTagName("li");
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.classList.remove("active");
  }

  // Show the line image of the selected tab
  evt.currentTarget.classList.add("active");
}

function tabbar_slider() {
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();

  $(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab2") {
      $('.tab-slider--tabs').addClass('slide');
    } else {
      $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
  });
}
tabbar_slider();


