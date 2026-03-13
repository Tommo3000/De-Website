document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar_item a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load the first page by default
    loadPage('home');
});

function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
            console.error('Failed to load page:', err);
            document.getElementById('content').innerHTML = '<p>Page not found.</p>';
        });
}
