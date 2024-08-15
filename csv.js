let extractedData = JSON.parse(localStorage.getItem('extractedData')) || [];

// Fonction pour nettoyer les données
function cleanData(data) {
    return data.replace(/[\r\n]+/g, '').trim();
}

// Fonction pour ajouter les données au tableau global
function addToCsvData() {
    const reconContent = document.getElementById('recon-content').innerText;
    const website = getDomain(pageUrl); 
    const cleanedContent = reconContent.replace(/UA-(\d| |\(|\)|-){6,24}/g, '');
    let regexPhoneSimplified = /(\d| |\(|\)|-){6,24}(?![a-z._])(?<![a-z._])/g;

    let phoneMatches = cleanedContent.match(regexPhoneSimplified) || [];
    console.log(reconContent);
    console.log(phoneMatches);
    let socialMediaMatches = findMatches(reconContent, regexSocialMedia);
    let googleIdsMatches = findMatches(reconContent, regexGoogleIds);
    let emailMatches = findMatches(reconContent, regexEmail);
    let cdnMatches = findMatches(reconContent, regexCDN);
    let apiMatches = findMatches(reconContent, regexAPI);

    phoneMatches.forEach(match => extractedData.push({ website, category: 'Phone', match: cleanData(match) }));
    socialMediaMatches.forEach(match => extractedData.push({ website, category: 'Social Media', match: cleanData(match) }));
    googleIdsMatches.forEach(match => extractedData.push({ website, category: 'Google ID', match: cleanData(match) }));
    emailMatches.forEach(match => extractedData.push({ website, category: 'Email', match: cleanData(match) }));
    cdnMatches.forEach(match => extractedData.push({ website, category: 'CDN', match: cleanData(match) }));
    apiMatches.forEach(match => extractedData.push({ website, category: 'API', match: cleanData(match) }));

    // Sauvegarde en local, utile pour ajouter les données de sites différents
    localStorage.setItem('extractedData', JSON.stringify(extractedData));

    alert('Data added to CSV');
}

// Fonction pour télécharger le CSV
function downloadCSV() {
    if (extractedData.length === 0) {
        alert('No data to download');
        return;
    }

    // Créer le contenu CSV
    const csvContent = [
        'Website,Category,Match',
        ...extractedData.map(row => `${row.website},${row.category},${row.match}`)
    ].join('\n');

    // Créer un Blob avec le contenu CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Reginn.csv');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Effacer les données dans localStorage après le téléchargement
    localStorage.removeItem('extractedData');
    extractedData = []; // Réinitialiser le tableau local
}

// Ajouter les gestionnaires d'événements
document.getElementById('add').addEventListener('click', addToCsvData);
document.getElementById('download').addEventListener('click', downloadCSV);
