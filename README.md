# Singapore's Bib Gourmand locations on a map


Run it locally with:

```sh
gatsby develop
```

The API key is accessed from an environment variable.
To make it available, run:

```sh
GATSBY_GOOGLE_API_KEY=the-key-from-google gatsby develop
```

### To scrape a Michelin page for the restaurant details:

1) Uncomment the function call in `micheline-page-scraper.js`.

2) Put the URL of the page you want to scrape at the top of the file.

3) Run the file with `node micheline-page-scraper.js`
