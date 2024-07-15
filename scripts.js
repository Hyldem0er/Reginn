/* scripts.js */
function loadContent(tabName, url) {
    var i, tabcontent, tablinks;

    // Cacher tous les contenus des onglets
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retirer la classe "active" de tous les boutons des onglets
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Afficher l'onglet sélectionné et ajouter la classe "active" au bouton correspondant
    document.getElementById(tabName).style.display = "block";
    document.querySelector(`button[data-tab="${tabName}"]`).className += " active";

    // Charger le contenu HTML externe
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log('Données chargées:', data);
            document.getElementById(tabName).innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur de chargement:', error);
            document.getElementById(tabName).innerHTML = '<p>Erreur de chargement du contenu</p>';
        });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tablinks').forEach(button => {
        button.addEventListener('click', function (event) {
            const tabName = event.currentTarget.getAttribute('data-tab');
            const url = tabName === 'RECON' ? 'recon.html' : 'seo.html';
            loadContent(tabName, url);
        });
    });

    // Ouvrir le premier onglet par défaut
    document.querySelector('.tablinks[data-tab="RECON"]').click();
});
