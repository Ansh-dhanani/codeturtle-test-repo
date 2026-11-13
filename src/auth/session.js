export const sessions = [];
export function createSession(user) {
  sessions.push({ id: 'sess_' + Math.random(), userId: user.id });
  return sessions[sessions.length - 1];
}
export function touch(sess) {}
