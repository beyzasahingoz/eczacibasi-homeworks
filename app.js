import axios from 'axios'; //axios kütüphanesi import edildi.

async function getData(userId) {
    //user için istek yollandı.
    const { data: user } = await axios
        ("https://jsonplaceholder.typicode.com/users/${id}");
    //post için istek yollandı.
    const { data: posts } = await axios
        ("https://jsonplaceholder.typicode.com/posts?userId=${id}");
    //istekler yeni istek altında toplandı ve konsolda görüntülendi.
    const newReq = { firstReq, Posts: secondReq }; 
    console.log(newReq);
}
export default getData; //getdata export edildi.
