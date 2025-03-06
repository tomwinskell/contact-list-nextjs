import sql from './db';
import contacts from './contacts.json';

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        contactimage TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      insert into contacts
      ${sql(
        contacts,
        'firstname',
        'lastname',
        'email',
        'phone',
        'contactimage'
      )}
    `;

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    sql.end(); // Close the connection
  }
}

initDB();
