document.addEventListener('DOMContentLoaded', function() {
    // Tournament data
    const tournamentData = [
        {
            rank: 1,
            engine: "Stockfish-windows-x86-64-bmi2",
            author: "Marco Costalba",
            country: "italy",
            rating: 3641,
            score: "37.0/52",
            percentage: 71.1,
            sb: 932.25
        },
        {
            rank: 2,
            engine: "ShashChess38-x86-64-bmi2",
            author: "A. Manzo, F. Ferraguti, K. Kiniama and Stockfish developers (see AUTHORS file)",
            country: "",
            rating: 3639,
            score: "33.5/52",
            percentage: 64.4,
            sb: 845.50
        },
        {
            rank: 3,
            engine: "Obsidian150-avx2-pext",
            author: "Gabriele Lombardo",
            country: "",
            rating: 3623,
            score: "32.0/52",
            percentage: 61.5,
            sb: 809.00
        },
        {
            rank: 4,
            engine: "Alexandria-8.0-bmi2",
            author: "Normand M. Blais",
            country: "usa",
            rating: 3607,
            score: "31.0/52",
            percentage: 59.6,
            sb: 773.25
        },
        {
            rank: 5,
            engine: "Integral_avx2_bmi2",
            author: "Aron Petkovski",
            country: "",
            rating: 3603,
            score: "30.5/52",
            percentage: 58.6,
            sb: 763.00
        },
        {
            rank: 6,
            engine: "PlentyChess-5.0.0-windows-bmi2",
            author: "Yoshie2000",
            country: "",
            rating: 3615,
            score: "29.5/52",
            percentage: 56.7,
            sb: 734.50
        },
        {
            rank: 7,
            engine: "Starzix-6.0-avx2",
            author: "zzzzz",
            country: "",
            rating: 3603,
            score: "29.0/52",
            percentage: 55.7,
            sb: 734.00
        },
        {
            rank: 8,
            engine: "Motor_080_avx2",
            author: "Martin Novak",
            country: "",
            rating: 3562,
            score: "28.5/52",
            percentage: 54.8,
            sb: 720.50
        },
        {
            rank: 9,
            engine: "Caissa-1.21-x64-avx2-bmi2",
            author: "Michal Witanowski",
            country: "",
            rating: 3613,
            score: "28.5/52",
            percentage: 54.8,
            sb: 704.50
        },
        {
            rank: 10,
            engine: "RubiChess-20240817_x86-64-bmi2",
            author: "Andreas Matthies",
            country: "",
            rating: 3601,
            score: "28.0/52",
            percentage: 53.8,
            sb: 701.75
        },
        {
            rank: 11,
            engine: "Berserk-13-avx2-pext",
            author: "Jay Honnold",
            country: "",
            rating: 3616,
            score: "27.5/52",
            percentage: 52.8,
            sb: 696.75
        },
        {
            rank: 12,
            engine: "Horsie-1_0-v3",
            author: "Liam McGuire",
            country: "",
            rating: 3602,
            score: "27.0/52",
            percentage: 51.9,
            sb: 680.50
        },
        {
            rank: 13,
            engine: "Clover.8.1-avx2",
            author: "Luca Metehau",
            country: "",
            rating: 3597,
            score: "27.0/52",
            percentage: 51.9,
            sb: 673.50
        },
        {
            rank: 14,
            engine: "Lizard-11_2-win",
            author: "Liam McGuire",
            country: "",
            rating: 3602,
            score: "25.5/52",
            percentage: 49.0,
            sb: 648.75
        },
        {
            rank: 15,
            engine: "Quanticade_bmi2",
            author: "DarkNeutrino",
            author: "DarkNeutrino",
            country: "",
            rating: 3572,
            score: "25.0/52",
            percentage: 48.0,
            sb: 640.25
        },
        {
            rank: 16,
            engine: "Viridithas-16.0.0-win-x86-64-v3",
            author: "Cosmo",
            country: "",
            rating: 3605,
            score: "25.0/52",
            percentage: 48.0,
            sb: 637.25
        },
        {
            rank: 17,
            engine: "Velvet-v8.1.1-x86_64-avx2",
            author: "Martin Honert",
            country: "",
            rating: 3578,
            score: "25.0/52",
            percentage: 48.0,
            sb: 627.25
        },
        {
            rank: 18,
            engine: "Fat-Fritz-2_Windows_x86-64-avx2",
            author: "Stockfish Devs and Albert Silver (neural network)",
            country: "",
            rating: 3601,
            score: "24.5/52",
            percentage: 47.1,
            sb: 619.00
        },
        {
            rank: 19,
            engine: "Booot7_avx_pext",
            author: "Alex Morozov",
            country: "ukraine",
            rating: 3543,
            score: "23.5/52",
            percentage: 45.1,
            sb: 590.75
        },
        {
            rank: 20,
            engine: "Titan-x64-windows-avx2",
            author: "Jeff Powell",
            country: "",
            rating: 3588,
            score: "23.0/52",
            percentage: 44.2,
            sb: 583.00
        },
        {
            rank: 21,
            engine: "Uralochka3.41a-avx2",
            author: "Ivan Maklyakov",
            country: "",
            rating: 3584,
            score: "23.0/52",
            percentage: 44.2,
            sb: 579.00
        },
        {
            rank: 22,
            engine: "Koivisto_9.0-windows-avx2-pgo",
            author: "K. Kahre, F. Eggers",
            country: "",
            rating: 3560,
            score: "22.5/52",
            percentage: 43.2,
            sb: 559.50
        },
        {
            rank: 23,
            engine: "Fire-9.3_x64_avx2",
            author: "Norman Schmidt",
            country: "",
            rating: 3555,
            score: "21.5/52",
            percentage: 41.3,
            sb: 522.00
        },
        {
            rank: 24,
            engine: "Clarity_x86-64-v3_BMI2",
            author: "Vast",
            country: "",
            rating: 3572,
            score: "20.5/52",
            percentage: 39.4,
            sb: 514.50
        },
        {
            rank: 25,
            engine: "RofChadeBMI2AVX2",
            author: "Ronald Friederich",
            country: "",
            rating: 3572,
            score: "18.5/52",
            percentage: 35.5,
            sb: 482.50
        },
        {
            rank: 26,
            engine: "Peacekeeper-301-avx2",
            author: "Kyle Zhang",
            country: "",
            rating: 3555,
            score: "18.0/52",
            percentage: 34.6,
            sb: 446.00
        },
        {
            rank: 27,
            engine: "Arasanx-64-avx2-bmi2",
            author: "Jon Dart",
            country: "usa",
            rating: 3546,
            score: "17.5/52",
            percentage: 33.6,
            sb: 447.75
        }
    ];

    // Function to get flag image HTML
    function getFlagHtml(country) {
        if (!country) return '';
        return `<img src="flags/${country}.png" alt="${country} flag" class="flag-icon">`;
    }

    // Function to populate the table
    function populateTable() {
        const tableBody = document.getElementById('results-body');
        
        tournamentData.forEach(entry => {
            const row = document.createElement('tr');
            
            // Add class for top three ranks
            if (entry.rank <= 3) {
                row.classList.add('top-three');
                row.classList.add(`rank-${entry.rank}`);
            }
            
            row.innerHTML = `
                <td><strong>${entry.rank}</strong></td>
                <td class="engine-col">${entry.engine}</td>
                <td>${entry.author}</td>
                <td>${getFlagHtml(entry.country)}</td>
                <td>${entry.rating}</td>
                <td>${entry.score}</td>
                <td>${entry.percentage}</td>
                <td>${entry.sb}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    // Initialize the table
    populateTable();

    // Add sorting functionality
    document.querySelectorAll('th').forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTable(index);
        });
        header.style.cursor = 'pointer';
        header.title = 'Click to sort';
    });

    // Function to sort the table
    function sortTable(columnIndex) {
        const tableBody = document.getElementById('results-body');
        let rows = Array.from(tableBody.querySelectorAll('tr'));
        let isNumeric = columnIndex !== 1 && columnIndex !== 2 && columnIndex !== 3;
        let isAscending = true;
        
        // Check if we're reversing the current sort
        if (tableBody.dataset.sortColumn == columnIndex) {
            isAscending = tableBody.dataset.sortDirection !== 'asc';
        }
        
        // Store sort state
        tableBody.dataset.sortColumn = columnIndex;
        tableBody.dataset.sortDirection = isAscending ? 'asc' : 'desc';
        
        // Sort the rows
        rows.sort((a, b) => {
            let aValue = a.cells[columnIndex].textContent.trim();
            let bValue = b.cells[columnIndex].textContent.trim();
            
            if (isNumeric) {
                // Extract numbers from strings like "37.0/52" or "932.25"
                aValue = parseFloat(aValue.replace(/[^\d.-]/g, ''));
                bValue = parseFloat(bValue.replace(/[^\d.-]/g, ''));
            }
            
            if (isAscending) {
                return isNumeric ? aValue - bValue : aValue.localeCompare(bValue);
            } else {
                return isNumeric ? bValue - aValue : bValue.localeCompare(aValue);
            }
        });
        
        // Clear and repopulate the table
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        
        rows.forEach(row => tableBody.appendChild(row));
        
        // Update header indicators
        document.querySelectorAll('th').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
        });
        
        const currentHeader = document.querySelectorAll('th')[columnIndex];
        currentHeader.classList.add(isAscending ? 'sorted-asc' : 'sorted-desc');
    }
});
