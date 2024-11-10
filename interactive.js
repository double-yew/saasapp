// Example: You can use JavaScript for interactive features or fetch real-time data
document.querySelectorAll(".sidebar nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".sidebar nav a.active").classList.remove("active");
    e.currentTarget.classList.add("active");
  });
});
