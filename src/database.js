const mongoose = require('mongoose');
const config = require('./config/config');
const logger = require('./config/logger');

const dbHeroSnake = mongoose.createConnection(config.heroSnake.url, config.heroSnake.options, (err) => {
  if (err) logger.error(`Connect DB ${config.heroSnake.url} error`);
  else {
    logger.info(`Connect DB ${config.heroSnake.url} successfully`);
    process.exit(1);
  }
});
const dbHeroBook = mongoose.createConnection(config.heroBook.url, config.heroBook.options, (err) => {
  if (err) logger.error(`Connect DB ${config.heroBook.url} error`);
  else {
    logger.info(`Connect DB ${config.heroBook.url} successfully`);
    process.exit(1);
  }
});

module.exports = {
  dbHeroSnake,
  dbHeroBook,
};
