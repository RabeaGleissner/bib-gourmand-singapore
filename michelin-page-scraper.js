const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://guide.michelin.com/sg/en/singapore-region/singapore/restaurant/eminent-frog-porridge-seafood-lor-19';

const makeRequest = async () => {
  const response = await rp(url);
  const title = ($('.restaurant-details__heading--title', response).html());
  const address = ($('.restaurant-details__heading--list li', response).first().text());
  const opinion = ($('.js-show-description-text', response).text().trim());
  const coords = ($('.google-map__static', response).html());
  console.log('- name: \'' + title + '\'');
  console.log('  address: \'' + address + '\'');
  console.log('  opinion: \"' + opinion + '\"');
  const coordsArray = coords.split('&amp;q=')[1].split('">')[0].split(',')
  console.log('  coords:')
  console.log('    lat:', coordsArray[0])
  console.log('    lng:', coordsArray[1])
}

//makeRequest()
