function updateClock() {
    browser.browserAction.setIcon({
        path: `data:image/svg+xml;base64,${btoa(`
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
                <rect width='100%' height='100%' fill='transparent'/>
                <text x='50%' y='50%' font-size='32' font-family='Arial' fill='white'
                      text-anchor='middle' dominant-baseline='middle'>
                      ${String(new Date().getMinutes()).padStart(2, '0')}
                </text>
            </svg>`
        )}`
    });
}

updateClock();
setTimeout(() => {
    updateClock();
    setInterval(updateClock, 60000);
}, (60 - new Date().getSeconds()) * 1000);
