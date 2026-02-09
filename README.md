SCube – Semantic Spoiler Shield (v1.1.0)
Browse the web without fear. SCube is a lightweight Chrome extension that intelligently blurs spoiler-related content across any website.

🛡️ The Problem
You’re five episodes behind on your favorite show, and one accidental scroll through a blog or social feed ruins the entire season. SCube fixes this by acting as a real-time semantic filter for your browser.

✨ Key Features
Dynamic Detection: Scans text in real-time, including elements hidden within the Shadow DOM.

Hover-to-Reveal: Keep the mystery alive—simply hover over blurred text to reveal it instantly.

Custom Watchlists: Input specific movie or series titles to target protection.

Seamless UI: A modern dark-mode interface with green accents and smooth CSS transitions.

One-Click Controls: Toggle protection on/off or reset settings instantly via the popup menu.

🛠️ Technical Breakdown
SCube is built to be lightweight and non-intrusive:

Manifest V3: Built on the latest Chrome extension standards for better security and performance.

MutationObserver: Monitors the DOM for dynamically loaded content (infinite scrolls, AJAX updates).

Chrome Storage API: Uses storage.sync to keep your preferences consistent across devices.

Semantic Keywords: Includes a pre-built dictionary of "spoiler-heavy" terms (e.g., death, twist, ending, secret).

🚀 Installation (Developer Mode)
Clone the repository:

Bash
git clone https://github.com/Omar-VF/SSS-Extention.git
Open Chrome and navigate to chrome://extensions/.

Enable "Developer mode" in the top right corner.

Click "Load unpacked" and select the project folder.

📖 Usage
Click the SCube icon in your extension toolbar.

Enter the names of the shows/movies you want to block.

Ensure the Protection Toggle is set to "ON."

Browse any site—spoiler-heavy sentences will be automatically blurred!

🧪 Use Cases
Social Media: Scroll through Twitter or Reddit safely after a big movie premiere.

Review Sites: Read technical reviews of media without seeing plot points.

News Feeds: Avoid "clickbait" headlines that reveal character deaths or twists.

