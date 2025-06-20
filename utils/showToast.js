export const showToast = (type, message) => {
  // Simple toast implementation - you can replace with react-hot-toast or similar
  const toast = document.createElement("div");
  toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`;

  toast.textContent =
    message ||
    (type === "success"
      ? "Message sent successfully!"
      : "Failed to send message");

  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.style.transform = "translateX(0)";
    toast.style.opacity = "1";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.transform = "translateX(100%)";
    toast.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
};
