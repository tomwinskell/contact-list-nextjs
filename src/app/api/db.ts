import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(process.env.DATABASE_URL as string);

export default sql;
