(function() {
    let lastTick = Date.now();
    const updateClock = () => {
        const now = Date.now();
        lastTick = now;
        browser.browserAction.setIcon({
            path: `data:image/svg+xml;base64,${btoa(`
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
                    <rect width='100%' height='100%' fill='transparent'/>
                    <text x='50%' y='50%' font-size='32' font-family='Arial' fill='white'
                          text-anchor='middle' dominant-baseline='middle'>
                          ${String(new Date().getHours()).padStart(2, '0')}
                    </text>
                </svg>`
            )}`
        });
    };

    const syncClock = () => {
        updateClock();
        const now = new Date();
        const msUntilNextHour =
            (60 - now.getMinutes()) * 60 * 1000 -
            now.getSeconds() * 1000 -
            now.getMilliseconds();
        setTimeout(syncClock, msUntilNextHour);
    };

    setInterval(() => {
        const now = Date.now();
        if (now - lastTick > 1 * 60 * 1000) {
            syncClock();
        }
    }, 60 * 1000);
    syncClock();
})();
