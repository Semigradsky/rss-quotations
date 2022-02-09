import beQuotes from './quotes.be.js'
import enQuotes from './quotes.en.js'

export default {
  /**
   * @param {Request} request
   */
  async fetch(request) {
    console.log(request)

    const { pathname } = new URL(request.url);
    const lang = pathname.startsWith('/en') ? 'en' : 'be'
    const quote = getQuote(lang)

    return new Response(JSON.stringify(quote), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

/**
 * @param {string} lang
 */
function getQuote(lang) {
  const quotes = lang === 'en'
    ? enQuotes
    : beQuotes

  return quotes[randomNumber(0, quotes.length)]
}

/**
 * @param {number} min
 * @param {number} max
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
