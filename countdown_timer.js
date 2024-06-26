//  Countdown Timer

// Function to start a countdown timer
function startCountdown(durationSeconds) {
    let timer = durationSeconds; // Initial timer value in seconds

    const intervalId = setInterval(() => {
        // Display the current timer value
        console.log(timer);

        // Update UI or perform actions with timer value

        if (--timer < 0) {
            clearInterval(intervalId); // Stop the interval when timer reaches 0
            console.log('Timer expired!');
            // Optional: Display a message or perform an action when timer expires
        }
    }, 1000); // Update
}

//  Start a countdown timer for 10 seconds
startCountdown(10);
