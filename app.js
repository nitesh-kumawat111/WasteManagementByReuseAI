// ReUse AI - Enhanced with YouTube Video Integration

// ============================
// VIDEO CONFIGURATION SECTION
// ============================
// Update these URLs to change videos across the platform
const VIDEO_CONFIG = {
  plasticBottlePlanters: "https://www.youtube.com/watch?v=Tzi_uTNT9_E",
  selfWateringSystem: "https://www.youtube.com/watch?v=FORrE5dB2gc", 
  birdFeederCreation: "https://www.youtube.com/watch?v=FORrE5dB2gc",
  wasteplywoodsheets: "https://www.youtube.com/watch?v=Ld17eYQfePs",
  ScrapWoodIdeas: "https://www.youtube.com/watch?v=ARnTE_mL2N0",
   CutAGlassBottle: "https://www.youtube.com/watch?v=UZqbnPxSm1o",
     TurnWasteintoWonder: "https://www.youtube.com/watch?v=6lhO4wXwZSw",
      TurnWasteintoWonder: "https://www.youtube.com/watch?v=6lhO4wXwZSw",
       TurnWasteintoWonder: "https://www.youtube.com/watch?v=6lhO4wXwZSw",
        TurnWasteintoWonder: "https://www.youtube.com/watch?v=6lhO4wXwZSw",

  // Tutorial videos - using working DIY tutorial URLs
  basicUpcycling: "https://www.youtube.com/watch?v=Nulpilk4WYw",
  paintFinish: "https://www.youtube.com/watch?v=ohRLQQwqvN4",
  advancedWoodworking: "https://www.youtube.com/watch?v=6rQqD7L8wNI"
};

// Application Data with Enhanced Video Support

const appData = {
  "videoConfig": {
    "plasticBottlePlanters": {
      "url": VIDEO_CONFIG.plasticBottlePlanters,
      "title": " Plastic Bottle torch",
      "duration": "4:35",
      "views": "15.2K"
    },
    "selfWateringSystem": {
      "url": VIDEO_CONFIG.selfWateringSystem,
      "title": "Self-Watering Bottle System",
      "duration": "4:12",
      "views": "23.1K"
    },
    "birdFeederCreation": {
      "url": VIDEO_CONFIG.birdFeederCreation,
      "title": "Bottle Bird Feeder DIY",
      "duration": "3:45", 
      "views": "31.7K"
    },
     "ScrapWoodIdeas": {
      "url": VIDEO_CONFIG.ScrapWoodIdeas,
      "title": "Scrap Wood  DIY",
      "duration": "3:45", 
      "views": "31.7K"
    },
     "CutAGlassBottle": {
      "url": VIDEO_CONFIG.CutAGlassBottle,
      "title": "Scrap Wood  DIY",
      "duration": "3:45", 
      "views": "31.7K"
    },
    "TurnWasteintoWonder": {
      "url": VIDEO_CONFIG.TurnWasteintoWonder,
      "title": "Scrap Wood  DIY",
      "duration": "3:45", 
      "views": "31.7K"
    },
    "wasteplywoodsheets": {
      "url": VIDEO_CONFIG.wasteplywoodsheets,
      "title": "Storage Container from Bottles",
      "duration": "5:20",
      "views": "18.9K"
    }

  },
  "reuseIdeas": [
    {
      "id": 1,
      "title": "Scrap Wood  DIY",
      "difficulty": "Easy",
      "time": "< 1hr",
      "materials": ["Plastic bottles", "Soil", "Seeds", "Paint"],
      "description": "Transform plastic bottles into beautiful plastic bottle torch with this step-by-step video tutorial",
      "steps": ["Cut bottle in half", "Drill drainage holes", "Paint exterior", "Add soil and plants"],
      "impact": "Saves 0.5kg from landfill",
      "videoKey": "plasticBottlePlanters",
      "hasVideo": true,
      "instructor": "EcoSarah",
      "rating": 4.8,
      "tags": ["light", "torch", "easy", "beginner"]
    },
    
     {
      "id": 1,
      "title": "Plastic Bottle Torch",
      "difficulty": "Easy",
      "time": "< 1hr",
      "materials": ["Plastic bottles", "Soil", "Seeds", "Paint"],
      "description": "Transform plastic bottles into beautiful plastic bottle torch with this step-by-step video tutorial",
      "steps": ["Cut bottle in half", "Drill drainage holes", "Paint exterior", "Add soil and plants"],
      "impact": "Saves 0.5kg from landfill",
      "videoKey": "ScrapWoodIdeas",
      "hasVideo": true,
      "instructor": "EcoSarah",
      "rating": 4.8,
      "tags": ["light", "torch", "easy", "beginner"]
    },
    {
      "id": 3,
      "title": "Cardboard Boxes to Cupboard Organiser",
      "difficulty": "Easy",
      "time": "< 1hr", 
      "materials": ["Plastic bottles", "Wooden spoons", "Birdseed", "String"],
      "description": "Build a sustainable bird feeder from plastic bottles in under an hour",
      "steps": ["Cut feeding holes", "Insert perches", "Fill with seed", "Hang securely"],
      "impact": "Saves 0.4kg from landfill",
      "videoKey": "birdFeederCreation",
      "hasVideo": true,
      "instructor": "RecycleRita", 
      "rating": 4.7,
      "tags": ["birds", "wildlife", "easy", "outdoor"]
    },
    
    {
      "id": 5,
      "title": "waste plywood sheets reuse idea",
      "difficulty": "Medium",
      "time": "< 1hr", 
      "materials": ["Plastic bottles", "Wooden spoons", "Birdseed", "String"],
      "description": "Build a sustainable bird feeder from plastic bottles in under an hour",
      "steps": ["Cut feeding holes", "Insert perches", "Fill with seed", "Hang securely"],
      "impact": "Saves 0.4kg from landfill",
      "videoKey": "wasteplywoodsheets",
      "hasVideo": true,
      "instructor": "RecycleRita", 
      "rating": 4.7,
      "tags": ["birds", "wildlife", "easy", "outdoor"]
    },
     {
      "id": 6,
      "title": "Cut A Glass Bottle With A Simple Tool!",
      "difficulty": "Hard",
      "time": "3+",
      "materials": ["Plastic bottles", "Soil", "Seeds", "Paint"],
      "description": "Transform plastic bottles into beautiful plastic bottle torch with this step-by-step video tutorial",
      "steps": ["Cut bottle in half", "Drill drainage holes", "Paint exterior", "Add soil and plants"],
      "impact": "Saves 0.5kg from landfill",
      "videoKey": "CutAGlassBottle",
      "hasVideo": true,
      "instructor": "EcoSarah",
      "rating": 4.8,
      "tags": ["light", "torch", "easy", "beginner"]
    },
    {
      "id": 7,
      "title": "Turn Waste into Wonder ♻️ Beautiful Crafts from Plastic Bottles",
      "difficulty": "Medium", 
      "time": "1-3hrs",
      "materials": ["Plastic bottles", "String", "Scissors", "Water"],
      "description": "Create an big Plate  using plastic bottles",
      "steps": ["Cut bottle cap", "Thread string through", "Position in soil", "Fill with water"],
      "impact": "Saves 0.8kg from landfill",
      "videoKey": "TurnWasteintoWonder",
      "hasVideo": true,
      "instructor": "GreenMike",
      "rating": 4.9,
      "tags": ["plate", "bowl", "intermediate", "decoration"]
    }
  ],


  "communityProjects": [
    {
      "id": 1,
      "title": "Basic Upcycling Techniques",
      "user": "EcoSarah",
      "likes": 127,
      "comments": 23,
      "beforeImage": "☕",
      "afterImage": "",
      "description": "Turned old coffee cans into bird feeders for my backyard!",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.basicUpcycling,
      "videoDuration": "2:15"
    },
    {
      "id": 2,
      "title": "Basic Upcycling Techniques",
      "user": "GreenMike",
      "likes": 89,
      "comments": 15,
      "beforeImage": "👖",
      "afterImage": "🗂️", 
      "description": "Used old jeans pockets to create a wall organizer",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.basicUpcycling, 
      "videoDuration": "3:30"
    },
    {
      "id": 3,
      "title": "Basic Upcycling Techniques",
      "user": "RecycleRita",
      "likes": 156,
      "comments": 31,
      "beforeImage": "🍷",
      "afterImage": "☕",
      "description": "Collected wine corks and made beautiful coasters",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.basicUpcycling, 
      "videoDuration": "3:30"
    }
  ],
  "tutorials": [
    {
      "id": 1,
      "title": "Basic Upcycling Techniques",
      "category": "Beginner",
      "readTime": "5 min",
      "image": "🔨",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.basicUpcycling,
      "videoDuration": "6:30",
      "instructor": "EcoSarah"
    },
    {
      "id": 2,
      "title": "Paint and Finish Options", 
      "category": "Intermediate",
      "readTime": "8 min",
      "image": "🎨",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.paintFinish,
      "videoDuration": "9:15",
      "instructor": "GreenMike"
    },
    {
      "id": 3,
      "title": "Advanced Woodworking Reuse",
      "category": "Advanced",
      "readTime": "15 min",
      "image": "🪚",
      "hasVideo": true,
      "youtubeUrl": VIDEO_CONFIG.advancedWoodworking,
      "videoDuration": "18:45",
      "instructor": "RecycleRita"
    }
  ],
  "userAccounts": [
    {
      "id": 1,
      "email": "nitesh@example.com",
      "password": "123",
      "fullName": "Nitesh Kumawat",
      "avatar": "👩‍🌾",
      "joinDate": "2025-01-15",
      "itemsReused": 47,
      "wasteSaved": 23.4,
      "points": 1250,
      "badges": ["Eco Warrior", "Recycling Master", "Community Helper"],
      "level": "Green Guru",
      "videosWatched": 23,
      "favoriteVideos": [1, 2, 3],
      "watchHistory": [
        {"videoId": 1, "watchedAt": "2025-01-20", "completed": true},
        {"videoId": 2, "watchedAt": "2025-01-21", "completed": false}
      ]
    },
    {
      "id": 2,
      "email": "admin@reuse.ai",
      "password": "admin2025",
      "fullName": "Admin User",
      "avatar": "👨‍💼", 
      "joinDate": "2025-01-01",
      "itemsReused": 100,
      "wasteSaved": 50.0,
      "points": 2500,
      "badges": ["Sustainability Champion", "Eco Warrior", "Community Leader", "Recycling Master"],
      "level": "Eco Legend",
      "videosWatched": 50,
      "favoriteVideos": [1, 2, 3, 4],
      "isAdmin": true
    }
  ],
  "leaderboard": [
    {"name": "Admin User", "points": 2500, "badge": "Eco Legend", "videosWatched": 50},
    {"name": "EcoSarah", "points": 2450, "badge": "Sustainability Champion", "videosWatched": 23},
    {"name": "GreenMike", "points": 1987, "badge": "Eco Warrior", "videosWatched": 15},
    {"name": "RecycleRita", "points": 1654, "badge": "Reuse Master", "videosWatched": 28},
    {"name": "SustainableSam", "points": 1432, "badge": "Green Guardian", "videosWatched": 19}
  ]
};

// ============================
// YOUTUBE VIDEO UTILITIES
// ============================
function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function getYoutubeThumbnail(videoUrl, quality = 'maxresdefault') {
  const videoId = extractVideoId(videoUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function getYoutubeEmbedUrl(videoUrl) {
  const videoId = extractVideoId(videoUrl);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`;
}

function isValidYoutubeUrl(url) {
  return extractVideoId(url) !== null;
}

// State Management
let currentPage = 'home';
let currentTheme = 'light';
let analysisProgress = 0;
let selectedFilters = {
  difficulty: ['Easy', 'Medium', 'Hard'],
  time: ['< 1hr', '1-3hrs', '3+ hrs']
};

// Authentication State
let isSignedIn = false;
let currentUser = null;
let userFavoriteVideos = [];

// Global Navigation Function
function navigateToPage(pageId) {
  console.log('Navigating to page:', pageId);
  
  // Update active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const activeLink = document.querySelector(`[href="#${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  // Show target page
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    console.log('Successfully navigated to:', pageId);
    
    // Load page-specific content
    if (pageId === 'community') {
      loadCommunityProjects();
    } else if (pageId === 'results') {
      loadReuseIdeas();
    } else if (pageId === 'tutorials') {
      loadTutorials();
    } else if (pageId === 'profile') {
      loadUserProfile();
    } else if (pageId === 'admin' && currentUser && currentUser.isAdmin) {
      loadAdminPanel();
    }
  } else {
    console.warn('Page not found:', pageId);
  }
}

// Authentication Functions
function showSignInModal() {
  const modal = document.getElementById('authModal');
  showModal(modal);
}

function handleSignIn(email, password) {
  const user = appData.userAccounts.find(u => u.email === email && u.password === password);
  if (user) {
    isSignedIn = true;
    currentUser = user;
    userFavoriteVideos = user.favoriteVideos || [];
    
    // Update UI
    updateAuthUI();
    showNotification(`Welcome back, ${user.fullName}!`, 'success');
    closeModal();
    
    // Add admin button if user is admin
    if (user.isAdmin) {
      addAdminButton();
    }
    
    return true;
  } else {
    showNotification('Invalid credentials. Try admin@reuse.ai / admin2025', 'error');
    return false;
  }
}

function updateAuthUI() {
  const signInBtn = document.querySelector('.header-actions .btn');
  if (signInBtn && currentUser) {
    signInBtn.textContent = currentUser.fullName;
    signInBtn.onclick = () => navigateToPage('profile');
  }
}

function addAdminButton() {
  if (document.getElementById('adminBtn')) return; // Already exists
  
  const headerActions = document.querySelector('.header-actions');
  const adminBtn = document.createElement('button');
  adminBtn.id = 'adminBtn';
  adminBtn.className = 'btn btn--secondary btn--sm';
  adminBtn.innerHTML = '<i class="fas fa-cog"></i> Admin';
  adminBtn.onclick = () => navigateToPage('admin');
  
  headerActions.insertBefore(adminBtn, headerActions.lastElementChild);
}

// Global Sample Item Processing Function
function processSampleItem(itemType) {
  console.log('Processing sample item:', itemType);
  startAnalysis(itemType);
}

// Analysis Functions
function startAnalysis(itemType = 'plastic-bottle') {
  console.log('Starting analysis for:', itemType);
  navigateToPage('analysis');
  analysisProgress = 0;
  
  const progressText = document.querySelector('.progress-text');
  const steps = document.querySelectorAll('.step');
  
  // Reset steps
  steps.forEach(step => step.classList.remove('active'));
  if (steps.length > 0) {
    steps[0].classList.add('active');
  }
  
  const analysisInterval = setInterval(() => {
    analysisProgress += Math.random() * 15 + 5;
    
    if (analysisProgress >= 100) {
      analysisProgress = 100;
      clearInterval(analysisInterval);
      
      setTimeout(() => {
        showResults(itemType);
      }, 1000);
    }
    
    if (progressText) {
      progressText.textContent = Math.round(analysisProgress) + '%';
    }
    
    // Activate steps based on progress
    if (analysisProgress > 25 && steps.length > 1 && !steps[1].classList.contains('active')) {
      steps[0].classList.remove('active');
      steps[1].classList.add('active');
    }
    if (analysisProgress > 50 && steps.length > 2 && !steps[2].classList.contains('active')) {
      steps[1].classList.remove('active');
      steps[2].classList.add('active');
    }
    if (analysisProgress > 75 && steps.length > 3 && !steps[3].classList.contains('active')) {
      steps[2].classList.remove('active');
      steps[3].classList.add('active');
    }
    
  }, 200);
}

function showResults(itemType) {
  console.log('Showing results for:', itemType);
  navigateToPage('results');
  
  // Update detected item info
  const itemMap = {
    'plastic-bottle': { name: 'Plastic Bottle', material: 'PET Plastic', impact: 1.2 },
    'cardboard-box': { name: 'Cardboard Box', material: 'Corrugated Cardboard', impact: 0.8 },
    'glass-jar': { name: 'Glass Jar', material: 'Soda-lime Glass', impact: 0.6 },
    'old-tire': { name: 'Old Tire', material: 'Rubber Composite', impact: 15.0 }
  };
  
  const item = itemMap[itemType] || itemMap['plastic-bottle'];
  
  const detectedItemName = document.getElementById('detectedItemName');
  const detectedMaterial = document.getElementById('detectedMaterial');
  const wasteReduced = document.getElementById('wasteReduced');
  
  if (detectedItemName) detectedItemName.textContent = item.name;
  if (detectedMaterial) detectedMaterial.textContent = item.material;
  if (wasteReduced) wasteReduced.textContent = item.impact;
  
  loadReuseIdeas();
}

// Data Loading Functions with Enhanced YouTube Support
function loadFeaturedProjects() {
  const container = document.getElementById('featuredProjects');
  if (!container) return;
  
  container.innerHTML = appData.communityProjects.slice(0, 3).map(project => `
    <div class="project-card" onclick="openProjectModal('${project.id}')">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-user">by ${project.user}</p>
      </div>
      <div class="project-images">
        <div class="image-placeholder" data-label="Before">${project.beforeImage}</div>
        <div class="image-placeholder" data-label="After">${project.afterImage}</div>
      </div>
      <div class="project-actions">
        <div class="project-stats">
          <div class="stat-item">
            <i class="fas fa-heart"></i>
            <span>${project.likes}</span>
          </div>
          <div class="stat-item">
            <i class="fas fa-comment"></i>
            <span>${project.comments}</span>
          </div>
          ${project.hasVideo ? `
          <div class="stat-item">
            <i class="fas fa-play"></i>
            <span>Video</span>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function loadReuseIdeas() {
  const container = document.getElementById('reuseIdeas');
  if (!container) return;
  
  const filteredIdeas = appData.reuseIdeas.filter(idea => 
    selectedFilters.difficulty.includes(idea.difficulty) &&
    selectedFilters.time.includes(idea.time)
  );
  
  container.innerHTML = filteredIdeas.map(idea => {
    const videoConfig = appData.videoConfig[idea.videoKey];
    const thumbnailUrl = getYoutubeThumbnail(videoConfig.url);
    
    return `
    <div class="idea-card">
      <div class="youtube-thumbnail" onclick="openYoutubeVideo('${idea.videoKey}')" style="background-image: url('${thumbnailUrl}')">
        <div class="video-play-overlay">
          <i class="fas fa-play"></i>
        </div>
        <div class="video-duration">${videoConfig.duration}</div>
        <div class="video-views">${videoConfig.views} views</div>
        <div class="video-instructor">${idea.instructor}</div>
      </div>
      <div class="idea-content">
        <h3 class="idea-title">${idea.title}</h3>
        <div class="idea-meta">
          <span class="difficulty-badge ${idea.difficulty.toLowerCase()}">${idea.difficulty}</span>
          <span class="time-badge">${idea.time}</span>
          <div class="video-rating">
            ${'★'.repeat(Math.floor(idea.rating))}${'☆'.repeat(5 - Math.floor(idea.rating))}
            <span>(${idea.rating})</span>
          </div>
        </div>
        <p class="idea-description">${idea.description}</p>
        <div class="idea-tags">
          ${idea.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
        </div>
        <div class="idea-actions">
          <button class="btn btn--primary btn--sm" onclick="openYoutubeVideo('${idea.videoKey}')">
            <i class="fas fa-play"></i> Watch Tutorial
          </button>
          <button class="btn btn--secondary btn--sm" onclick="toggleFavorite('${idea.id}')">
            <i class="fas fa-bookmark"></i> Save Project
          </button>
          <button class="btn btn--secondary btn--sm" onclick="shareVideo('${idea.videoKey}')">
            <i class="fas fa-share"></i> Share
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function loadCommunityProjects() {
  const container = document.getElementById('communityProjects');
  if (!container) return;
  
  container.innerHTML = appData.communityProjects.map(project => `
    <div class="project-card" onclick="openProjectModal('${project.id}')">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-user">by ${project.user}</p>
      </div>
      <div class="project-images">
        <div class="image-placeholder" data-label="Before">${project.beforeImage}</div>
        <div class="image-placeholder" data-label="After">${project.afterImage}</div>
      </div>
      <div class="project-actions">
        <div class="project-stats">
          <div class="stat-item">
            <i class="fas fa-heart"></i>
            <span>${project.likes}</span>
          </div>
          <div class="stat-item">
            <i class="fas fa-comment"></i>
            <span>${project.comments}</span>
          </div>
          ${project.hasVideo ? `
          <div class="stat-item video-available" onclick="event.stopPropagation(); openCommunityVideo('${project.id}')">
            <i class="fas fa-play"></i>
            <span>${project.videoDuration}</span>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function loadTutorials() {
  const container = document.getElementById('tutorialsGrid');
  if (!container) return;
  
  container.innerHTML = appData.tutorials.map(tutorial => {
    const thumbnailUrl = tutorial.hasVideo ? getYoutubeThumbnail(tutorial.youtubeUrl) : null;
    
    return `
    <div class="tutorial-card" onclick="openTutorialVideo('${tutorial.id}')">
      <div class="tutorial-image" ${thumbnailUrl ? `style="background-image: url('${thumbnailUrl}')"` : ''}>
        ${!thumbnailUrl ? tutorial.image : ''}
        ${tutorial.hasVideo ? `
        <div class="video-play-overlay">
          <i class="fas fa-play"></i>
        </div>
        <div class="video-duration">${tutorial.videoDuration}</div>
        ` : ''}
      </div>
      <div class="tutorial-content">
        <h3 class="tutorial-title">${tutorial.title}</h3>
        <div class="tutorial-meta">
          <span>${tutorial.category}</span>
          <span>${tutorial.readTime}</span>
          <span>by ${tutorial.instructor}</span>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function loadLeaderboard() {
  const container = document.getElementById('leaderboardList');
  if (!container) return;
  
  container.innerHTML = appData.leaderboard.map((user, index) => `
    <div class="leaderboard-item">
      <div class="leaderboard-rank">#${index + 1}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${user.name}</div>
        <div class="leaderboard-badge">${user.badge}</div>
        <div class="leaderboard-videos">${user.videosWatched} videos watched</div>
      </div>
      <div class="leaderboard-points">${user.points}</div>
    </div>
  `).join('');
}

function loadUserProfile() {
  const userAccount = currentUser || appData.userAccounts[0]; // Use current user or demo user
  
  // Update profile elements
  const userLevel = document.getElementById('userLevel');
  const itemsReused = document.getElementById('itemsReused');
  const wasteSaved = document.getElementById('wasteScored');
  const userPoints = document.getElementById('userPoints');
  
  if (userLevel) userLevel.textContent = userAccount.level;
  if (itemsReused) itemsReused.textContent = userAccount.itemsReused;
  if (wasteSaved) wasteSaved.textContent = userAccount.wasteSaved;
  if (userPoints) userPoints.textContent = userAccount.points.toLocaleString();
  
  // Load badges
  const badgesContainer = document.getElementById('userBadges');
  if (badgesContainer) {
    badgesContainer.innerHTML = userAccount.badges.map((badge, index) => `
      <div class="badge-item">
        <div class="badge-icon">🏆</div>
        <div class="badge-name">${badge}</div>
      </div>
    `).join('');
  }
  
  // Add video stats section
  const profileContent = document.querySelector('.profile-content');
  if (profileContent && !document.getElementById('videoStats')) {
    const videoStatsSection = document.createElement('div');
    videoStatsSection.className = 'video-stats-section';
    videoStatsSection.id = 'videoStats';
    videoStatsSection.innerHTML = `
      <h3>Video Activity</h3>
      <div class="video-metrics">
        <div class="metric">
          <span class="metric-value">${userAccount.videosWatched}</span>
          <span class="metric-label">Videos Watched</span>
        </div>
        <div class="metric">
          <span class="metric-value">${userAccount.favoriteVideos?.length || 0}</span>
          <span class="metric-label">Favorite Videos</span>
        </div>
      </div>
      <div class="watch-history">
        <h4>Recent Watch History</h4>
        ${userAccount.watchHistory?.map(item => `
          <div class="history-item">
            <i class="fas fa-play-circle"></i>
            <span>Video ${item.videoId} - ${item.completed ? 'Completed' : 'In Progress'}</span>
            <span class="watch-date">${item.watchedAt}</span>
          </div>
        `).join('') || '<p>No watch history available</p>'}
      </div>
    `;
    profileContent.appendChild(videoStatsSection);
  }
}

// Admin Panel Functions
function loadAdminPanel() {
  // Create admin page if it doesn't exist
  let adminPage = document.getElementById('admin');
  if (!adminPage) {
    adminPage = document.createElement('section');
    adminPage.id = 'admin';
    adminPage.className = 'page';
    document.body.appendChild(adminPage);
  }
  
  adminPage.innerHTML = `
    <div class="container">
      <div class="admin-header">
        <h2>Admin Panel - Video Configuration</h2>
        <p class="section-subtitle">Easily update YouTube video URLs across the platform</p>
      </div>
      
      <div class="admin-content">
        <div class="admin-section">
          <h3>Main Tutorial Videos</h3>
          <div class="video-config-grid">
            ${Object.entries(appData.videoConfig).map(([key, config]) => `
              <div class="video-config-item">
                <h4>${config.title}</h4>
                <div class="config-field">
                  <label>YouTube URL:</label>
                  <input type="url" class="form-control" value="${config.url}" 
                         onchange="updateVideoConfig('${key}', 'url', this.value)">
                </div>
                <div class="config-field">
                  <label>Duration:</label>
                  <input type="text" class="form-control" value="${config.duration}" 
                         onchange="updateVideoConfig('${key}', 'duration', this.value)">
                </div>
                <div class="config-field">
                  <label>Views:</label>
                  <input type="text" class="form-control" value="${config.views}" 
                         onchange="updateVideoConfig('${key}', 'views', this.value)">
                </div>
                <div class="video-preview">
                  <img src="${getYoutubeThumbnail(config.url)}" alt="Video thumbnail" 
                       style="width: 100%; max-width: 200px; border-radius: 8px;">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="admin-section">
          <h3>Tutorial Videos</h3>
          <div class="video-config-grid">
            ${appData.tutorials.map(tutorial => `
              <div class="video-config-item">
                <h4>${tutorial.title}</h4>
                <div class="config-field">
                  <label>YouTube URL:</label>
                  <input type="url" class="form-control" value="${tutorial.youtubeUrl}" 
                         onchange="updateTutorialVideo('${tutorial.id}', this.value)">
                </div>
                <div class="video-preview">
                  <img src="${getYoutubeThumbnail(tutorial.youtubeUrl)}" alt="Video thumbnail" 
                       style="width: 100%; max-width: 200px; border-radius: 8px;">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="admin-actions">
          <button class="btn btn--primary" onclick="saveVideoConfiguration()">
            <i class="fas fa-save"></i> Save All Changes
          </button>
          <button class="btn btn--secondary" onclick="resetVideoConfiguration()">
            <i class="fas fa-undo"></i> Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  `;
}

function updateVideoConfig(key, field, value) {
  if (appData.videoConfig[key]) {
    appData.videoConfig[key][field] = value;
    if (field === 'url') {
      VIDEO_CONFIG[key] = value;
    }
    showNotification(`Updated ${key} ${field}`, 'success');
  }
}

function updateTutorialVideo(tutorialId, url) {
  const tutorial = appData.tutorials.find(t => t.id == tutorialId);
  if (tutorial) {
    tutorial.youtubeUrl = url;
    showNotification(`Updated tutorial video for ${tutorial.title}`, 'success');
  }
}

function saveVideoConfiguration() {
  showNotification('Video configuration saved successfully!', 'success');
  // In a real app, this would save to a database
  console.log('Saving video configuration:', { VIDEO_CONFIG, videoConfig: appData.videoConfig });
}

function resetVideoConfiguration() {
  if (confirm('Are you sure you want to reset all video configurations to defaults?')) {
    // Reset to original values
    Object.assign(VIDEO_CONFIG, {
      plasticBottlePlanters: "https://www.youtube.com/watch?v=6vhKyKNkTwQ",
      selfWateringSystem: "https://www.youtube.com/watch?v=qUMzJSGAuOs", 
      birdFeederCreation: "https://www.youtube.com/watch?v=H9K8-3NCGXM",
      storageContainer: "https://www.youtube.com/watch?v=lN8DqY4Z9yE",
      basicUpcycling: "https://www.youtube.com/watch?v=6vhKyKNkTwQ",
      paintFinish: "https://www.youtube.com/watch?v=qUMzJSGAuOs",
      advancedWoodworking: "https://www.youtube.com/watch?v=H9K8-3NCGXM"
    });
    
    loadAdminPanel(); // Reload the admin panel
    showNotification('Video configuration reset to defaults', 'info');
  }
}

// ============================
// YOUTUBE VIDEO FUNCTIONS
// ============================
function openYoutubeVideo(videoKey) {
  const videoConfig = appData.videoConfig[videoKey];
  if (!videoConfig || !isValidYoutubeUrl(videoConfig.url)) {
    showNotification('Video not available', 'error');
    return;
  }
  
  const modal = document.getElementById('videoModal');
  const modalBody = modal.querySelector('.modal-body');
  const title = document.getElementById('videoModalTitle');
  
  if (title) title.textContent = videoConfig.title;
  
  // Create YouTube iframe embed
  const embedUrl = getYoutubeEmbedUrl(videoConfig.url);
  
  modalBody.innerHTML = `
    <div class="youtube-container">
      <iframe 
        width="100%" 
        height="400" 
        src="${embedUrl}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-info">
      <h4>${videoConfig.title}</h4>
      <div class="video-stats">
        <span><i class="fas fa-eye"></i> ${videoConfig.views} views</span>
        <span><i class="fas fa-clock"></i> ${videoConfig.duration}</span>
        <button class="btn btn--secondary btn--sm" onclick="toggleFavorite('${videoKey}')" id="favoriteBtn-${videoKey}">
          <i class="fas fa-bookmark"></i> ${userFavoriteVideos.includes(videoKey) ? 'Saved' : 'Save'}
        </button>
        <button class="btn btn--secondary btn--sm" onclick="shareVideo('${videoKey}')">
          <i class="fas fa-share"></i> Share
        </button>
      </div>
      <div class="video-description">
        <p>Learn how to create this amazing project step by step with professional guidance.</p>
        <div class="materials-list">
          <h5>Materials Needed:</h5>
          <ul>
            ${appData.reuseIdeas.find(idea => idea.videoKey === videoKey)?.materials.map(material => `<li>${material}</li>`).join('') || ''}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  showModal(modal);
  
  // Track video view
  trackVideoView(videoKey);
}

function openCommunityVideo(projectId) {
  const project = appData.communityProjects.find(p => p.id == projectId);
  if (!project || !project.hasVideo) return;
  
  const modal = document.getElementById('videoModal');
  const modalBody = modal.querySelector('.modal-body');
  const title = document.getElementById('videoModalTitle');
  
  if (title) title.textContent = project.title;
  
  const embedUrl = getYoutubeEmbedUrl(project.youtubeUrl);
  
  modalBody.innerHTML = `
    <div class="youtube-container">
      <iframe 
        width="100%" 
        height="400" 
        src="${embedUrl}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-info">
      <h4>${project.title}</h4>
      <p>Community project by ${project.user}</p>
      <div class="video-stats">
        <span><i class="fas fa-heart"></i> ${project.likes} likes</span>
        <span><i class="fas fa-comment"></i> ${project.comments} comments</span>
        <span><i class="fas fa-clock"></i> ${project.videoDuration}</span>
      </div>
      <p>${project.description}</p>
    </div>
  `;
  
  showModal(modal);
}

function openTutorialVideo(tutorialId) {
  const tutorial = appData.tutorials.find(t => t.id == tutorialId);
  if (!tutorial || !tutorial.hasVideo) return;
  
  const modal = document.getElementById('videoModal');
  const modalBody = modal.querySelector('.modal-body');
  const title = document.getElementById('videoModalTitle');
  
  if (title) title.textContent = tutorial.title;
  
  const embedUrl = getYoutubeEmbedUrl(tutorial.youtubeUrl);
  
  modalBody.innerHTML = `
    <div class="youtube-container">
      <iframe 
        width="100%" 
        height="400" 
        src="${embedUrl}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="video-info">
      <h4>${tutorial.title}</h4>
      <p>Tutorial by ${tutorial.instructor}</p>
      <div class="video-stats">
        <span><i class="fas fa-graduation-cap"></i> ${tutorial.category} Level</span>
        <span><i class="fas fa-book-open"></i> ${tutorial.readTime}</span>
        <span><i class="fas fa-clock"></i> ${tutorial.videoDuration}</span>
      </div>
    </div>
  `;
  
  showModal(modal);
}

function toggleFavorite(videoKey) {
  if (!isSignedIn) {
    showSignInModal();
    return;
  }
  
  const index = userFavoriteVideos.indexOf(videoKey);
  if (index === -1) {
    userFavoriteVideos.push(videoKey);
    showNotification('Video saved to favorites!', 'success');
  } else {
    userFavoriteVideos.splice(index, 1);
    showNotification('Video removed from favorites', 'info');
  }
  
  // Update button if it exists
  const btn = document.getElementById(`favoriteBtn-${videoKey}`);
  if (btn) {
    const isFavorite = userFavoriteVideos.includes(videoKey);
    btn.innerHTML = `<i class="fas fa-bookmark"></i> ${isFavorite ? 'Saved' : 'Save'}`;
  }
}

function shareVideo(videoKey) {
  const videoConfig = appData.videoConfig[videoKey];
  if (videoConfig) {
    const shareText = `Check out this awesome DIY tutorial: ${videoConfig.title}`;
    if (navigator.share) {
      navigator.share({
        title: videoConfig.title,
        text: shareText,
        url: videoConfig.url
      }).then(() => {
        showNotification('Video shared successfully!', 'success');
      }).catch(() => {
        copyToClipboard(videoConfig.url);
      });
    } else {
      copyToClipboard(videoConfig.url);
    }
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('Video link copied to clipboard!', 'success');
    });
  } else {
    showNotification('Sharing not supported on this device', 'info');
  }
}

function trackVideoView(videoKey) {
  console.log(`Tracking view for video: ${videoKey}`);
  if (currentUser) {
    currentUser.videosWatched = Math.min((currentUser.videosWatched || 0) + 1, 100);
  }
  showNotification('Thanks for watching!', 'success');
}

// Modal Functions
function openProjectModal(projectId) {
  console.log('Opening project modal for:', projectId);
  const project = appData.communityProjects.find(p => p.id == projectId);
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  const title = document.getElementById('modalProjectTitle');
  const description = document.getElementById('modalProjectDescription');
  
  if (title) title.textContent = project.title;
  if (description) description.textContent = project.description;
  
  showModal(modal);
}

function showModal(modal) {
  if (!modal) return;
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('show'), 10);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const activeModal = document.querySelector('.modal.show');
  if (activeModal) {
    activeModal.classList.remove('show');
    setTimeout(() => activeModal.classList.add('hidden'), 300);
    document.body.style.overflow = '';
  }
}

// Theme Management
function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  currentTheme = 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon();
  
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon();
  showNotification(`Switched to ${currentTheme} mode`, 'info');
}

function updateThemeIcon() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  const icon = themeToggle.querySelector('i');
  if (icon) {
    icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(n => n.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 16px 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-size: 14px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Animation Functions
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const start = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(target * progress);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Filter System
function initializeFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const filterGroup = e.target.closest('.filter-group');
      if (!filterGroup) return;
      
      const filterTitle = filterGroup.querySelector('h4');
      if (!filterTitle) return;
      
      const filterType = filterTitle.textContent.toLowerCase();
      const filterValue = e.target.value;
      
      if (filterType.includes('difficulty')) {
        if (e.target.checked) {
          if (!selectedFilters.difficulty.includes(filterValue)) {
            selectedFilters.difficulty.push(filterValue);
          }
        } else {
          selectedFilters.difficulty = selectedFilters.difficulty.filter(f => f !== filterValue);
        }
      } else if (filterType.includes('time')) {
        if (e.target.checked) {
          if (!selectedFilters.time.includes(filterValue)) {
            selectedFilters.time.push(filterValue);
          }
        } else {
          selectedFilters.time = selectedFilters.time.filter(f => f !== filterValue);
        }
      }
      
      loadReuseIdeas();
    });
  });
  
  // Community filters
  const communityFilters = document.querySelectorAll('.filter-btn');
  communityFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      communityFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showNotification(`Filtering by ${btn.textContent}`, 'info');
    });
  });
}

// Upload System
function initializeUpload() {
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        processFile(files[0]);
      }
    });
  }
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (file) {
    processFile(file);
  }
}

function processFile(file) {
  if (file.type.startsWith('image/')) {
    startAnalysis();
  } else {
    showNotification('Please upload an image file.', 'error');
  }
}

// Initialize Authentication
function initializeAuth() {
  const authForm = document.querySelector('.auth-form');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = authForm.querySelector('input[type="email"]').value;
      const password = authForm.querySelector('input[type="password"]').value;
      
      handleSignIn(email, password);
    });
  }
  
  // Update sign in button
  const signInBtn = document.querySelector('.header-actions .btn');
  if (signInBtn) {
    signInBtn.addEventListener('click', (e) => {
      if (!isSignedIn) {
        e.preventDefault();
        showSignInModal();
      }
    });
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('ReUse AI: Initializing application with enhanced YouTube video support...');
  
  // Validate video configuration
  Object.entries(VIDEO_CONFIG).forEach(([key, url]) => {
    if (!isValidYoutubeUrl(url)) {
      console.warn(`Invalid YouTube URL for ${key}: ${url}`);
    }
  });
  
  // Load initial data
  loadFeaturedProjects();
  loadLeaderboard();
  
  // Initialize systems
  initializeTheme();
  initializeUpload();
  initializeFilters();
  initializeAuth();
  animateStats();
  
  console.log('ReUse AI: Application initialized successfully with YouTube video integration');
});

// Make functions globally available
window.navigateToPage = navigateToPage;
window.processSampleItem = processSampleItem;
window.openProjectModal = openProjectModal;
window.openYoutubeVideo = openYoutubeVideo;
window.openCommunityVideo = openCommunityVideo;
window.openTutorialVideo = openTutorialVideo;
window.toggleFavorite = toggleFavorite;
window.shareVideo = shareVideo;
window.closeModal = closeModal;
window.showNotification = showNotification;
window.showSignInModal = showSignInModal;
window.handleSignIn = handleSignIn;
window.updateVideoConfig = updateVideoConfig;
window.updateTutorialVideo = updateTutorialVideo;
window.saveVideoConfiguration = saveVideoConfiguration;
window.resetVideoConfiguration = resetVideoConfiguration;