# Quotations API

This is Quotations API for [RSS task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-4.md).


## Usage

GET https://rss-quotations.semigradsky.workers.dev/

```json
{
    "author": "Васіль Быкаў",
    "text": "Я ‒ беларус, мая родная мова ‒ беларуская"
}
```

## How to add new quotes

Edit quotes file (`quotes.be.yaml`, `quotes.en.yaml`) and send PR.

## Hosting API on own url

You can publish it on [your own cloudflare worker](https://workers.cloudflare.com/).
