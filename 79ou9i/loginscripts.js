document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Connexion réussie !');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

document.getElementById('connectBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});
