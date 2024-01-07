const setTimeInput = document.getElementById('setTime');
const startBtn = document.getElementById('startBtn');
const stopResetBtn = document.getElementById('stopResetBtn');
const timerDisplay = document.getElementById('timerDisplay');

let countdown;

function startTimer() {
  let seconds = parseInt(setTimeInput.value);

  clearInterval(countdown);
  if (isNaN(seconds) || seconds <= 0) {
    alert('Įveskite tinkamą laiko ilgį sekundėmis.');
    return;
  }

  timerDisplay.textContent = `Likęs laikas: ${seconds} sek.`;

  countdown = setInterval(() => {
    seconds--;
    remainingTime = seconds;

    timerDisplay.textContent = `Likęs laikas: ${seconds} sek.`;

    if (seconds <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = 'Laikas pasibaigė!';
      showRaccoon();
    }
  }, 1000);
}

function showRaccoon() {
  document.getElementById('raccoonAnimation').style.display = 'block';
  
  setTimeout(() => {
    document.getElementById('raccoonAnimation').style.display = 'none';
  }, 3000);
}

function stopTimer() {
  setTimeInput.value = remainingTime;
  clearInterval(countdown);
}

startBtn.addEventListener('click', startTimer);
stopResetBtn.addEventListener('click', stopTimer);
