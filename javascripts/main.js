var testimonials = [
  {
    name: 'Bangaly Kaba',
    title: 'Head of Growth at Instagram',
    body: '"I loved it and am so happy that I participated. This program gave me a ton of important insight and networking opportunities to move forward my career as an angel investor."',
    imageSource: 'img/people/bk.jpg'
  },
  {
    name: 'Mandela Schumacher-Hodge Dixon',
    title: 'Founder at FounderGym',
    body: '"When I think about the First Round Angel Track program, one word comes to mind: intentional. I felt like they truly took the time to understand who we were as individuals and what it means to be an angel investor. In a world full of one-size-fits-all products and programming, it was truly refreshing to participate in a more intimate, personalized experience."',
    imageSource: 'img/people/md.jpg'
  },
  {
    name: 'Brian Rothenberg',
    title: 'VP & General Manager of Eventbrite’s Self Service Business and Product',
    body: '"Foundational in my learning and development as an early-stage investor. Incredible mentorship. One of the most amazingly talented, diverse, and fun groups of people I have ever had the opportunity to work with and learn from. And it doesn’t end with the last session -- this is an invaluable group we will all continue to benefit from, and more importantly, work together to give back to the startup community through."',
    imageSource: 'img/people/br.jpg'
  },
  {
    name: 'Yardley Ip',
    title: 'Chief Product Officer at Thrive Global',
    body: '"First Round Angel Track class gave me the necessary insights from long-time investors to make sound investment decisions, and more importantly, help me find my own investment style and ways to help founders. On top of that, I now have a community of operators who are not only people I can count on to co-invest together, but also friends."',
    imageSource: 'img/people/yi.jpg'
  }
];

var guides = [
  {
    name: 'Ann Miura-Ko',
    title: 'Partner at Floodgate',
    bio: 'Ann has been called “the most powerful woman in startups” by Forbes and is a lecturer in entrepreneurship at Stanford. The child of a rocket scientist at NASA, Ann is a Palo Alto native and has been steeped in technology startups from when she was a teenager. Prior to co-founding FLOODGATE, she worked at Charles River Ventures and McKinsey & Co.',
    imageSource: 'img/people/amk.jpg'
  },
  {
    name: 'Charles Hudson',
    title: 'Managing Partner at Precursor Ventures',
    bio: 'Charles is the Managing Partner and Founder of Precursor Ventures, an early­ stage venture capital firm focused on investing in the first institutional round of investment for the most promising software and hardware companies.',
    imageSource: 'img/people/ch.jpg'
  },
  {
    name: 'Elad Gil',
    title: 'Angel Investor and Co-Founder at Color Genomics',
    bio: 'Elad is a serial entrepreneur, operating executive, author and investor or advisor to private companies such as Airbnb, Coinbase, Gusto, Instacart, Optimizely, Pinterest, Square, Stripe, Wish. He is currently the Co-Founder and Chairman of Color, a digital health company focused on democratizing access to genetics and preventative health.',
    imageSource: 'img/people/eg.jpg'
  },
  {
    name: 'Keith Rabois',
    title: 'Partner at Khosla Ventures and Co-Founder at Opendoor',
    bio: 'Keith has a unique background as an entrepreneurial executive and investor. Since 2000, he has been instrumental in driving five startups from their early stages to successful IPOs. He has provided seed capital to another ten companies that are currently valued at over $1 B, including Airbnb, Lyft, YouTube, Wish, and Yammer.',
    imageSource: 'img/people/kr.jpg'
  },
  {
    name: 'Jana Messerschmidt',
    title: 'Co-Founder #Angels',
    bio: 'Jana was formerly the Vice President of Global Business Development and Platform at Twitter. She was responsible for partnerships at Twitter, including business development, enterprise sales, developer relations, partner engineering, platform operations, as well as platform marketing and strategy. Prior to joining Twitter in 2010, Jana was director of business development at Netflix, where she focused on mobile and consumer electronics partnerships.',
    imageSource: 'img/people/jm.jpg'
  },
  {
    name: 'Alfred Lin',
    title: 'Partner at Sequoia',
    bio: 'Alfred is a Partner at Sequoia Capital and works with inspiring founders focused on disrupting the mobile, marketplace, commerce, consumer services, and online-to-offline sectors. He currently represents Sequoia on the boards of Airbnb, Dia, DoorDash, Houzz, Stella & Dot, and Zipline and was previously on the Board of Achievers, FutureAdvisor, Humble Bundle, and Shopular (Ebates/Rakuten).',
    imageSource: 'img/people/al.jpg'
  },
  {
    name: 'Jessica Verrilli',
    title: 'General Partner at GV, Co-Founder #Angels',
    bio: "Jessica was the VP of Corporate Development and Strategy at Twitter where she led the company's consumer focused M&A and strategy efforts. Over her 7 year+ tenure she led 20+ acquisitions and drove key strategic initiatives for the company. She also currently serves on the Board of Trustees of the Golden Gate National Parks Conservancy.",
    imageSource: 'img/people/jv.jpg'
  },
  {
    name: 'Megan Quinn',
    title: 'General Partner at Spark Capital',
    bio: 'Megan is a General Partner at Spark Capital, focusing on growth investments. She specializes in working with world-changing entrepreneurs to design, build and scale transformative consumer products and companies.',
    imageSource: 'img/people/mq.jpg'
  },
  {
    name: 'Rob Hayes',
    title: 'Partner at First Round',
    bio: 'Rob joined First Round as a partner in 2006, opening up the firm’s San Francisco office. Over the past ten years, he has led investments in companies such as Mint (acquired by Intuit), GNIP (acquired by Twitter), Square, Uber and Planet Labs. Rob invests across categories, with his interests spanning financial tech, the sharing economy, meal delivery, and consumer hardware.',
    imageSource: 'img/people/rh.jpg'
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
  document.getElementById("testimonial-body").textContent = testimonial.body;
  document.getElementById("testimonial-name").textContent = testimonial.name;
  document.getElementById("testimonial-title").textContent = testimonial.title;
  document.getElementById("testimonial-title").textContent = testimonial.title;
  document.getElementById("testimonial-image").src = testimonial.imageSource;
};

var setGuide = function(guide) {
  document.getElementById("guide-bio").textContent = guide.bio;
  document.getElementById("guide-name").textContent = guide.name;
  document.getElementById("guide-title").textContent = guide.title;
  document.getElementById("guide-image").src = guide.imageSource;
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
  } else if (carousel == 'guide') {
    setButtonDisabledStatuses('guide-small', counter, carouselOptions.length - 1);
    setGuide(nextOption);
  }
}

window.addEventListener('load',function() {
  setTestimonial(testimonials[state.counters.testimonial]);
  setGuide(guides[state.counters.guide]);
  setButtonDisabledStatuses("testimonial", state.counters.testimonial, testimonials.length - 1)
  setButtonDisabledStatuses("guide", state.counters.guide, guides.length - 1)
  setButtonDisabledStatuses("guide-small", state.counters.guide, guides.length - 1)

  document.getElementById("next-testimonial").addEventListener("click", function() {
    changeCarousel('testimonial', 1, testimonials);
  });

  document.getElementById("previous-testimonial").addEventListener("click", function() {
    changeCarousel('testimonial', -1, testimonials);
  });

  document.getElementById("next-guide").addEventListener("click", function() {
    changeCarousel('guide', 1, guides);
  });

  document.getElementById("previous-guide").addEventListener("click", function() {
    changeCarousel('guide', -1, guides);
  });

  document.getElementById("next-guide-small").addEventListener("click", function() {
    changeCarousel('guide', 1, guides);
  });

  document.getElementById("previous-guide-small").addEventListener("click", function() {
    changeCarousel('guide', -1, guides);
  });
});
