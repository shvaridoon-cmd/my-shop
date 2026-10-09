/* rebuild */
// =========================
// AUDIO SETUP
// =========================
const bgAudio = document.getElementById("bgAudio");
const clickAudio = document.getElementById("clickAudio");

// PLAYLIST CONFIG
const playlist = [
  { src: "nasty.mp3", title: "nasty" },
  { src: "hatemadeulove.mp3", title: "hate that i made u love me" },
  { src: "urltoirl.mp3", title: "url to irl by Kash" },
  { src: "easterpink.mp3", title: "easter pink" },
  { src: "loonaoddeyecircle.mp3", title: "odd front" },
  { src: "sweetener.mp3", title: "Sweetener" }
];

let currentTrackIndex = 0;
let isPlaying = false;

// =========================
// PLAYLIST FUNCTIONS
// =========================
function loadTrack(index) {
  const track = playlist[index];
  bgAudio.src = track.src;
  document.getElementById("nowPlaying").textContent = track.title;
}

function playTrack() {
  bgAudio.play();
  isPlaying = true;
  document.getElementById("playBtn").textContent = "⏸";
}

function pauseTrack() {
  bgAudio.pause();
  isPlaying = false;
  document.getElementById("playBtn").textContent = "▶";
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  playTrack();
}

function prevTrack() {
  currentTrackIndex =
    (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  playTrack();
}

// =========================
// BUTTON CONTROLS
// =========================
document.getElementById("playBtn").addEventListener("click", () => {
  isPlaying ? pauseTrack() : playTrack();
});

document.getElementById("nextBtn").addEventListener("click", nextTrack);
document.getElementById("prevBtn").addEventListener("click", prevTrack);

// =========================
// VOLUME + MUTE
// =========================
const volumeSlider = document.getElementById("volumeSlider");
const muteSlider = document.getElementById("muteSlider");

volumeSlider.addEventListener("input", () => {
  bgAudio.volume = volumeSlider.value;
  clickAudio.volume = volumeSlider.value;
});

muteSlider.addEventListener("input", () => {
  const muted = muteSlider.value === "0";
  bgAudio.muted = muted;
  clickAudio.muted = muted;
});

// =========================
// CLICK SOUND
// =========================
function playClick() {
  clickAudio.currentTime = 0;
  clickAudio.play();
}

// =========================
// CART + WISHLIST
// =========================
let cart = [];

function addToCart(name) {
  cart.push(name);
  document.getElementById("cartCount").textContent = cart.length;
  playClick();
}

// =========================
// CREATE ITEM CARD (for new desires)
// =========================
function createItemCard(name) {
  const items = document.getElementById("items");

  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <div class="item-top">
      <span class="item-bunny">🐰</span>
      <button class="item-remove">✕</button>
    </div>

    <img src="header.jpg" class="item-img">

    <h3>${name}</h3>
    <button class="add-btn" data-name="${name}">Add to cart</button>
  `;

  items.appendChild(card);

  // attach listeners
  card.querySelector(".item-remove").addEventListener("click", () => {
    card.remove();
    playClick();
  });

  card.querySelector(".add-btn").addEventListener("click", () => {
    addToCart(name);
  });
}

// =========================
// ADD NEW DESIRE
// =========================
document.getElementById("addItemBtn").addEventListener("click", () => {
  const input = document.getElementById("newItemInput");
  const name = input.value.trim();

  if (name !== "") {
    createItemCard(name);
    input.value = "";
    playClick();
  }
});

// =========================
// FIX OLD ITEMS (attach remove + add listeners)
// =========================
function fixOldItems() {
  document.querySelectorAll(".item-card").forEach(card => {
    const removeBtn = card.querySelector(".item-remove");
    const addBtn = card.querySelector(".add-btn");

    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        card.remove();
        playClick();
      });
    }

    if (addBtn) {
      addBtn.addEventListener("click", () => {
        addToCart(addBtn.dataset.name);
      });
    }
  });
}

// =========================
// INIT
// =========================
loadTrack(currentTrackIndex);
fixOldItems();
