document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const rawDate = new Date(document.lastModified);

  let hours = rawDate.getHours();
  const minutes = rawDate.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; 

  const formattedTime = `${hours}:${minutes} ${ampm}`;
  const formattedDate = rawDate.toLocaleDateString(); 

  document.getElementById("location").textContent =
    `Path: ${path} | Last Updated: ${formattedDate}, ${formattedTime}`;
});
