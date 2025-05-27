const form = document.getElementById("claimForm");
const claimsList = document.getElementById("claimsList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fakeClaim = document.getElementById("fakeClaim").value.trim();
  const factCounter = document.getElementById("factCounter").value.trim();

  if (!fakeClaim || !factCounter) return;

  const card = document.createElement("div");
  card.className = "claim-card";
  card.innerHTML = `
    <div><strong>Fake Claim:</strong> ${fakeClaim}</div>
    <div><strong>Factual Counter:</strong> ${factCounter}</div>
    <button class="delete-btn">🗑️ Delete</button>
  `;

  // Add delete functionality
  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
  });

  claimsList.prepend(card);
  form.reset();
});
