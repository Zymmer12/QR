const db = require('./database');

try {
    const queues = db.prepare('SELECT * FROM queues').all();
    console.log('Current Queues:', JSON.stringify(queues, null, 2));
} catch (err) {
    console.error('Error reading DB:', err);
}
