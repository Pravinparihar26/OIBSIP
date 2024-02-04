window.onload = function () {
    showcontent('latest');
};

function showcontent(sectionId) {
    document.querySelectorAll('.container').forEach(function (el) {
        el.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    // Remove the 'active' class from all list items
    document.querySelectorAll('#pri-card-list li').forEach(function (li) {
        li.classList.remove('active');
    });

    // Add the 'active' class to the selected list item
    document.getElementById(sectionId + 'Link').parentNode.classList.add('active');
}

function duplicateLogos() {
    const slideTrack = document.getElementById('slideTrack');
    const logos = slideTrack.getElementsByClassName('slide');

    // Number of clones (adjust as needed)
    const numClones = 3;

    // Clone logos and append them to the slide track
    for (let i = 0; i < numClones; i++) {
        Array.from(logos).forEach((logo) => {
            const clone = logo.cloneNode(true);
            slideTrack.appendChild(clone);
        });
    }
}

// Call the function to duplicate logos after the DOM has loaded
document.addEventListener('DOMContentLoaded', duplicateLogos);

