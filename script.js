/* General reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  background: #f7f3ff;
  color: #2b1b3f;
  padding: 20px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.4rem;
  letter-spacing: 0.05em;
}

.header p {
  margin-top: 10px;
  font-size: 1rem;
}

.highlight {
  color: #b34bff;
  font-weight: 600;
}

/* Layout */
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

/* Items section */
.items-section h2,
.cart-section h2 {
  margin-bottom: 10px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.item-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.item-card h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.tagline {
  font-size: 0.9rem;
  color: #7a4bb3;
  margin-bottom: 10px;
}

.add-btn {
  background: #b34bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
}

.add-btn:hover {
  background: #9336d6;
}

/* Add item form */
.add-item {
  margin-top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.add-item h3 {
  margin-bottom: 10px;
}

.add-item label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.add-item input {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d3c4ff;
  margin-top: 4px;
}

.add-item button {
  margin-top: 10px;
  background: #2b1b3f;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
}

.add-item button:hover {
  background: #1b1028;
}

/* Cart section */
.cart-section {
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  height: fit-content;
}

.cart-list {
  list-style: none;
  margin-bottom: 10px;
  max-height: 260px;
  overflow-y: auto;
}

.cart-list li {
  padding: 6px 0;
  border-bottom: 1px dashed #e0d4ff;
  font-size: 0.95rem;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

#checkoutBtn {
  background: #ff7bb3;
  color: #2b1b3f;
  border: none;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
}

#checkoutBtn:hover {
  background: #ff5f9f;
}

.note {
  font-size: 0.8rem;
  color: #7a7a9a;
}

/* Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden {
  display: none;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  max-width: 320px;
}

.overlay-content h2 {
  margin-bottom: 10px;
}

.overlay-content p {
  margin-bottom: 15px;
}

#closeOverlay {
  background: #2b1b3f;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
}

#closeOverlay:hover {
  background: #1b1028;
}

/* Mobile */
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
