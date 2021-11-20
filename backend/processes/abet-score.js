const db = require('../db');

const getAbetScore = async () => {
    const result = await db.query(
        'SELECT count(*) FROM students \
        GROUP BY major \
        HAVING grade >= 80'  // Grade and threshold need to be variables that are injected.
    );
    // Do more stuff with the result before returning it.
    // Namely, get percentages.
}
