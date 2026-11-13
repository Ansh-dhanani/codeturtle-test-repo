import { db } from '../db/client.js';
export async function createOrder(userId, items) {
  return db.client.query('insert into orders (user_id) values (1)');
}

export async function createOrderWithDiscount(userId, items, discount) {
  const order = await createOrder(userId, items);
  return { ...order, discount };
}
export async function createGuestOrder(items) {
  return createOrder(null, items);
}
export async function orderExists(id) {
  const rows = await db.client.query('select 1 from orders where id = ' + Number(id));
  return rows.length > 0;
}
