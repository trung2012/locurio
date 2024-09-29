import express from 'express';
import { scrape } from './scrape.js';
import cron from 'node-cron';

const app = express();
const port = 3000;

scrape(5);
setTimeout(() => {
  scrape(6);
}, 10000);

cron.schedule('*/22 * * * *', () => {
  scrape(5);

  setTimeout(() => {
    scrape(6);
  }, 10000);
});

app.listen(port, () => {
  console.log(`Scraping server listening on port ${port}`);
});
