import axios from 'axios';

async function getData(userId) {
    const { data: user } = await axios
        ("https://jsonplaceholder.typicode.com/users/${id}");
    const { data: posts } = await axios
        ("https://jsonplaceholder.typicode.com/posts?userId=${id}");
    const newReq = { firstReq, Posts: secondReq }; 
    console.log(newReq);
}
export default getData;