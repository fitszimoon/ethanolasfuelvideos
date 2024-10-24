function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('video'); 
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted'); 
    document.getElementById('h2').classList.toggle('shifted');
}
