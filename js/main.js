// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if(mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Hero Slider Data
const sliderImages = [
  'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop'
];

// Initialize Hero Slider
const heroSlider = document.getElementById('hero-slider');
if(heroSlider) {
  sliderImages.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Typing Background';
    if(index === 0) img.classList.add('active');
    heroSlider.appendChild(img);
  });

  const images = heroSlider.querySelectorAll('img');
  let currentImage = 0;

  setInterval(() => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
  }, 3000);
}

// Performance Tracker Data
const topRowData = [
  { title: '60 Levels', desc: 'A structured curriculum from home row basics to expert challenges.', icon: 'fas fa-layer-group', iconColor: '#eab308' },
  { title: 'Real-Time WPM', desc: 'Instantly calculate your words per minute as you type without delay.', icon: 'fas fa-tachometer-alt', iconColor: '#3b82f6' },
  { title: 'Live Accuracy', desc: 'Color-coded feedback instantly highlights correct and incorrect keystrokes.', icon: 'fas fa-bullseye', iconColor: '#ef4444' },
  { title: 'Star System', desc: 'Earn 1 to 3 stars based on your speed and accuracy for each level.', icon: 'fas fa-star', iconColor: '#f59e0b' },
  { title: 'Progress Tracking', desc: 'Keep track of your overall completion percentage across 10 chapters.', icon: 'fas fa-chart-line', iconColor: '#10b981' }
];

const bottomRowData = [
  { title: 'Mini Speed Test', desc: 'Challenge yourself with a 30-second rapid typing test to check current WPM.', icon: 'far fa-clock', iconColor: '#8b5cf6' },
  { title: '10 Chapters', desc: 'Organized sections focusing on top row, bottom row, symbols, and numbers.', icon: 'fas fa-book-open', iconColor: '#06b6d4' },
  { title: 'Distraction-Free', desc: 'A clean, modern interface designed to keep you completely focused.', icon: 'fas fa-eye', iconColor: '#6366f1' },
  { title: 'Instant Feedback', desc: 'Satisfying visual cues and immediate score calculation on level completion.', icon: 'fas fa-bolt', iconColor: '#ec4899' },
  { title: '100% Free', desc: 'No ads, no paywalls, just you and the keyboard improving your speed.', icon: 'fas fa-gift', iconColor: '#14b8a6' }
];

function createCardHTML(data) {
  const card = document.createElement('div');
  card.className = 'tracker-card';
  card.innerHTML = `
    <div class="tracker-card-icon">
      <i class="${data.icon}" style="color: ${data.iconColor};"></i>
    </div>
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
  `;
  card.addEventListener('click', () => {
    document.querySelectorAll('.tracker-card').forEach(c => c.classList.remove('active-glow'));
    card.classList.add('active-glow');
    setTimeout(() => card.classList.remove('active-glow'), 1000);
  });
  return card;
}

// Initialize Marquee Double Lines
const marqueeTop = document.getElementById('marquee-top');
const marqueeBottom = document.getElementById('marquee-bottom');

if(marqueeTop && marqueeBottom) {
  // Duplicate the array to create an infinite loop effect
  const topCards = [...topRowData, ...topRowData];
  const bottomCards = [...bottomRowData, ...bottomRowData];
  
  topCards.forEach(data => marqueeTop.appendChild(createCardHTML(data)));
  bottomCards.forEach(data => marqueeBottom.appendChild(createCardHTML(data)));
}

// Mini Typing Test Logic
const paragraphs = [
  "Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, cell phone, or calculator. It can be distinguished from other means of text input, such as handwriting and speech recognition.",
  "The quick brown fox jumps over the lazy dog. This is a pangram, which is a sentence that contains every letter of the alphabet at least once. It is often used to test typewriters and computer keyboards.",
  "Learning to type fast and accurately is an essential skill in the modern digital age. It saves time, increases productivity, and allows you to communicate more effectively with others online."
];

const paragraphDisplay = document.getElementById('paragraph-display');
const typingInput = document.getElementById('typing-input');
const wpmDisplay = document.getElementById('wpm-display');
const accuracyDisplay = document.getElementById('accuracy-display');
const refreshBtn = document.getElementById('refresh-btn');
const miniTimer = document.getElementById('mini-timer');

let currentParagraph = "";
let timerStarted = false;
let timeElapsed = 0;
let countdownTime = 30;
let timerInterval;

function initMiniTest() {
  if(!paragraphDisplay) return;
  // Pick random paragraph
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  currentParagraph = paragraphs[randomIndex];
  
  paragraphDisplay.innerHTML = '';
  currentParagraph.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    paragraphDisplay.appendChild(span);
  });
  
  // Reset Variables
  typingInput.value = '';
  typingInput.disabled = false;
  wpmDisplay.innerText = '0';
  accuracyDisplay.innerText = '100%';
  if(miniTimer) miniTimer.innerText = '30s';
  timerStarted = false;
  timeElapsed = 0;
  countdownTime = 30;
  clearInterval(timerInterval);
}

function calculateWPM(typedText, timeElapsedSeconds) {
  const words = typedText.trim().split(/\s+/).length;
  const minutes = timeElapsedSeconds / 60;
  if(minutes === 0) return 0;
  return Math.round(words / minutes);
}

function calculateAccuracy(original, typed) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) correct++;
  }
  return Math.round((correct / typed.length) * 100) || 100;
}

if(typingInput) {
  typingInput.addEventListener('input', () => {
    if(!timerStarted && typingInput.value.length > 0) {
      timerStarted = true;
      timerInterval = setInterval(() => {
        countdownTime--;
        timeElapsed++;
        updateStats();
        
        if (countdownTime <= 0) {
            countdownTime = 0;
            clearInterval(timerInterval);
            typingInput.disabled = true;
            updateStats();
        }
      }, 1000);
    }
    
    const arraySpan = paragraphDisplay.querySelectorAll('span');
    const arrayValue = typingInput.value.split('');
    
    let isComplete = true;
    
    arraySpan.forEach((span, index) => {
      const char = arrayValue[index];
      if (char == null) {
        span.classList.remove('correct');
        span.classList.remove('incorrect');
        span.classList.remove('current');
        isComplete = false;
      } else if (char === span.innerText) {
        span.classList.add('correct');
        span.classList.remove('incorrect');
        span.classList.remove('current');
      } else {
        span.classList.remove('correct');
        span.classList.add('incorrect');
        span.classList.remove('current');
        isComplete = false;
      }
    });

    if(arrayValue.length < arraySpan.length) {
      if(arraySpan[arrayValue.length]) {
        arraySpan[arrayValue.length].classList.add('current');
      }
    }
    
    updateStats();

    if(arrayValue.length >= arraySpan.length) {
      clearInterval(timerInterval);
      typingInput.disabled = true;
    }
  });
}

function updateStats() {
  const typed = typingInput.value;
  if(typed.length > 0) {
    const acc = calculateAccuracy(currentParagraph, typed);
    accuracyDisplay.innerText = acc + '%';
    
    if(timeElapsed > 0) {
      const wpm = calculateWPM(typed, timeElapsed);
      wpmDisplay.innerText = wpm;
    }
  }
  if(miniTimer) miniTimer.innerText = Math.floor(countdownTime) + 's';
}

if(refreshBtn) {
  refreshBtn.addEventListener('click', initMiniTest);
}

// Initialize on load
initMiniTest();
