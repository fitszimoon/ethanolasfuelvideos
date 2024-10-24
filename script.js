function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('video'); 
    var iframes = document.querySelectorAll('iframe');  // Use the correct variable name
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted'); 
    document.getElementById('h1').classList.toggle('shifted');
    document.getElementById('h2').classList.toggle('shifted');
    document.body.classList.toggle('sidebar-open');
    
    iframes.forEach(function(iframe) {
        if (sidebar.classList.contains('open')) {
            iframe.classList.add('sidebar-open');
        } else {
            iframe.classList.remove('sidebar-open');
        }
    });
}
