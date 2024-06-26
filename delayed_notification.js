// Delayed Notification

// Function to display a delayed notification
function displayDelayedNotification(delayMilliseconds) {
    setTimeout(() => {
        console.log(`Notification after ${delayMilliseconds} milliseconds`);
        // Optional: Display notification in UI or perform other actions
    }, delayMilliseconds);
}

//Display a notification after 5 seconds
displayDelayedNotification(5000);
