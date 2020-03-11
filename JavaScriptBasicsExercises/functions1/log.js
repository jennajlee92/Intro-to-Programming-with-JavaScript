// logs Brendan Eich's quote

function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

brendanEichQuote();

function cite(auth, quo) {
  console.log(`${auth} said: "${quo}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."