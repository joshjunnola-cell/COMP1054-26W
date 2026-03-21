// Keep the clicked tab highlighted
const tabs = document.querySelectorAll('.tabs [role="tab"] a');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add active to the clicked tab
        tab.classList.add('active');
    });
});
