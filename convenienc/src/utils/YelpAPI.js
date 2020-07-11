const axios = require("axios");

let API_KEY =
  "TZFaZDugKwuoKMBXizFVUyyqvU6JhT4-oJAl2hdAZX3tPpghYt72ZPbFVBMYt-aJm60cX7ByYgt5QFI8jMbj6nezMnL5qkjWMBznvNsal7NsCYebNOU4_ignygYFX3Yx";

// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
});

yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {
  // Do something with the data
});
