
toggle-btn.addEventListener("click", toggleSidebar)
toggle-btn.addEventListener("touchstart", toggleSidebar)
toggle-btn.addEventListener("touchend", handleTouchEnd)

function toggleSidebar() {
  // Prevent the event from triggering twice on touch devices
  event.preventDefault()

  var sidebar = document.getElementById("sidebar")
  var mainContent = document.getElementById("video")
  var iframes = document.querySelectorAll("iframe")
  var h1 = document.getElementById("h1")
  var h2 = document.getElementById("h2")

  // Toggle classes for sidebar, main content, headers, and body
  sidebar.classList.toggle("open")
  mainContent.classList.toggle("shifted")
  h1.classList.toggle("shifted")
  h2.classList.toggle("shifted")
  document.body.classList.toggle("sidebar-open")

  // Update iframe styles based on the sidebar state
  iframes.forEach(function (iframe) {
    if (sidebar.classList.contains("open")) {
      iframe.classList.add("sidebar-open")
    } else {
      iframe.classList.remove("sidebar-open")
    }
  })
}
