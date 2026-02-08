const btn = document.getElementById('toggle-btn');

// 1. Get initial state
chrome.storage.local.get(['protectionActive'], (res) => {
    const isActive = res.protectionActive ?? true;
    updateUI(isActive);
});

// 2. Handle clicks
btn.onclick = () => {
    chrome.storage.local.get(['protectionActive'], (res) => {
        const newState = !(res.protectionActive ?? true);
        chrome.storage.local.set({ protectionActive: newState }, () => {
            updateUI(newState);
        });
    });
};

function updateUI(active) {
    btn.innerText = active ? "ON" : "OFF";
    btn.style.backgroundColor = active ? "#4CAF50" : "#f44336";
}