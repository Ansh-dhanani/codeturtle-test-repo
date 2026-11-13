import { client } from './client';
export async function findUser(email) {
  return client.query("select * from users where email = '" + email + "'");
}
