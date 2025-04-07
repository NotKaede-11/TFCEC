# TFCEC - Top Free Chess Engine Championship

![Tournament Banner](https://img.shields.io/badge/Chess-Tournament-green)

## 📋 About

TFCEC (Top Free Chess Engine Championship) is a tournament showcasing the strongest free chess engines available. This project contains the website that displays the tournament results, rankings, and provides downloadable PGN files of the matches.

## 🏆 Tournament Details

- **Start Date:** March 28, 2025
- **End Date:** April 2, 2025
- **Location:** WINRINAFLES, Philippines
- **Time Control:** Blitz 1/1
- **Number of Games:** 702

## 💻 System Specifications

- **Hardware:** 12th Gen Intel Core i5-12450H with 15.7 GB Memory
- **Operating System:** Windows 10 Home Edition (Build 9200) 64-bit
- **Benchmark:** ArenaMark: 55.38 AM, 3.24 EF

## ⚠️ Important Note on Engine Ratings

The engine ratings used in this tournament are based on CCRL's 40/15 rating list (available at [CCRL 40/15](http://computerchess.org.uk/ccrl/4040/)) rather than blitz ratings. This was an oversight on my part as I wasn't aware of the separate blitz rating lists for these engines at the time of the tournament. Please consider this when comparing the performance of engines in this blitz time control tournament.

## 🔝 Top Engines

The tournament featured 27 of the strongest free chess engines, including:

1. Stockfish
2. ShashChess
3. Obsidian
4. Alexandria
5. And many more powerful engines

## 🌟 Features

- Interactive tournament results table
- Sortable columns for easy comparison
- Country flags for engine authors
- Downloadable PGN file containing all tournament games
- Responsive design for desktop and mobile viewing

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Arena Chess GUI (for tournament hosting)

## 📥 Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/tfcec-tournament.git
   ```

2. Open `index.html` in your browser to view the tournament results.

3. Click on the table headers to sort the results by different criteria.

4. Download the PGN file to analyze the games in your favorite chess software.

## 🎮 Running Your Own Tournament

If you want to run your own chess engine tournament:

1. Download and install [Arena Chess GUI](http://www.playwitharena.net/)
2. Collect and configure the chess engines you want to include
3. Set up a tournament in Arena with your desired time controls
4. Export the results and PGN files
5. Update the data in `scripts.js` with your tournament results

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgements

- All chess engine authors for their incredible work
- Arena Chess GUI for tournament hosting capabilities
- [CCRL](http://computerchess.org.uk/ccrl/) for their comprehensive chess engine rating lists
