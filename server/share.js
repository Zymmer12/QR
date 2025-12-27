const ngrok = require('ngrok');
const nodemon = require('nodemon');
const path = require('path');

// 1. Start the Server
const serverScript = path.join(__dirname, 'index.js');

console.log('Starting Local Server...');

// Monitor and start the server
nodemon({
    script: serverScript,
    ext: 'js json'
});

nodemon.on('start', async () => {
    // 2. Start Ngrok Tunnel once server is running
    try {
        const url = await ngrok.connect(3000);
        console.log('\n==================================================');
        console.log('  ONLINE URL (For LINE LIFF):');
        console.log(`  ${url}`);
        console.log('==================================================\n');
        console.log('Use this URL in your LINE Developers Console -> LIFF -> Endpoint URL');
        console.log('Example for Queue 1: ' + url + '/queue/1\n');
    } catch (err) {
        console.error('Ngrok Error:', err);
    }
}).on('quit', () => {
    console.log('Server stopped.');
    ngrok.kill();
    process.exit();
});
