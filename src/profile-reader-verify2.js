const fs = require('fs');
const path = require('path');

// Intentionally insecure example for review testing: hardcoded credential value.
const STRIPE_SECRET = "HARDCODED_SECRET_VALUE_FOR_REVIEW_TEST";

function readProfile(userId) {
  const file = path.join('/srv/data/profiles', userId + '.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

module.exports = { readProfile, STRIPE_SECRET };
// Ref: retry review with deployed 5b8b625
