let extractedData = JSON.parse(localStorage.getItem('extractedData')) || [];

// Remove newlines and trim whitespace from data
function cleanData(data) {
    return data.replace(/[\r\n]+|YandexID:/g, '').trim();
}


//Add the extracted data to the CSV file
function addToCsvData() {
    const reconContent = document.getElementById('recon-content').innerText;
    const regexYandexIdsInRecon = /Yandex ID :\n(\d{8})/g;
    const website = getDomain(pageUrl);
    const cleanedContent = reconContent.replace(/UA-(\d| |\(|\)|-){6,24}/g, '');
    let regexPhoneSimplified = /(\d| |\(|\)|-){6,24}(?![a-z._])(?<![a-z._])/g;

    let socialMediaMatches = findMatches(reconContent, regexSocialMedia) || [];
    let googleIdsMatches = findMatches(reconContent, regexGoogleIds) || [];
    let yandexIdsMatches = findMatches(reconContent, regexYandexIdsInRecon) || [];
    let emailMatches = findMatches(reconContent, regexEmail) || [];
    let cdnMatches = findMatches(reconContent, regexCDN) || [];
    let apiMatches = findMatches(reconContent, regexAPI) || [];
    let IPMatches = findMatches(reconContent, regexIP) || [];
    let phoneMatches = cleanedContent.match(regexPhoneSimplified) || [];
    let filteredPhoneMatches = [];

    // Extract Yandex ID numbers
    let yandexIdNumbers = Array.from(yandexIdsMatches).map(id => {
        const match = id.match(/\d+/);
        return match ? match[0] : null;
    }).filter(Boolean);

    // Filter phoneMatches to exclude those that are in googleIdsMatches or yandexIdNumbers
    filteredPhoneMatches = phoneMatches.filter(phoneMatch => {
        const cleanedPhoneMatch = phoneMatch.replace(/\D/g, '');

        const isInGoogleIds = Array.from(googleIdsMatches).some(googleIdMatch =>
            googleIdMatch.includes(cleanedPhoneMatch)
        );

        const isInYandexIds = yandexIdNumbers.includes(cleanedPhoneMatch);

        const isInSocialMedia = Array.from(socialMediaMatches).some(socialMediaMatch =>
            socialMediaMatch.includes(phoneMatch)
        );

        const isInFullUrl = fullUrl.includes(phoneMatch);

        return !(isInGoogleIds || isInSocialMedia || isInYandexIds || isInFullUrl);
    });

    // Add matches to extractedData with their respective categories
    filteredPhoneMatches.forEach(match => extractedData.push({ website, category: 'Phone', match: cleanData(match) }));
    socialMediaMatches.forEach(match => extractedData.push({ website, category: 'Social Media', match: cleanData(match) }));
    googleIdsMatches.forEach(match => extractedData.push({ website, category: 'Google ID', match: cleanData(match) }));
    yandexIdsMatches.forEach(match => extractedData.push({ website, category: 'Yandex ID', match: cleanData(match) }));
    emailMatches.forEach(match => extractedData.push({ website, category: 'Email', match: cleanData(match) }));
    cdnMatches.forEach(match => extractedData.push({ website, category: 'CDN', match: cleanData(match) }));
    apiMatches.forEach(match => extractedData.push({ website, category: 'API', match: cleanData(match) }));
    IPMatches.forEach(match => extractedData.push({ website, category: 'IP', match: cleanData(match) }));

    // Save the extracted data to local storage
    localStorage.setItem('extractedData', JSON.stringify(extractedData));

    alert('Data added to CSV');
}

// Download the extracted data as a CSV file
function downloadCSV() {
    if (extractedData.length === 0) {
        alert('No data to download');
        return;
    }

    const csvContent = [
        'Website,Category,Match',
        ...extractedData.map(row => `${row.website},${row.category},${row.match}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Reginn_extract.csv');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Clear the extracted data from local storage
    localStorage.removeItem('extractedData');
    extractedData = [];
}

/*--------------------*/
/* GRAPHML GENERATION */
/*--------------------*/

// Generate GraphML content from the extracted data
function generateGraphML(data) {
    const nodes = {};
    const edges = [];

    data.forEach(row => {
        const website = row.website;
        const match = row.match;

        // Add nodes for websites and matches
        if (!nodes[website]) {
            nodes[website] = {
                id: `n${Object.keys(nodes).length}`,
                url: escapeXML(website),
                color: '#ff4d4d',
                fontcolor: '#000000',
                label: escapeXML(website),
                shape: 'roundrectangle'
            };
        }

        if (!nodes[match]) {
            nodes[match] = {
                id: `n${Object.keys(nodes).length}`,
                url: escapeXML(match),
                color: '#748099',
                fontcolor: '#ffffff',
                label: escapeXML(match),
                shape: 'rectangle'
            };
        }

        // Add edges between website and match nodes with the type of data
        edges.push({
            id: `e${edges.length}`,
            source: nodes[website].id,
            target: nodes[match].id,
            type: row.category // Include the type of data
        });
    });

    const graphMLTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns"
         xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java"
         xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0"
         xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:y="http://www.yworks.com/xml/graphml"
         xmlns:yed="http://www.yworks.com/xml/yed/3"
         xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
    <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
    <key for="port" id="d1" yfiles.type="portgraphics"/>
    <key for="port" id="d2" yfiles.type="portgeometry"/>
    <key for="port" id="d3" yfiles.type="portuserdata"/>
    <key attr.name="url" attr.type="string" for="node" id="d4"/>
    <key attr.name="description" attr.type="string" for="node" id="d5"/>
    <key for="node" id="d6" yfiles.type="nodegraphics"/>
    <key for="graphml" id="d7" yfiles.type="resources"/>
    <key attr.name="url" attr.type="string" for="edge" id="d8"/>
    <key attr.name="description" attr.type="string" for="edge" id="d9"/>
    <key for="edge" id="d10" yfiles.type="edgegraphics"/>
    <graph edgedefault="directed" id="G">
        <data key="d0"/>
        ${generateNodes(nodes)}
        ${generateEdges(edges)}
    </graph>
    <data key="d7">
        <y:Resources/>
    </data>
</graphml>`;

    // Calculate the width of the text for node labels
    function getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }

    // Generate XML nodes from the nodes object
    function generateNodes(nodes) {
        return Object.values(nodes).map(node => {
            const labelWidth = getTextWidth(node.label, '12px Dialog') + 20;
            return `
<node id="${node.id}">
    <data key="d4" xml:space="preserve">${node.url}</data>
    <data key="d6">
        <y:ShapeNode>
            <y:Geometry height="30.0" width="${labelWidth}" x="0.0" y="0.0"/>
            <y:Fill color="${node.color}" transparent="false"/>
            <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
            <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" textColor="${node.fontcolor}" verticalTextPosition="bottom" visible="true" width="${labelWidth}" x="7.064603124999849" xml:space="preserve" y="2.2087740625000265">${node.label}<y:LabelModel><y:SmartNodeLabelModel distance="4.0"/></y:LabelModel><y:ModelParameter><y:SmartNodeLabelModelParameter labelRatioX="0.0" labelRatioY="0.0" nodeRatioX="0.0" nodeRatioY="0.0" offsetX="0.0" offsetY="0.0" upX="0.0" upY="-1.0"/></y:ModelParameter></y:NodeLabel>
            <y:Shape type="${node.shape}"/>
        </y:ShapeNode>
    </data>
</node>`;
        }).join('');
    }

    // Generate XML edges from the edges array
    function generateEdges(edges) {
        return edges.map(edge => `
<edge id="${edge.id}" source="${edge.source}" target="${edge.target}">
    <data key="d9">${edge.type}</data>
    <data key="d10">
        <y:PolyLineEdge>
            <y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
            <y:LineStyle color="#000000" type="line" width="1.0"/>
            <y:Arrows source="none" target="standard"/>
            <y:BendStyle smoothed="false"/>
            <y:EdgeLabel alignment="center" fontFamily="Dialog" fontSize="12" textColor="#000000" visible="true" modelName="tail" modelPosition="tail" preferredPlacement="target">${edge.type}</y:EdgeLabel>
        </y:PolyLineEdge>
    </data>
</edge>`).join('');
    }

    const finalGraphML = graphMLTemplate.replace('${generateNodes(nodes)}', generateNodes(nodes)).replace('${generateEdges(edges)}', generateEdges(edges));

    return finalGraphML;
}

// Escape special characters for XML
function escapeXML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&apos;');
}

/*---------------------------*/
/* END OF GRAPHML GENERATION */
/*---------------------------*/

// Download the extracted data as a GraphML file
function downloadGraphML() {
    if (extractedData.length === 0) {
        alert('No data to download');
        return;
    }

    const graphMLContent = generateGraphML(extractedData);
    const blob = new Blob([graphMLContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Reginn_graph.graphml');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Call downloadCSV to also download the CSV file
    downloadCSV(true);

    // Clear the extracted data from local storage
    localStorage.removeItem('extractedData');
    extractedData = [];
}

// Download the extracted data as a CSV file
function downloadCSV(fromGraphML = false) {
    if (extractedData.length === 0) {
        alert('No data to download');
        return;
    }

    const csvContent = [
        'Website,Category,Match',
        ...extractedData.map(row => `${row.website},${row.category},${row.match}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Reginn_extract.csv');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Clear the extracted data from local storage only if not called from downloadGraphML
    if (!fromGraphML) {
        localStorage.removeItem('extractedData');
        extractedData = [];
    }
}


// Event listeners for adding data to CSV and downloading CSV/GraphML files
document.getElementById('add').addEventListener('click', addToCsvData);
document.getElementById('download').addEventListener('click', downloadCSV);
document.getElementById('downloadGraphML').addEventListener('click', downloadGraphML);
