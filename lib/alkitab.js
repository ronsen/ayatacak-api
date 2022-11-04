import axios from "axios";
import * as cheerio from 'cheerio';

export const alkitab = async (version, verse) => {
    let url = `https://alkitab.mobi/${version}/passage/` + encodeURIComponent(verse);

    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let content = $('div:nth-child(5) .style1')
        .map((i, el) => {
            $('.reftext').remove();
            let text = $(el).text();
            return text;
        }).toArray().join(' ');

    return { verse, content };
}