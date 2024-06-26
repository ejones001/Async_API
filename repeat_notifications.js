// Repeat Notification

// Function to display notifications at fixed intervals
function repeatNotification(intervalMilliseconds) {
    // Use setInterval to repeatedly display notifications
    const intervalId = setInterval(() => {
        // Display the notification
        console.log('Notification: Time to take a break!');

        // Optional: Display notification in UI or perform other actions
        
        // Check if user has dismissed the notification
        if (dismissedNotifications >= 5) {
            clearInterval(intervalId); // Stop the interval
            console.log('Notifications dismissed by user.');

        }
        
        dismissedNotifications++; // Increment dismissed notifications count
    }, intervalMilliseconds); // Interval between notifications
}

// Display notifications every 10 seconds
let dismissedNotifications = 0; // Variable to count dismissed notifications
repeatNotification(10000);
