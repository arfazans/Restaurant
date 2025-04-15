const elements = document.querySelectorAll('.photo, .info');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('photo')) {
        entry.target.classList.add('showright');
      } else if (entry.target.classList.contains('info')) {
        entry.target.classList.add('showleft');
      }
    } else {
      entry.target.classList.remove('showright');
      entry.target.classList.remove('showleft');
    }
  });
});
elements.forEach(element => observer.observe(element));
const navEntry = performance.getEntriesByType("navigation")[0];
  const isReload = navEntry && navEntry.type === "reload";
  if (isReload) {
    sessionStorage.removeItem("cart");
    sessionStorage.removeItem("feesAdded");
  }
  function addToCart(name, price) {
    // Re-fetch the latest cart & feesAdded from sessionStorage each time
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let feesAdded = sessionStorage.getItem("feesAdded") === "true";
    // Add delivery and platform fee only once
    if (!feesAdded) {
      cart.push({ name: "Delivery Charge", price: 2 });
      cart.push({ name: "Platform Fee", price: 1 });
      sessionStorage.setItem("feesAdded", "true");
    }
    cart.push({ name, price });
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
function handleSubmit(){
  alert("Thanks For Your Submission");
 }