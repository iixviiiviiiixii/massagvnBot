const { Telegraf } = require('telegraf');
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : ''}! Перейдите по ссылке, чтобы увидеть список салонов и медицинских учреждений, где можно сделать массаж в Великом Новгороде. http://massagvn.ru/`));
bot.launch();


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));