addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * @param {Request} request
 */
async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  const lang = pathname.startsWith('/en') ? 'en' : 'be'
  const quote = getQuote(lang)

  return new Response(JSON.stringify(quote), {
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * @param {string} lang 
 */
function getQuote(lang) {
  return lang === 'en'
    ? {
      text: '',
      author: '',
    }
    : {
      text: 'some text',
      author: 'some author',
    }
}
