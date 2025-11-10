// Roll 5 dice when the page loads or button is clicked
function rollDice() {
  const diceContainer = document.getElementById('diceContainer');
  diceContainer.innerHTML = '';  // clear previous rolls
  const numDice = 5;

  for (let i = 1; i <= numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // random 1–6
    const row = document.createElement('div');
    row.className = 'die-row';
    row.innerHTML = `<span>Die ${i}</span><span>${roll}</span>`;
    diceContainer.appendChild(row);
  }

  // refocus button for Enter key use
  document.getElementById('rollBtn').focus();
}

// Allow Enter key to trigger roll
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') rollDice();
});
