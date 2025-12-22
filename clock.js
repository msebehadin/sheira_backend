setInterval(() => {
    const now = new Date();
    const hour=now.getHours()
    const minute=now.getMinutes();
const second=now.getSeconds();
    console.log(`Current time:, ${hour}:${minute}:${second}`);
}, 1000);
