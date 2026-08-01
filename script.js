function copyIP() {
    // Get the IP text string
    const ipText = document.getElementById('server-ip').innerText;
    
    // Copy the IP string to the user's clipboard
    navigator.clipboard.writeText(ipText).then(() => {
        const alertMsg = document.getElementById('copy-alert');
        
        // Make the success indicator pop up visually
        alertMsg.style.display = 'block';
        
        // Make the alert text automatically fade away after 3 seconds
        setTimeout(() => {
            alertMsg.style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Could not copy server IP address: ', err);
    });
}
