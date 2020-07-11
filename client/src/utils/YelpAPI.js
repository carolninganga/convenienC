import axios from 'axios';
export default {
    search: (term,location) =>
        axios({
            'method': 'GET',
            // 'url': `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${Number(latitude)}&longitude=${Number(longitude)}?location=${location}`,
            'url': `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}`,

            'headers': {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}` 
            }
        })
}

