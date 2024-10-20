document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput) {
        addUserMessage(userInput);
        getBotResponse(userInput); // Appel à l'IA pour répondre
    }
});

function addUserMessage(message) {
    const chatContainer = document.querySelector('.chat-container');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'chat-message user-message';
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatContainer.appendChild(userMessageDiv);
    document.getElementById('userInput').value = '';
}

function addBotMessage(message) {
    const chatContainer = document.querySelector('.chat-container');
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'chat-message bot-message';
    botMessageDiv.innerHTML = `<p>${message}</p>`;
    chatContainer.appendChild(botMessageDiv);
}

// Zone pour ajouter une IA
function getBotResponse(message) {
    // Utilisation d'une IA comme ChatGPT pour générer la réponse
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE_API' // Ajouter votre clé API ici
        },
        body: JSON.stringify({
            prompt: message,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        const botResponse = data.choices[0].text.trim();
        addBotMessage(botResponse);
    })
    .catch(error => {
        console.error('Erreur:', error);
        addBotMessage("Désolé, je n'ai pas pu répondre à votre question.");
    });
}
