import axios from "axios";
import * as cheerio from "cheerio";

export const randomVerse = async () => {
  let url = "https://dailyverses.net/random-bible-verse";

  let response = await axios.get(url);
  let body = await response.data;
  let $ = cheerio.load(body);

  return $(".content .b1 .vr .vc").html();
};
