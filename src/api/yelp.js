import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer Q8ps_mfwGYke_XJ55IoAJsTGF8gZ2vCLnepm6JE57YCt6PnnDNEwNTlanNRCP9LQmaoXN7iJ_3XpzXxooLsafERbowLOaH_6ouRy71mvUOvNPxhB73uDEpcrhq5mY3Yx',
    },
});
