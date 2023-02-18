function updateClock() {
    const now = new Date();
    const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
            <rect width='100%' height='100%' fill='transparent'/>
            <text x='50%' y='50%' font-size='32' font-family='Arial' fill='white'
                  text-anchor='middle' dominant-baseline='middle'>${String(now.getMinutes()).padStart(2, '0')}</text>
        </svg>`;
    browser.browserAction.setIcon({ path: `data:image/svg+xml;base64,${btoa(svg)}` });
}
updateClock();
setInterval(updateClock, 60000);
