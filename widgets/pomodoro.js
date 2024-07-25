document.addEventListener('DOMContentLoaded', function() {
  let time = 1500;  // 25 minutes
  let timer;
  let isRunning = false;  // Flag to check if the timer is running

  const timeDisplay = document.getElementById('time');
  const startButton = document.getElementById('start');
  const resetButton = document.getElementById('reset');

  function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function startTimer() {
    if (!isRunning) {
      isRunning = true;  // Set the flag to true to indicate the timer is running
      timer = setInterval(() => {
        if (time > 0) {
          time--;
          updateDisplay();
        } else {
          clearInterval(timer);
          isRunning = false;  // Reset the flag when the timer ends
        }
      }, 1000);
    }
  }

  function resetTimer() {
    clearInterval(timer);
    time = 1500;  // Reset time to 25 minutes
    isRunning = false;  // Reset the flag
    updateDisplay();
  }

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);

  updateDisplay();  // Initialize the display
});
