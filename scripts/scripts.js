// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Engagement Feed
const engagementFeed = document.getElementById('engagementFeed');
const sampleEngagementPosts = [
  {name:'Jane D.', img:'images/', caption:'Loved the starter!'},
  {name:'Mike P.', img:'images/', caption:'Best mains in Sandton!'}
];
sampleEngagementPosts.forEach(postData => {
  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `<strong>${postData.name}</strong><p>${postData.caption}</p><img src="${postData.img}" alt="Customer Post">`;
  engagementFeed.appendChild(post);
});

// Hall of Food Fame
const foodFameFeed = document.getElementById('foodFameFeed');
const sampleFamePosts = [
  {name:'Alice M.', img:'placeholder-foodfame1.jpg', likes:12},
  {name:'Tom R.', img:'placeholder-foodfame2.jpg', likes:30}
];
sampleFamePosts.forEach(postData => {
  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `
    <img src="${postData.img}" alt="Food Fame">
    <p>${postData.name}</p>
    <button class="likeBtn">❤️ ${postData.likes}</button>
  `;
  foodFameFeed.appendChild(post);
});

// Like button functionality
foodFameFeed.addEventListener('click', (e) => {
  if(e.target.classList.contains('likeBtn')){
    let current = parseInt(e.target.textContent.split(' ')[1]);
    current++;
    e.target.textContent = `❤️ ${current}`;
  }
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
const bookingConfirmation = document.getElementById('bookingConfirmation');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('bookingName').value;
  bookingConfirmation.innerHTML = `<p>Thank you ${name}, your table has been booked!</p>`;
  bookingForm.reset();
});
