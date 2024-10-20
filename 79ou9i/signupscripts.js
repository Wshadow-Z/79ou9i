document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[placeholder="Nom & Prénom"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (name && email && password) {
        alert('Inscription réussie !');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
