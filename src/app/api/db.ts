import postgres from 'postgres'

const sql = postgres('postgresql://contacts_owner:npg_fqJAnoSidv97@ep-restless-truth-a8h0kyos-pooler.eastus2.azure.neon.tech/contacts?sslmode=require')

export default sql