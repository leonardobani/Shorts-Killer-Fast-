function Killer() {
  // Collect elements with both classes in a single query
  const shortsElements = document.querySelectorAll(
    ".ytd-item-section-renderer, .ytd-rich-section-renderer, .ytd-rich-shelf-renderer"
  );

  // Hide all collected elements in a single loop
  shortsElements.forEach((element) => {
    element.style.display = "none";
  });
  //hide the top left section of the navigation bar
  document.querySelector('[title="Shorts"]').style.display =
    "none";
}

// Listen for the yt-navigate-finish event
document.addEventListener("yt-navigate-finish", Killer);

Killer();

window.onload = Killer();
