function rollDice() {
  const diceValues = [];
  for (let i = 1; i <= 5; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceValues.push(roll);
    document.getElementById(`die${i}`).value = roll;
  }
  const total = diceValues.reduce((a, b) => a + b, 0);
  document.getElementById("total").value = total;
  document.getElementById("rollBtn").focus(); // autofocus for Enter key
}
