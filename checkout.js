// checkout.js
// Update the copyAddress function in checkout.js
function copyAddress(cryptoType) {
    const address = document.getElementById(`${cryptoType}-address`);
    navigator.clipboard.writeText(address.innerText).then(() => {
        showNotification('Address copied to clipboard!');
    }).catch(err => {
        showNotification('Failed to copy address');
        console.error('Copy error:', err);
    });
}

// Add this new function
function showNotification(message) {
    const notif = document.querySelector('.notification');
    notif.textContent = message;
    notif.classList.add('show');
    
    setTimeout(() => {
        notif.classList.remove('show');
    }, 2000);
}

// Add crypto selection functionality
document.querySelectorAll('.crypto-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.crypto-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
