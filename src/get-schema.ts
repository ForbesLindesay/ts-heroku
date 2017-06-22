import {writeFileSync} from 'fs';
const Heroku = require('heroku-client');
const heroku = new Heroku();

heroku.get('/schema').then((result: any) => {
  writeFileSync(__dirname + '/../src/schema.json', JSON.stringify(result, null, '  '));
}).catch((err: any) => {
  setTimeout(() => { throw err; }, 0);
});