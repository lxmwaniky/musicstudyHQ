import pg from "pg"
import { KEYS } from "./keys.js";

const { Client } = pg;

export const client = new Client({
    connectionString: `postgresql://${KEYS.DB_USER}:${KEYS.DB_PASSWORD}@${KEYS.DB_HOST}:${KEYS.DB_PORT}/${KEYS.DB_NAME}`
}) 