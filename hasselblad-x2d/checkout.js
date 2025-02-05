// checkout.js
function copyAddress(cryptoType) {
    const address = document.getElementById(`${cryptoType}-address`).innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('Address copied to clipboard!');
    });
}

// Add crypto selection functionality
document.querySelectorAll('.crypto-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.crypto-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
