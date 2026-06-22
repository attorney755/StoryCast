// ─── StoryCast — All Story Data ──────────────────────────────
const STORIES = [
  {
    id: 1,
    title: "The Echo of the Forest",
    category: "Nature",
    type: "Podcast",
    author: "James Carter",
    date: "October 12, 2023",
    duration: "3:57",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    imageAlt: "Sunlight streaming through a dense ancient forest",
    description: [
      "Deep within the ancient cedar groves of the Pacific Northwest, a unique acoustic phenomenon occurs. For centuries, travelers have reported hearing whispers that seem to emanate from the trees themselves, carrying fragments of memories from the forest's long history.",
      "Elena Rivers travels into the heart of the Whispering Woods to document these sounds using high-fidelity recording equipment. What she discovers is not just wind moving through branches, but a complex biological communication network that challenges our understanding of consciousness.",
      "This episode explores the intersection of botany, acoustics, and folklore, weaving together a narrative that is both scientifically grounded and deeply spiritual.",
      "Join us as we listen to the hidden pulse of the wild, uncovering secrets that have remained silent for generations, now brought to life through the lens of modern discovery."
    ]
  },

{
  id: 2,
  title: "The Wind and the Sun",
  category: "Fables",
  type: "Video",
  author: "Aesop",
  date: "November 5, 2023",
  duration: "3:24",
  image: "assets/images/story2.png",
  imageAlt: "A bright sun shining through dramatic clouds",
  description: [
    "The Wind and the Sun is a classic fable about the power of gentleness over force.",
    "High up in the sky, Wind and Sun boasted about who was stronger. When a traveler passed below, they made a bet to see who could make him take off his coat.",
    "Wind blew with all his might, but the man only held his coat tighter. Then Sun shone warmly, and the man willingly took off his coat.",
    "This timeless tale teaches us that kindness and warmth can achieve what force never can."
  ]
},

    {
    id: 3,
    title: "The Boy Who Cried Wolf",
    category: "Fables",
    type: "Podcast",
    author: "Aesop",
    date: "December 1, 2023",
    duration: "3:45",
    image: "assets/images/story3.png",
    imageAlt: "A shepherd boy watching sheep in a green field",
    description: [
      "The Boy Who Cried Wolf is a classic fable about the importance of honesty and trust.",
      "In a country far away, there lived a shepherd boy who was bored watching sheep. One day, he cried out 'Wolf! Wolf!' to tease the villagers.",
      "The villagers came running, but there was no wolf. The boy laughed at how surprised they were. He did it again the next day, and the villagers were angry.",
      "But then a real wolf appeared. The boy cried for help, but the villagers thought he was lying again. Nobody came to help him.",
      "This timeless tale teaches us that liars are not believed even when they tell the truth."
    ]
  },

   {
    id: 4,
    title: "5 Minutes to Start Your Day Right!",
    category: "Motivation",
    type: "Podcast",
    author: "Admiral McRaven",
    date: " Apr 17, 2020",
    duration: "5:15",
    image: "assets/images/story4.jpeg",
    imageAlt: "A perfectly made bed with sunlight streaming through a window",
    description: [
      "Start your day right with this powerful motivational speech from Admiral McRaven.",
      "If you want to change the world, start off by making your bed. This simple act gives you a small sense of pride and encourages you to do another task, and another, and another.",
      "If you can't do the little things right, you'll never be able to do the big things right. And if you have a miserable day, you'll come home to a bed that is made—and that gives you encouragement that tomorrow will be better.",
      "This timeless lesson from a Navy SEAL teaches us that success starts with discipline, hope, and never giving up. Don't ever ring the bell."
    ]
  },


    {
    id: 5,
    title: "Chicken Little",
    category: "Fables",
    type: "Video",
    author: "The Fable Cottage",
    date: "May 1, 2023",
    duration: "5:18",
    image: "assets/images/story5.png",
    imageAlt: "A scared little chicken running with friends",
    description: [
      "Chicken Little is a classic fable about a chicken who believes the sky is falling.",
      "One morning, Chicken Little sees a terrifying story on the internet: 'THE SKY IS FALLING!' He drops his toast and runs to warn everyone.",
      "He meets Gwen the Hen, Chuck the Duck, Bruce the Goose, and Percy the Pigeon. They all follow Chicken Little, believing the internet story.",
      "But then they meet Fred the Fox, who offers to show them a safe place to hide. He leads them into a dark cave...",
      "The next morning, the animals have disappeared. Fred the Fox sits happily with a big, round belly. A cautionary tale about believing everything you read on the internet."
    ]
  },

  {
    id: 6,
    title: "Vincent Paints His House",
    category: "Children's Stories",
    type: "Podcast",
    author: "Tedd Arnold",
    date: "June 17, 2026",
    duration: "3:05",
    image: "assets/images/story6.jpg",
    imageAlt: "A colorful house with different colored sections",
    description: [
      "Vincent Paints His House is a delightful children's story about a boy who can't decide what color to paint his house.",
      "Time to paint the house, said Vincent. But he couldn't decide what color to use. Maybe I'll paint it white, he said.",
      "But then the spider said 'This is my house, and I like red!' The caterpillar said 'I like yellow!' The beetle said 'I like purple!' Each animal wanted a different color.",
      "Finally, Vincent realized: this is MY house, and I like ALL the colors! Everyone was happy.",
      "A heartwarming story about compromise, creativity, and making everyone feel included."
    ]
  }

];

// ─── Utility: get URL param ───────────────────────────────────
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// ─── Utility: image src based on page depth ──────────────────
function getImageSrc(story, basePath) {
  return story.image;
}

// ─── Utility: create story card HTML ─────────────────────────
function createStoryCard(story, basePath = '') {
  const isCurrent = window.player && window.player.currentStoryId === story.id;
  return `
    <article class="story-card" aria-label="${story.title} — ${story.type}">
      <a href="${basePath}story/story.html?id=${story.id}" tabindex="-1" aria-hidden="true" style="position:relative;display:block;">
        <img
          src="${story.image}"
          alt="${story.imageAlt}"
          class="story-card__image"
          loading="lazy"
        />
        ${isCurrent ? '<div style="position:absolute;top:8px;right:8px;background:#2E5E47;color:white;padding:4px 10px;border-radius:20px;font-size:0.7rem;font-weight:600;">▶ NOW PLAYING</div>' : ''}
      </a>
      <div class="story-card__body">
        <div class="story-card__meta">
          <span class="tag">${story.type}</span>
          <span class="story-card__duration">${story.duration}</span>
        </div>
        <h3 class="story-card__title">
          <a href="${basePath}story/story.html?id=${story.id}">${story.title}</a>
        </h3>
        <p class="story-card__desc">${story.description[0].substring(0, 100)}…</p>
        <a href="${basePath}story/story.html?id=${story.id}" class="story-card__link">
          ${story.type === 'Video' ? 'Watch Now' : 'Listen Now'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
        </a>
      </div>
    </article>`;
}

// ─── Mobile nav toggle (runs on every page) ──────────────────
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks  = document.querySelector('.nav__links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('nav__links--open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  // ── HOME PAGE ───────────────────────────────────────────────
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    STORIES.slice(0, 3).forEach(story => {
      featuredGrid.innerHTML += createStoryCard(story, '');
    });
  }

  // ── STORIES PAGE ────────────────────────────────────────────
  const allStoriesGrid = document.getElementById('all-stories-grid');
  if (allStoriesGrid) {
    STORIES.forEach(story => {
      allStoriesGrid.innerHTML += createStoryCard(story, '../');
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('filter-btn--active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('filter-btn--active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.story-card').forEach(card => {
          const type = card.querySelector('.tag').textContent.trim();
          card.style.display = (filter === 'all' || type === filter) ? '' : 'none';
        });
      });
    });
  }

  // ── STORY DETAIL PAGE ───────────────────────────────────────
  const storyTitle = document.getElementById('story-title');
  if (storyTitle) {
    const id    = parseInt(getParam('id')) || 1;
    const story = STORIES.find(s => s.id === id);

    if (!story) {
      storyTitle.textContent = 'Story not found.';
      return;
    }

    document.title = `StoryCast — ${story.title}`;
    document.getElementById('story-tag').innerHTML     = `<span class="tag">${story.category}</span>`;
    document.getElementById('story-title').textContent  = story.title;
    document.getElementById('story-author').textContent = story.author;
    document.getElementById('story-date').textContent   = story.date;
    document.getElementById('story-duration').textContent = story.duration;

    const descEl = document.getElementById('story-description');
    story.description.forEach(para => {
      const p = document.createElement('p');
      p.textContent = para;
      descEl.appendChild(p);
    });

    // ─── TRANSCRIPT LOADING ──────────────────────────────────
    const transcriptEl = document.getElementById('transcript-content');
    if (transcriptEl) {
      fetch(`/assets/transcripts/story${story.id}.txt`)
        .then(res => {
          if (!res.ok) throw new Error('Transcript not found');
          return res.text();
        })
        .then(text => {
          text.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .forEach(line => {
              const p = document.createElement('p');
              p.textContent = line;
              transcriptEl.appendChild(p);
            });
        })
        .catch(() => {
          transcriptEl.innerHTML = '<p>Transcript currently unavailable.</p>';
        });
    }

    const relatedEl = document.getElementById('related-stories');
if (relatedEl) {
  STORIES.filter(s => s.id !== id).slice(0, 2).forEach(rel => {
    // Fix image path for related stories
    let imagePath = rel.image;
    // If it's a local path (starts with assets/), add ../ to go up from /story/ folder
    if (imagePath.startsWith('assets/')) {
      imagePath = `../${imagePath}`;
    }
    // If it's a URL (starts with http), keep as is
    
    relatedEl.innerHTML += `
      <article class="related-card">
        <img src="${imagePath}" alt="${rel.imageAlt}" class="related-card__image" loading="lazy" />
        <div class="related-card__body">
          <span class="tag" style="font-size:0.65rem;padding:2px 8px">${rel.category}</span>
          <h3 class="related-card__title">
            <a href="story.html?id=${rel.id}">${rel.title}</a>
          </h3>
          <p class="related-card__desc">${rel.description[0].substring(0, 70)}…</p>
        </div>
      </article>`;
  });
}

    // ─── REAL MEDIA PLAYER (Audio or Video) ──────────────────
    const audioEl      = document.getElementById('story-audio');
    const videoEl      = document.getElementById('story-video');
    const videoContainer = document.getElementById('video-container');
    const playBtn      = document.getElementById('play-btn');
    const progressBar  = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const currentTimeEl= document.getElementById('current-time');
    const durationEl   = document.getElementById('story-duration');
    const audioPlayer  = document.getElementById('audio-player');

    const isVideo = story.type === 'Video';
    const mediaEl = isVideo ? videoEl : audioEl;

    if (mediaEl) {
      if (isVideo) {
        // ─── VIDEO STORY ──────────────────────────────────────
        const videoPath = `/assets/video/story${story.id}.mp4`;
        const posterPath = `/${story.image}`;
        
        mediaEl.src = videoPath;
        mediaEl.poster = posterPath;
        
        if (videoContainer) {
          videoContainer.style.display = 'block';
          videoContainer.style.minHeight = '200px';
        }
        if (audioPlayer) audioPlayer.style.display = 'none';
        
        // Force poster to show before video loads
        mediaEl.style.background = `url('${posterPath}') center/contain no-repeat`;
        mediaEl.style.backgroundColor = '#000';
        mediaEl.style.objectFit = 'contain';
        
        console.log('🎬 Video path:', videoPath);
        console.log('📸 Poster path:', posterPath);

        // Load VTT Captions
        const captionsTrack = document.getElementById('video-captions');
        if (captionsTrack) {
          captionsTrack.src = `/assets/transcripts/story${story.id}.vtt`;
          console.log('📝 Loading captions from:', `/assets/transcripts/story${story.id}.vtt`);
        }
      } else {
        // ─── AUDIO STORY (Podcast) ────────────────────────────
        mediaEl.src = `/assets/audio/story${story.id}.mp3`;
        if (videoContainer) videoContainer.style.display = 'none';
        if (audioPlayer) audioPlayer.style.display = 'block';
      }

      function formatTime(secs) {
        if (isNaN(secs) || !isFinite(secs)) return '00:00';
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = Math.floor(secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
      }

      mediaEl.addEventListener('loadedmetadata', () => {
        if (durationEl) durationEl.textContent = formatTime(mediaEl.duration);
      });

      mediaEl.addEventListener('timeupdate', () => {
        const pct = (mediaEl.currentTime / mediaEl.duration) * 100 || 0;
        if (progressFill)  progressFill.style.width = `${pct}%`;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(mediaEl.currentTime);
        if (progressBar)   progressBar.setAttribute('aria-valuenow', Math.round(pct));
      });

      // Only use custom play button for audio
      if (playBtn && !isVideo) {
        playBtn.addEventListener('click', () => {
          if (mediaEl.paused) {
            mediaEl.play();
            playBtn.setAttribute('aria-label', 'Pause');
            playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
          } else {
            mediaEl.pause();
            playBtn.setAttribute('aria-label', 'Play story');
            playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
          }
        });
      }

      if (progressBar && !isVideo) {
        progressBar.addEventListener('click', (e) => {
          const rect = progressBar.getBoundingClientRect();
          const pct  = (e.clientX - rect.left) / rect.width;
          mediaEl.currentTime = pct * mediaEl.duration;
        });
      }

      mediaEl.addEventListener('ended', () => {
        if (playBtn && !isVideo) {
          playBtn.setAttribute('aria-label', 'Play story');
          playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
        }
      });

      const dlBtn = document.getElementById('download-transcript');
      if (dlBtn) dlBtn.href = `/assets/transcripts/story${story.id}.txt`;
    }

    // ─── Captions Toggle ──────────────────────────────────────────
    const captionsBtn = document.getElementById('captions-btn');
    if (captionsBtn) {
      const captionsText = document.getElementById('captions-text');
      
      // Only show captions button for video stories
      if (story.type === 'Video') {
        captionsBtn.style.display = 'inline-flex';
      } else {
        captionsBtn.style.display = 'none';
      }
      
      captionsBtn.addEventListener('click', () => {
        const pressed = captionsBtn.getAttribute('aria-pressed') === 'true';
        const newState = !pressed;
        captionsBtn.setAttribute('aria-pressed', String(newState));
        
        if (captionsText) {
          captionsText.textContent = newState ? 'Hide Captions' : 'View Captions';
        }
        
        // Toggle captions on the video
        const track = document.querySelector('#story-video track');
        if (track) {
          track.track.mode = newState ? 'showing' : 'hidden';
          console.log('Captions mode:', track.track.mode);
        }
      });
    }

    // ─── Transcript accordion ──────────────────────────────────
    const transcriptToggle = document.querySelector('.transcript-section__toggle');
    const transcriptBody   = document.getElementById('transcript-body');
    if (transcriptToggle && transcriptBody) {
      transcriptToggle.addEventListener('click', () => {
        const open = transcriptBody.classList.toggle('transcript-section__body--open');
        transcriptToggle.setAttribute('aria-expanded', String(open));
      });
    }
  }
});

// ─── Make STORIES available globally ──────────────────────────
window.STORIES = STORIES;