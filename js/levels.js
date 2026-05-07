// Level Data
const categoriesData = [
  { id: 1, title: 'Home Row', color: '#4DA3FF' },
  { id: 2, title: 'Top Row', color: '#B366FF' },
  { id: 3, title: 'Bottom Row', color: '#4ade80' },
  { id: 4, title: 'Common Words', color: '#f43f5e' },
  { id: 5, title: 'Numbers & Symbols', color: '#fb923c' },
  { id: 6, title: 'Paragraph Practice', color: '#2dd4bf' },
  { id: 7, title: 'Speed Challenges', color: '#ea580c' },
  { id: 8, title: 'Paragraph Typing', color: '#9333ea' },
  { id: 9, title: 'Advanced Topics', color: '#14b8a6' },
  { id: 10, title: 'Speed & Mastery', color: '#ef4444' }
];

const levelDefinitions = [
  // Home Row
  { title: 'Intro to Typing', icon: '<i class="fas fa-keyboard"></i>' },
  { title: 'Keys f & j', icon: 'fj' },
  { title: 'Space Bar', icon: '<i class="far fa-square"></i>' },
  { title: 'Keys d & k', icon: 'dk' },
  { title: 'Keys s & l', icon: 'sl' },
  { title: 'Home Row Review', icon: '<i class="fas fa-check"></i>' },
  
  // Top Row
  { title: 'Keys e & r', icon: 'er' },
  { title: 'Keys u & i', icon: 'ui' },
  { title: 'Keys t & y', icon: 'ty' },
  { title: 'Keys q & p', icon: 'qp' },
  { title: 'Keys w & o', icon: 'wo' },
  { title: 'Top Row Review', icon: '<i class="fas fa-check"></i>' },

  // Bottom Row
  { title: 'Keys v & b', icon: 'vb' },
  { title: 'Keys n & m', icon: 'nm' },
  { title: 'Keys c & x', icon: 'cx' },
  { title: 'Keys z & comma', icon: 'z,' },
  { title: 'Keys g & h', icon: 'gh' },
  { title: 'Bottom Row Review', icon: '<i class="fas fa-check"></i>' },

  // Common Words
  { title: 'Top 25 Words', icon: 'A1' },
  { title: 'Short Sentences', icon: 'A2' },
  { title: 'Simple Phrases', icon: 'A3' },
  { title: 'Medium Sentences', icon: 'A4' },
  { title: 'Longer Words', icon: 'A5' },
  { title: 'Words Review', icon: '<i class="fas fa-check"></i>' },

  // Numbers & Symbols
  { title: 'Numbers 1-5', icon: '12' },
  { title: 'Numbers 6-0', icon: '67' },
  { title: 'Symbols ! & @', icon: '!@' },
  { title: 'Symbols # & $', icon: '#$' },
  { title: 'Punctuation', icon: '>.' },
  { title: 'Symbols Review', icon: '<i class="fas fa-check"></i>' },

  // Paragraph Practice
  { title: 'Short Story', icon: '<i class="fas fa-book"></i>' },
  { title: 'News Paragraph', icon: '<i class="fas fa-newspaper"></i>' },
  { title: 'Tech Article', icon: '<i class="fas fa-lightbulb"></i>' },
  { title: 'Nature Passage', icon: '<i class="fas fa-globe"></i>' },
  { title: 'History Passage', icon: '<i class="fas fa-layer-group"></i>' },
  { title: 'Paragraph Review', icon: '<i class="fas fa-check"></i>' },

  // Speed Challenges
  { title: 'Sprint Mode', icon: '<i class="fas fa-meteor"></i>' },
  { title: 'Time Attack', icon: '<i class="fas fa-stopwatch"></i>' },
  { title: 'Game Words', icon: '<i class="fas fa-gamepad"></i>' },
  { title: 'Repeat Drill', icon: '<i class="fas fa-sync"></i>' },
  { title: 'Burst Fire', icon: '<i class="fas fa-fire"></i>' },
  { title: 'Speed Review', icon: '<i class="fas fa-medal"></i>' },

  // Paragraph Typing
  { title: 'Nature', icon: '<i class="fas fa-leaf"></i>' },
  { title: 'Technology', icon: '<i class="fas fa-rocket"></i>' },
  { title: 'History', icon: '<i class="fas fa-landmark"></i>' },
  { title: 'Science & Space', icon: '<i class="fas fa-space-shuttle"></i>' },
  { title: 'Daily Life', icon: '<i class="far fa-calendar-alt"></i>' },
  { title: 'Paragraph Review', icon: '<i class="fas fa-check"></i>' },

  // Advanced Topics
  { title: 'Science Words', icon: '<i class="fas fa-brain"></i>' },
  { title: 'Business Text', icon: '<i class="fas fa-chart-bar"></i>' },
  { title: 'Literature', icon: '<i class="fas fa-theater-masks"></i>' },
  { title: 'Technical', icon: '<i class="fas fa-microscope"></i>' },
  { title: 'Multi Topic', icon: '<i class="fas fa-globe"></i>' },
  { title: 'Expert Review', icon: '<i class="fas fa-graduation-cap"></i>' },

  // Speed & Mastery
  { title: 'Speed Burst I', icon: '<i class="fas fa-bolt"></i>' },
  { title: 'Speed Burst II', icon: '<i class="fas fa-tachometer-alt"></i>' },
  { title: 'Endurance Run', icon: '<i class="fas fa-bullseye"></i>' },
  { title: 'Accuracy Master', icon: '<i class="fas fa-route"></i>' },
  { title: 'Speed Champion', icon: '<i class="fas fa-crown"></i>' },
  { title: 'Final Challenge', icon: '<i class="fas fa-trophy"></i>' }
];

const levelParagraphs = [
  "asdf jkl; asdf jkl; asdf jkl; fjdk sl;a fjdk sl;a fjdk",
  "fjfj jfjf ffjj jjff fjfj jfjfj fffj jjjf fffjjj fjf",
  "ff jj ff jj fj fj ff jj fj jf ffjj jjff fj jf fj jf",
  "kdk kdkd ddk kddk dkdkd kdkdk dddkk kkddd dkd kdk",
  "slsl lsls ssll llss slsls lslsl sssll lllss sls lsl",
  "a sad lass shall fall as a flask falls glad lad adds",
  
  "er er re re eer rre err ree erer rrer eerr reer",
  "ui iu uu ii uiu iui uui iiu uiui iuui iiuu",
  "ty yt tty ytt tyt yty ttyy yytt tyty ytty",
  "qp pq qqpp ppqq qpq pqpp qqpp pqpq ppqq",
  "wo ow wwoo ooww wow owo wwo oow woow owwo",
  "we try to type properly on quiet keyboards with power",
  
  "vb bv vvb bvv vbvb bvbv vbbv bbvv vbvb",
  "nm mn nnmm mmnn nmnm mnmn nnmm mmnn nmn",
  "cx xc ccxx xxcc cxcx xcx cxcc xxcc cxc",
  "z, ,z zz,, ,,zz z,z ,z, z,, ,,z z,z",
  "gh hg gghh hhgg ghgh hghg gghh hhgg ghg",
  "zany brave men mix boxes and carry big heavy bags",
  
  "the be to of and a in that have I it for not on with he as you do at this",
  "I am here and you are there. We can do this. He is in the room.",
  "on the way in the house at the door by the road with my friend",
  "She is going to the market to buy some fresh fruits and vegetables.",
  "typing keyboard practice sentence improve learning accuracy speed control",
  "we are learning to type faster and improve our typing speed daily",
  
  "1 2 3 4 5 11 22 33 44 55 123 234 345 451 512",
  "6 7 8 9 0 66 77 88 99 00 678 789 890 906 670",
  "! @ !! @@ !@ @! !@! @@!! !@@!",
  "# $ ## $$ #$ $# #$$ ##$ $$#",
  ". , ? ! ; : . , ? ! ; : , . ! ? ; :",
  "1! 2@ 3# 4$ 5! 6@ 7# 8$ 9! 0@ #$ !@",
  
  "A small cat sat on the mat. It saw a rat and ran after it. The rat hid and the cat waited quietly.",
  "The city saw heavy rain today causing traffic delays in many areas. People were advised to stay indoors.",
  "Technology is growing rapidly with new innovations in artificial intelligence and software development improving daily life.",
  "The forest was calm and full of green trees. Birds were singing while a cool breeze moved through the leaves.",
  "Ancient civilizations built strong foundations for modern society through culture knowledge and innovation.",
  "Typing full paragraphs helps improve speed accuracy and confidence while working on real world content.",
  
  "fast fast fast type type type quick quick quick speed speed speed",
  "beat the clock type as fast as you can do not stop keep going",
  "score level win play game speed focus quick move type",
  "type repeat type repeat type repeat type repeat type repeat",
  "fast typing burst speed typing burst fast typing burst speed",
  "type fast stay accurate keep focus improve speed every day",
  
  "The sun set behind the hills as birds returned to their nests and the sky slowly turned orange and pink. A cool breeze began to blow through the tall trees signaling the end of a long day. Small animals scurried into their burrows preparing for the dark night ahead.",
  "Modern technology connects people across the world and allows faster communication through digital platforms. Smart devices and instant messaging have completely transformed how we interact with friends and family. Furthermore the rise of remote work has demonstrated that geographical boundaries no longer limit productivity or collaboration.",
  "Great leaders and events from the past have shaped the present world and continue to influence the future. By studying historical texts and artifacts we gain valuable insights into ancient cultures and their societal structures. Learning from previous mistakes helps humanity avoid repeating them and builds a foundation for lasting peace.",
  "Space exploration helps us understand planets stars and galaxies while advancing scientific knowledge. Telescopes capture breathtaking images of distant nebulas and orbital satellites provide crucial data about our own planet. As technology improves the possibility of manned missions to Mars becomes an exciting reality for the next generation of astronauts.",
  "Every day we perform simple tasks that shape our routine and help us stay organized and productive. Waking up early and maintaining a consistent schedule can significantly improve mental health and overall focus. Taking short breaks to stretch and hydrate ensures that our energy levels remain high throughout the busy afternoon.",
  "consistent typing practice with meaningful paragraphs improves both speed and overall typing accuracy. when you challenge yourself with diverse topics your fingers learn to adapt to different letter combinations naturally. remember to maintain good posture keep your wrists elevated and breathe steadily as you work through these complex passages.",
  
  "atom molecule energy gravity motion force mass velocity quantum neuron cell reaction physics chemistry biology astronomy element compound reaction catalyst synthesis hypothesis theory experiment observation laboratory microscope telescope radiation spectrum electron proton neutron nucleus galaxy universe evolution genetics DNA RNA mutation ecosystem climate thermodynamics entropy relativity fusion fission",
  "The company aims to increase revenue growth by improving customer satisfaction and expanding market reach. Our strategic initiatives focus on sustainable development and long term profitability. Through innovative marketing campaigns and strategic partnerships we will secure a competitive advantage in the global marketplace. Quarterly earnings show a positive trajectory and our dedicated team continues to exceed performance expectations.",
  "The old man walked slowly along the silent road thinking about the memories of his youth and lost time. The autumn leaves fell gently around him creating a colorful blanket over the damp earth. He remembered the laughter of children and the warm summer days spent by the river. Life had moved quickly but the quiet moments remained eternally etched in his heart.",
  "The system uses algorithms and data structures to process input efficiently and deliver optimized output. As software architecture becomes more complex developers must understand design patterns and memory management. Cloud computing and distributed databases allow modern applications to scale seamlessly across multiple regions. Writing clean maintainable code is essential for collaborative environments and ensuring long term project stability.",
  "Science business and technology together shape modern society and influence the way we live and work daily. The rapid pace of innovation requires professionals to continuously adapt and learn new skills. From artificial intelligence to global economics the interconnected nature of our world presents unique challenges and opportunities. Understanding these diverse fields enables us to solve complex problems effectively.",
  "advanced typing requires accuracy speed focus and consistency across different types of content and topics. To reach an expert level you must practice regularly and challenge yourself with diverse vocabularies. Building muscle memory takes time but the reward is a seamless connection between your thoughts and the screen. Keep pushing your limits maintaining good posture and breathing steadily throughout each session.",
  
  "type fast now type fast now keep going fast typing speed up now push your limits and do not look back let your fingers fly across the keyboard with absolute confidence. every second counts so maintain your rhythm and ignore any small mistakes. speed is the only goal right now so unleash your full potential and hit every key as rapidly as possible without hesitating.",
  "quick moves fast keys no stop keep typing speed increase now the faster you go the better you feel. adrenaline is rushing and your hands are a blur over the mechanical switches. do not pause to think just let muscle memory take over entirely. you have practiced for this exact moment so trust your instincts and maintain the blazing momentum until the timer stops.",
  "keep typing for long duration without stopping maintain rhythm and focus on consistent speed and flow. endurance is the true test of a master typist as fatigue begins to set in you must stay perfectly composed. breathe deeply and keep your wrists relaxed while your fingers continue their steady dance. consistency over a sustained period separates the good typists from the absolutely great ones.",
  "focus on correct typing avoid mistakes maintain proper finger placement and improve accuracy gradually. speed is useless without precision so treat every single character as a crucial part of the whole text. do not let the ticking clock force you into making careless errors. strike each key with intention and confidence knowing that perfect accuracy naturally leads to a higher overall words per minute score.",
  "you are becoming faster and more confident with every practice session keep pushing your limits. all the hours spent repeating drills and mastering the home row have brought you to this elite level. your hands move instinctively and the words appear on the screen exactly as you think them. this is what mastery feels like so embrace the speed and keep striving for perfection.",
  "this is the final challenge type with full speed accuracy and confidence to complete your typing mastery journey. everything you have learned comes together in this ultimate test of endurance and precision. keep your eyes fixed on the text and let nothing break your unwavering concentration. you have reached the pinnacle of keyboard control so finish strong and claim your title as a true champion."
];

function generateParagraphForLevel(i) {
  if (i >= 1 && i <= 60) return levelParagraphs[i - 1];
  return "Practice makes perfect.";
}

const levels = [];

for(let i=1; i<=60; i++) {
  let catIndex = Math.ceil(i / 6);
  let def = levelDefinitions[i - 1];
  
  let timer = 30;
  if(i >= 31 && i <= 48) timer = 45;
  if(i >= 49 && i <= 54) timer = 60;
  if(i >= 55 && i <= 60) timer = 90;
  
  levels.push({
    id: i,
    categoryId: catIndex,
    title: def.title,
    name: def.title, // maintain compatibility with existing modal logic
    iconHtml: def.icon,
    timer: timer,
    paragraph: generateParagraphForLevel(i)
  });
}

// Render Levels
const levelsGrid = document.getElementById('levels-grid');
if(levelsGrid) {
  levelsGrid.innerHTML = '';
  
  categoriesData.forEach(cat => {
    let catLevels = levels.filter(l => l.categoryId === cat.id);
    
    // Create section
    let section = document.createElement('div');
    section.className = 'category-card animate-fade';
    section.style.setProperty('--cat-color', cat.color);
    
    // Header
    let header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
       <div class="category-title-area">
         <div class="cat-bar"></div>
         <div>
           <h2>${cat.title}</h2>
           <p>0/6 lessons complete</p>
         </div>
       </div>
       <div class="category-stats">
         <div class="cat-timer"><i class="fas fa-clock"></i> ${catLevels[0].timer}s</div>
         <div class="cat-progress-bar">
            <div class="cat-progress-fill" style="width: 0%"></div>
         </div>
         <span class="cat-progress-text">0%</span>
       </div>
    `;
    section.appendChild(header);
    
    // Levels container
    let container = document.createElement('div');
    container.className = 'category-levels';
    
    catLevels.forEach(lvl => {
       let card = document.createElement('div');
       card.className = 'lesson-card start-level-btn';
       card.setAttribute('data-id', lvl.id);
       card.innerHTML = `
         <div class="lesson-num">${lvl.id}</div>
         <div class="lesson-icon">${lvl.iconHtml}</div>
         <div class="lesson-title">${lvl.title}</div>
         <div class="lesson-stars">
            <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>
         </div>
       `;
       container.appendChild(card);
    });
    
    section.appendChild(container);
    levelsGrid.appendChild(section);
  });
}

// Level Modal Logic
const modal = document.getElementById('level-play-area');
const playContainer = document.getElementById('play-container');
const resultsContainer = document.getElementById('results-container');
const closePlayModal = document.getElementById('close-modal-play');
const closeResultsModal = document.getElementById('close-modal-results');
const playView = document.getElementById('play-view');
const playInput = document.getElementById('play-input');
const playParagraph = document.getElementById('play-paragraph');
const timerDisplay = document.getElementById('timer-display');
const currentLevelTitle = document.getElementById('current-level-title');
const resWpm = document.getElementById('res-wpm');
const resAcc = document.getElementById('res-acc');
const resScore = document.getElementById('res-score');
const nextLvlBtn = document.getElementById('next-level-btn');
const retryLvlBtn = document.getElementById('retry-level-btn');
const resTitleMsg = document.getElementById('res-title-msg');
const resDescMsg = document.getElementById('res-desc-msg');
const resStars = document.getElementById('res-stars');
const liveWpm = document.getElementById('live-wpm');
const liveAcc = document.getElementById('live-acc');

let currentLevelObj = null;
let lvlTimerInterval;
let lvlTimeRemaining = 0;
let lvlTimeElapsed = 0;
let lvlTimerStarted = false;

document.addEventListener('click', (e) => {
  if(e.target.closest('.start-level-btn')) {
    const btn = e.target.closest('.start-level-btn');
    const lvlId = parseInt(btn.getAttribute('data-id'));
    currentLevelObj = levels.find(l => l.id === lvlId);
    openModal();
  }
});

if(closePlayModal) {
  closePlayModal.addEventListener('click', () => {
    modal.classList.remove('active');
    clearInterval(lvlTimerInterval);
  });
}

if(closeResultsModal) {
  closeResultsModal.addEventListener('click', () => {
    modal.classList.remove('active');
    clearInterval(lvlTimerInterval);
  });
}

function openModal() {
  modal.classList.add('active');
  playContainer.style.display = 'block';
  resultsContainer.style.display = 'none';
  playInput.value = '';
  playInput.disabled = false;
  lvlTimerStarted = false;
  clearInterval(lvlTimerInterval);
  
  currentLevelTitle.innerText = currentLevelObj.name;
  lvlTimeRemaining = currentLevelObj.timer;
  lvlTimeElapsed = 0;
  timerDisplay.innerText = formatTime(lvlTimeRemaining);
  if(liveWpm) liveWpm.innerHTML = `WPM: <span style="color: var(--accent)">0</span>`;
  if(liveAcc) liveAcc.innerHTML = `Acc: <span style="color: var(--accent)">100%</span>`;
  
  playParagraph.innerHTML = '';
  currentLevelObj.paragraph.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    playParagraph.appendChild(span);
  });
  
  setTimeout(() => playInput.focus(), 100);
}

function formatTime(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  return `0${m}:${s < 10 ? '0'+s : s}`;
}

function updateLiveStats() {
  const typed = playInput.value;
  let acc = 100;
  let wpm = 0;
  
  if(typed.length > 0) {
    let correct = 0;
    const orig = currentLevelObj.paragraph;
    for(let i=0; i<typed.length; i++) {
      if(typed[i] === orig[i]) correct++;
    }
    acc = Math.round((correct / typed.length) * 100) || 100;
    
    // WPM calculation
    const words = typed.trim().split(/\s+/).length;
    const minutes = lvlTimeElapsed / 60;
    if(minutes > 0) wpm = Math.round(words / minutes);
  }
  if(liveWpm) liveWpm.innerHTML = `WPM: <span style="color: var(--accent)">${wpm}</span>`;
  if(liveAcc) liveAcc.innerHTML = `Acc: <span style="color: var(--accent)">${acc}%</span>`;
}

if(playInput) {
  playInput.addEventListener('input', () => {
    if(!lvlTimerStarted && playInput.value.length > 0) {
      lvlTimerStarted = true;
      lvlTimerInterval = setInterval(() => {
        lvlTimeRemaining--;
        lvlTimeElapsed++;
        timerDisplay.innerText = formatTime(lvlTimeRemaining);
        updateLiveStats();
        
        if(lvlTimeRemaining <= 0) {
          endLevel();
        }
      }, 1000);
    }
    
    const arraySpan = playParagraph.querySelectorAll('span');
    const arrayValue = playInput.value.split('');
    let allCorrect = true;

    arraySpan.forEach((span, index) => {
      const char = arrayValue[index];
      if (char == null) {
        span.classList.remove('correct', 'incorrect', 'current');
        allCorrect = false;
      } else if (char === span.innerText) {
        span.classList.add('correct');
        span.classList.remove('incorrect', 'current');
      } else {
        span.classList.remove('correct', 'current');
        span.classList.add('incorrect');
        allCorrect = false;
      }
    });

    if(arrayValue.length < arraySpan.length) {
      if(arraySpan[arrayValue.length]) {
        arraySpan[arrayValue.length].classList.add('current');
      }
    }
    
    updateLiveStats();

    if(arrayValue.length >= arraySpan.length && allCorrect) {
      endLevel();
    } else if(arrayValue.length >= arraySpan.length) {
      endLevel(); // End even if mistakes exist
    }
  });
}

function endLevel() {
  clearInterval(lvlTimerInterval);
  playInput.disabled = true;
  
  playContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
  
  const typed = playInput.value;
  let acc = 100;
  let wpm = 0;
  let score = 0;
  
  if(typed.length > 0) {
    let correct = 0;
    const orig = currentLevelObj.paragraph;
    for(let i=0; i<typed.length; i++) {
      if(typed[i] === orig[i]) correct++;
    }
    acc = Math.round((correct / orig.length) * 100);
    
    // WPM calculation
    const words = typed.trim().split(/\s+/).length;
    const minutes = lvlTimeElapsed / 60;
    if(minutes > 0) wpm = Math.round(words / minutes);
    
    // Simple Score Calculation
    score = Math.round((wpm * 0.5) + (acc * 0.5));
  }
  
  resWpm.innerText = wpm;
  resAcc.innerText = acc + '%';
  resScore.innerText = score;
  
  // Calculate Stars
  let stars = 0;
  if(acc >= 95 && wpm >= 30) {
    stars = 3;
    resTitleMsg.innerText = "Perfect!";
    resDescMsg.innerText = "Flawless execution! You've mastered this level.";
  } else if(acc >= 85 && wpm >= 20) {
    stars = 2;
    resTitleMsg.innerText = "Great Job!";
    resDescMsg.innerText = "Excellent! Keep pushing to reach perfection!";
  } else if(acc >= 70 && wpm >= 10) {
    stars = 1;
    resTitleMsg.innerText = "Good Try!";
    resDescMsg.innerText = "You passed, but there's room for improvement.";
  } else {
    stars = 0;
    resTitleMsg.innerText = "Keep Trying";
    resDescMsg.innerText = "Practice makes perfect. Try this level again.";
  }

  // Render Stars
  resStars.innerHTML = '';
  for(let i=0; i<3; i++) {
    const starI = document.createElement('i');
    starI.className = 'fas fa-star';
    if(i >= stars) {
      starI.classList.add('empty');
    }
    resStars.appendChild(starI);
  }
  
  if(currentLevelObj.id === 60) {
    nextLvlBtn.innerText = "FINISH";
  } else {
    nextLvlBtn.innerHTML = "NEXT LESSON &rarr;";
  }
}

if(nextLvlBtn) {
  nextLvlBtn.addEventListener('click', () => {
    if(currentLevelObj.id < 60) {
      currentLevelObj = levels.find(l => l.id === currentLevelObj.id + 1);
      openModal();
    } else {
      modal.classList.remove('active');
    }
  });
}

if(retryLvlBtn) {
  retryLvlBtn.addEventListener('click', () => {
    openModal();
  });
}
