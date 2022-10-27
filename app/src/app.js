
import './app-root.js'
import {RestClient} from "./core/rest-client.js";



const element = document.createElement('app-root');
document.body.appendChild(element);

//
// const elem = document.createElement('app-user-list');
// document.body.appendChild(elem);


RestClient.call('/api/users/login', {
    id: 1234,
    userName:'adfsda'
}, RestClient.methods.get)