function extractLanguage(locale) {
  return locale.substring(0, 1);
}

function extractRegion(locale) {
  return locale.split('_', '.', '-')[1];
}

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet(locale) {
  switch (extractRegion(locale)) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(extractLanguage(locale));
  }
}