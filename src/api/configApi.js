import axios from "axios";
// const config = require("./default.json");
export default function getDataFromApi(
  endpoint,
  method = "GET",
  body,
  contentType = "application/json; charset=utf8; odata.metadata=minimal; odata.streaming=true"
) {
  return axios({
    headers: {
      "Content-Type": contentType,
      "x-rapidapi-key": "2d7638c775b69a1a24c8fef59e27c98c",
      "x-rapidapi-host": "v3.football.api-sports.io",
      Accept: "application/json",
    },
    method: method,
    url: `https://v3.football.api-sports.io/${endpoint}`,
    data: body,
  });
}
