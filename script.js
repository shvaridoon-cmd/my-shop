// PLAYLIST CONFIG
const playlist = [
  { src: "song1.mp3", title: "Song 1" },
  { src: "song2.mp3", title: "Song 2" },
  { src: "song3.mp3", title: "Song 3" }
  // add more as needed
];

let currentTrackIndex = 0;
let isPlaying = false;
let cart = [];

const bgAudio = document.getElementById("bgAudio");
const clickAudio = document.getElementById("clickAudio");
const npTitle = document.getElementById("npTitle");
const playPauseBtn = document.getElementById("playPause");
const prevTrackBtn = document.getElementById("prevTrack");
const nextTrackBtn = document.getElementById("nextTrack");
const volumeSelect = document.getElementById("volumeSelect");
const muteToggle = document.getElementById("muteToggle");

// INIT PLAYLIST
function loadTrack(index) {
  const track = playlist[index];
  if (!track) return;
  bgAudio.src = track.src;
  npTitle.textContent = `Now Playing: ${track.title}`;
}

function playTrack() {
  bgAudio.play();
  isPlaying = true;
  playPauseBtn.textContent = "⏸";
}

function pauseTrack() {
  bgAudio.pause();
  isPlaying = false;
  playPauseBtn.textContent = "▶";
}

playPauseBtn.addEventListener("click", () => {
  if (!bgAudio.src) loadTrack(currentTrackIndex);
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});

prevTrackBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  playTrack();
});

nextTrackBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  playTrack();
});

bgAudio.addEventListener("ended", () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  playTrack();
});

// VOLUME + MUTE
volumeSelect.addEventListener("change", () => {
  const level = parseFloat(volumeSelect.value);
  bgAudio.volume = level;
  clickAudio.volume = level;
});

muteToggle.addEventListener("change", () => {
  const muted = muteToggle.checked;
  bgAudio.muted = muted;
  clickAudio.muted = muted;
});

// DEFAULT VOLUME
bgAudio.volume = parseFloat(volumeSelect.value);
clickAudio.volume = parseFloat(volumeSelect.value);

// CLICK SOUND
function playClick() {
  clickAudio.currentTime = 0;
  clickAudio.play();
}

// CART LOGIC
function setupAddButtons() {
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.name);
      playClick();
    });
  });
}

function addToCart(name) {
  cart.push(name);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const cartCount = document.getElementById("cartCount");

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });

  cartCount.textContent = cart.length;
}

// WISHLIST ADD/REMOVE
document.getElementById("addItemForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("itemName").value.trim();
  if (!name) return;

  createItemCard(name);

  document.getElementById("itemName").value = "";
});

function createItemCard(name) {
  const items = document.getElementById("items");

  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <div class="item-top">
      <span class="item-bunny">🐰</span>
      <button class="item-remove">✕</button>
    </div>
    <h3>${name}</h3>
    <button class="add-btn" data-name="${name}">Add to cart</button>
  `;

  items.appendChild(card);

  card.querySelector(".add-btn").addEventListener("click", () => {
    addToCart(name);
    playClick();
  });

  card.querySelector(".item-remove").addEventListener("click", () => {
    card.remove();
    playClick();
  });
}

// OVERLAY
document.getElementById("checkoutBtn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("hidden");
  playClick();
});

document.getElementById("closeOverlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
  playClick();
});

// INITIALIZE
loadTrack(currentTrackIndex);
setupAddButtons();
renderCart();
