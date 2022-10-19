
import './app-root.js'
import {RestClient} from "./core/rest-client.js";
import './components/app-input.js';

const element = document.createElement('app-input');
document.body.appendChild(element);

RestClient.call('/api/users/login', {
    id: 1234,
    userName:'adfsda'
}, RestClient.methods.get)