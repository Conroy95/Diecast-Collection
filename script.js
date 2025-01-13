// Array met verzamelde miniatuur auto's
const autoData = [
    {
        merk: "Ferrari",
        model: "F40",
        jaar: "1987",
        schaal: "1:18",
        categorie: "Sportwagen",
        opmerking: "Uitgebracht ter gelegenheid van het 40-jarig jubileum.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ferrari_Logo.svg/1200px-Ferrari_Logo.svg.png"
    },
    {
        merk: "Porsche",
        model: "911",
        jaar: "1965",
        schaal: "1:24",
        categorie: "Sportwagen",
        opmerking: "De iconische Porsche 911.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Porsche_logo_2012.svg/1200px-Porsche_logo_2012.svg.png"
    },
    {
        merk: "Volkswagen",
        model: "Beetle",
        jaar: "1968",
        schaal: "1:32",
        categorie: "Volkswagen",
        opmerking: "De klassieke Volkswagen Kever.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png"
    }
];

// Functie om de gegevens in de tabel te plaatsen
function renderTable() {
    const tableBody = document.querySelector('#auto-table tbody');
    autoData.forEach(auto => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${auto.merk}</td>
            <td>${auto.model}</td>
            <td>${auto.jaar}</td>
            <td>${auto.schaal}</td>
            <td>${auto.categorie}</td>
            <td>${auto.opmerking}</td>
            <td><img src="${auto.logo}" alt="${auto.merk} logo"></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Laad de tabel
renderTable();
