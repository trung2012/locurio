import express from 'express';
import { scrape } from './scrape.js';

const app = express();
const port = 3000;

scrape();

app.listen(port, () => {
  console.log(`Scraping server listening on port ${port}`);
});
