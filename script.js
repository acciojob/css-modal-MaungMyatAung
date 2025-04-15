//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.querySelector('.close-modal');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});