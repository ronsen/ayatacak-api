import axios from "axios";
import * as cheerio from 'cheerio';

export const alkitab = async (version, verse) => {
    let url = 'https://alkitab.mobi/tb/passage/' + encodeURIComponent(verse);

    if (version == 'TOBA') {
        url = 'https://alkitab.mobi/toba/passage/' + encodeURIComponent(verse);
    }

    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let content = $('div:nth-child(5) .style1')
        .map((i, el) => {
            let text = $(el).text();
            let firstAlphabetical = (text.match(/[a-zA-Z]/) || []).pop();
            text = text.substring(text.indexOf(firstAlphabetical), text.length + 1);

            return text;
        }).toArray().join(' ');

    return { verse, content };
}