document.addEventListener('DOMContentLoaded', function() {
    fetch('homePage.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('page-content').innerHTML = data;
      })
      .catch(error => console.error('Error loading the page:', error));


      const textStatisticsLink = document.getElementById('text-statistics-link');
    
    // Add an event listener to handle the click
    textStatisticsLink.addEventListener('click', function(event) {
      // Prevent the default anchor link behavior
      event.preventDefault();

      // Fetch the content of textStatistics.html and inject it into the page
      fetch('textStatistics.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('page-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading the page:', error));
    });
  });

const carets = document.querySelectorAll('.caret');

    carets.forEach((caret) => {
        // Add click event to each caret
        caret.addEventListener('click', () => {
            // Toggle the rotation class for the clicked caret
            caret.classList.toggle('rotate');

            // Find the sibling child list and toggle its visibility
            const childList = caret.nextElementSibling;
            if (childList && childList.classList.contains('child-list')) {
                childList.style.display = childList.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    