import { Pool } from 'pg';

const connectionString = 'postgres://ezgggwst:e1gonLhAWJ6xOvTd-R0pAmr_ECXorOwa@chunee.db.elephantsql.com/ezgggwst';
const db = new Pool({ connectionString });

export default db;
