// CART DATA
let cart = [];

// Handle "Add to cart" clicks
function setupAddButtons() {
  const buttons = document.querySelectorAll(".add-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      addToCart(name);
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
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item + " – already yours energetically ✨";
    cartList.appendChild(li);
  });

  cartCount.textContent = cart.length;
}

// Handle "Add new desire" form
const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("itemName");
  const name = nameInput.value.trim();
  if (!name) return;

  createItemCard(name);
  nameInput.value = "";
});

function createItemCard(name) {
  const itemsContainer = document.getElementById("items");

  const card = document.createElement("div");
  card.className = "item-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const tagline = document.createElement("p");
  tagline.className = "tagline";
  tagline.textContent = "Free for you";

  const button = document.createElement("button");
  button.className = "add-btn";
  button.textContent = "Add to cart";
  button.setAttribute("data-name", name);
  button.addEventListener("click", () => addToCart(name));

  card.appendChild(title);
  card.appendChild(tagline);
  card.appendChild(button);

  itemsContainer.appendChild(card);
}

// Overlay (fake checkout)
const checkoutBtn = document.getElementById("checkoutBtn");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("closeOverlay");

checkoutBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Initialize
setupAddButtons();
renderCart();
