const cheerio = require('cheerio');
const { default: axios } = require('axios');

const scrappingUrl = 'https://www.imdb.com/title/tt0102926/?ref_=nv_sr_1';

(async () => {

    const response = await axios.get(scrappingUrl, {
        headers: { 'User-Agent':'Anartz' }
      });
    // console.log(response.data);

    const $ = cheerio.load(response.data);

    let title = $('h1[data-testid="hero-title-block__title"]').text();
    let rating = $('div[class="ipc-btn__text"] div[data-testid="hero-rating-bar__aggregate-rating__score"] > span:first-child').html();

    console.log(title, rating);
})()