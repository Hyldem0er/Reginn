browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
      browser.tabs.executeScript({
        file: 'recon.js',
        frameId: 0
      }).then(() => {
        browser.tabs.executeScript({
          code: '(' + function() {
            var results = recon();
            return results;
          } + ')();',
          frameId: 0
        }).then((results) => {
          if (results && results[0]) {
            var result = results[0];
            console.log('Résultats de la reconnaissance:', result);
            // You can do something with the results here, such as send them to a popup or store them in a database.
          }
        }).catch((error) => {
          console.error(`Erreur lors de l'exécution du script : ${error}`);
        });
      }).catch((error) => {
        console.error(`Erreur lors de l'injection du script : ${error}`);
      });
    }
  });
  