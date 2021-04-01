import Axios from 'axios';

// PUT, PATCH, or POST

Axios.put("http://localhost:45030/test", {
    name: "Dan",
    thing: 1
}).then
(response => {
    console.log(response.data);
});