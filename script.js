document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-ip");
    const serverIP = document.getElementById("server-ip");
    const copyAlert = document.getElementById("copy-alert");

    if (!copyButton || !serverIP || !copyAlert) return;

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(serverIP.textContent.trim());

            copyAlert.textContent = "✓ Server IP copied to clipboard.";
            copyAlert.style.display = "block";

            copyButton.textContent = "Copied!";
            copyButton.disabled = true;

            clearTimeout(copyAlert.hideTimeout);

            copyAlert.hideTimeout = setTimeout(() => {
                copyAlert.style.display = "none";
                copyButton.textContent = "Copy IP";
                copyButton.disabled = false;
            }, 2500);

        } catch (error) {
            console.error("Failed to copy server IP:", error);

            copyAlert.textContent = "Unable to copy automatically.";
            copyAlert.style.display = "block";

            clearTimeout(copyAlert.hideTimeout);

            copyAlert.hideTimeout = setTimeout(() => {
                copyAlert.style.display = "none";
            }, 3000);
        }
    });
});
