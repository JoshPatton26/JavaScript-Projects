let reviews = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      img: "images/person-2.jpg",
      text: "I've been using this service for a few months now, and I have to say, it's made a significant impact on my workflow. The tools provided are incredibly useful for analyzing data and generating insights. What sets this platform apart is its user-friendly interface and robust features. It's streamlined my analytical processes and allowed me to focus more on deriving actionable insights from the data rather than getting bogged down in technical details. Highly recommend it to anyone in need of powerful data analytics tools!",
    },
    {
      id: 2,
      name: "James Smith",
      job: "Marketing Manager",
      img: "images/person-3.jpg",
      text: "I'm impressed with the quality of customer support. Quick response and very helpful.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      job: "Graphic Designer",
      img: "images/person-4.jpeg",
      text: "I absolutely love the design aesthetics of this product. It's visually stunning and makes a strong impression. The attention to detail is remarkable, and it's clear that a lot of thought went into crafting the user experience. As a graphic designer, I can appreciate the effort put into every aspect of the design. Kudos to the team!",
    },
    {
      id: 4,
      name: "Michelle Brown",
      job: "Teacher",
      img: "images/person-5.jpg",
      text: "This platform has completely transformed the way I manage my tasks and projects. The organization features are top-notch, allowing me to prioritize effectively and stay on track with deadlines. The collaboration tools have been a game-changer for my team, facilitating seamless communication and task delegation. I'm impressed by the level of customization available, which enables me to tailor the platform to suit my specific workflow needs. Overall, it's a lifesaver for anyone looking to boost productivity and streamline project management processes.",
    },
    {
      id: 5,
      name: "Emily White",
      job: "Content Creator",
      img: "images/person-6.jpeg",
      text: "Wow, I'm blown away by the content quality on this platform! As a content creator myself, I understand the challenges of creating engaging and informative content, but this site nails it. The articles are well-researched, the videos are professionally produced, and the overall presentation is top-notch. It's evident that the creators are passionate about their work and committed to delivering value to their audience. Keep up the fantastic work!",
    },
    {
      id: 6,
      name: "Debra Lee",
      job: "Business Analyst",
      img: "images/person-7.jpeg",
      text: "Excellent service! The product exceeded my expectations.",
    }
  ];

// Select Items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// Set starting item
let curItem = 0;

function displayReview (index) {
  const item = reviews[index]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  displayReview(curItem)
});

function updateReview() {
  displayReview(curItem)
}

function prevReview() {
  curItem = (curItem - 1 + reviews.length) % reviews.length;
  updateReview()
}

function nextReview() {
  curItem = (curItem + 1) % reviews.length;
  updateReview()
}

function randomReview() {
  const rand = Math.floor(Math.random() * reviews.length);
  curItem = rand
  updateReview()
}