const db = require(".")

const seedDatabase = async () => {
    return await db.query(
        '\
        DROP TABLE IF EXISTS USERS; \
        DROP TABLE IF EXISTS STUDENTS; \
        DROP TABLE IF EXISTS ASSESSMENTS; \
        \
        /* A bunch of other CREATE and INSERT statements can go here to populate \
        these tables with simple dummy data we can test with. */ \
        \
        CREATE TABLE users ( \
            email VARCHAR ( 255 ) UNIQUE NOT NULL, \
            created_on TIMESTAMP, \
            last_login TIMESTAMP \
        ); \
        \
        INSERT INTO users(email) VALUES \
        (\'i.kissani@aui.ma\'); \
        '
    );
}
