var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();
var img8 = new Image();

img1.src = 'img/people/RK.png';
img2.src = 'img/people/KJ.png';
img3.src = 'img/people/SK.png';
img4.src = 'img/people/JT.png';
img5.src = 'img/people/MK.png';
img6.src = 'img/people/CH.png';
img7.src = 'img/people/JR.jpg';
img8.src = 'img/people/more.png';

var testimonials = [
  {
    name: 'Richard Kerby',
    title: 'Partner at Equal Ventures',
    imageSource: 'img/people/RK.png'
  },
  {
    name: 'KJ Miller',
    title: 'Founder at Mented',
    imageSource: 'img/people/KJ.png'
  },
  {
    name: 'Sam Ku',
    title: 'Startup Lawyer at Cooley',
    imageSource: 'img/people/SK.png'
  },
  {
    name: 'Jorge Torres',
    title: 'Managing Director at HBCU.vc',
    imageSource: 'img/people/JT.png'
  },
  {
    name: 'Michelle Korchinski-Ogden',
    title: 'Marketing at Gwynnie Bee',
    imageSource: 'img/people/MK.png'
  },
  {
    name: 'Chieh Huang',
    title: 'CEO of Boxed',
    imageSource: 'img/people/CH.png'
  },
  {
    name: 'Jackie Ros',
    title: 'Regional Director, Americas at Techstars',
    imageSource: 'img/people/JR.jpg'
  },
  {
    name: 'More Speakers To Be Announced!',
    imageSource: 'img/people/more.png'
  }
];

// Counters to store which testimonial and guide is currently visible.
var state = {
  counters: {
    testimonial: 0,
    guide: 0
  }
}

var setTestimonial = function(testimonial) {
  document.getElementById("testimonial-name").textContent = testimonial.name;
  document.getElementById("testimonial-title").textContent = testimonial.title;
  document.getElementById("testimonial-title").textContent = testimonial.title;
  document.getElementById("testimonial-image").src = testimonial.imageSource;
};

var setButtonDisabledStatus = function(buttonSelector, disabled) {
  var button = document.querySelector(buttonSelector);
  if (!button) {
    debugger;
  }
  button.disabled = disabled;
}

var setButtonDisabledStatuses = function(carousel, current, limit) {
  var previousButtonSelector = '#previous-' + carousel;
  var nextButtonSelector = '#next-' + carousel;

  if (current == 0) {
    setButtonDisabledStatus(previousButtonSelector, true);
  } else if (current == limit) {
    setButtonDisabledStatus(nextButtonSelector, true);
  } else {
    setButtonDisabledStatus(previousButtonSelector, false);
    setButtonDisabledStatus(nextButtonSelector, false);
  }
};

var changeCarousel = function(carousel, delta, carouselOptions) {
  state.counters[carousel] = state.counters[carousel] + delta;
  var counter = state.counters[carousel];
  setButtonDisabledStatuses(carousel, counter, carouselOptions.length - 1)
  nextOption = carouselOptions[counter];

  if (carousel == 'testimonial') {
    setTestimonial(nextOption);
  }
}

window.addEventListener('load',function() {
  setTestimonial(testimonials[state.counters.testimonial]);
  setButtonDisabledStatuses("testimonial", state.counters.testimonial, testimonials.length - 1);

  document.getElementById("next-testimonial").addEventListener("click", function() {
    changeCarousel('testimonial', 1, testimonials);
  });

  document.getElementById("previous-testimonial").addEventListener("click", function() {
    changeCarousel('testimonial', -1, testimonials);
  });
});
