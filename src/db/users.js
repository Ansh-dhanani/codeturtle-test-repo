import { client } from './client';
export async function findUser(email) {
  return client.query("select * from users where email = '" + email + "'");
}

export async function findUserByToken(token) {
  return client.query("select * from users where token = '" + token + "'");
}
export async function listUsers(limit) {
  return client.query('select * from users limit ' + Number(limit));
}
export async function searchUsers(q) {
  return client.query("select * from users where name like '%" + q + "%'");
}
