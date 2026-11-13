import { db } from '../db/client.js';
export async function createOrder(userId, items) {
  return db.client.query('insert into orders (user_id) values (1)');
}
