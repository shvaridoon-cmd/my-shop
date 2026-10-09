let cart = [];

function setupAddButtons() {
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.name);
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
    li.textContent = item;
    cartList.appendChild(li);
  });

  cartCount.textContent = cart.length;
}

document.getElementById("addItemForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("itemName").value.trim();
  const fileInput = document.getElementById("itemImage");
  const file = fileInput.files[0];

  if (!name) return;

  let imgURL = "header.jpg"; // default image

  if (file) {
    imgURL = URL.createObjectURL(file);
  }

  createItemCard(name, imgURL);

  document.getElementById("itemName").value = "";
  fileInput.value = "";
});

function createItemCard(name, imgURL) {
  const items = document.getElementById("items");

  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <img src="${imgURL}" class="item-img">
    <h3>${name}</h3>
    <button class="add-btn" data-name="${name}">Add to cart</button>
  `;

  items.appendChild(card);

  card.querySelector(".add-btn").addEventListener("click", () => addToCart(name));
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("hidden");
});

document.getElementById("closeOverlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
});

setupAddButtons();
renderCart();
