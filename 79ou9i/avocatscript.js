// Gestion des boutons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + " sélectionné");
    });
});
