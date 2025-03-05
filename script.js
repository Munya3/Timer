let seconds =  60;
let timer = null;
const playButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const timerDisplay = document.getElementById("timer");


function updateDisplay() {
    // Format the timer display as MM:SS
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
// Start and to Pause Timer 
  function startorPasueTimer() {
      if(timer === null){
        timer = setInterval(() => {
          seconds--;
          updateDisplay();
          if (seconds <= 0){
            clearInterval(timer);
            timer = null;
            playButton.textContent = "▶";
          }

        }, 1000);
        playButton.textContent = "⏸";
      } else{
        clearInterval(timer);
        timer = null;
        playButton.textContent = "▶";
      }
  }
  

  function restartTimer() {
    clearInterval(timer); // Stop any existing timer
    timer = null;
    seconds = 60; // Reset the timer to 1 minute
    updateDisplay(); // Update the display
    playButton.textContent = "⏸";
    timer = setInterval(() =>{
      seconds--;
      updateDisplay();
      if(seconds <= 0){
        clearInterval(timer);
        timer = null;
        playButton.textContent = "▶";
      }
    }, 1000);
  }
  restartButton.addEventListener("click", restartTimer);
  playButton.addEventListener("click", startorPasueTimer);
  updateDisplay();