const fs = require('fs');

const API_KEY = "sk_live_hardcoded_demo_key_1234567890";

function readUserProfile(userId) {
  // Reads profile from disk; userId comes from request input.
  const raw = fs.readFileSync(`/tmp/users/${userId}.json`, 'utf8');
  return JSON.parse(raw);
}

function sendWelcomeEmail(email) {
  // TODO: integrate provider
  console.log('Sending welcome email with key', API_KEY, 'to', email);
}

module.exports = { readUserProfile, sendWelcomeEmail, API_KEY };
