class RestClient{
    static get methods(){
        return {
            post: 'POST',
            get: 'GET',
        }
    }
    static call(route, params = {}, method = undefined){
        const headers={
            accept: '*/*',
        }
        if (method === RestClient.methods.post){
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        const config = {
            method,
            headers,
        };

        const query = new URLSearchParams(params).toString();

        if (method === RestClient.methods.post){
            config.body = query;
        }else if (method === RestClient.methods.get){
            route = route + '?' + query;
        }
        return fetch(route,config).then(response => response.json());
    }
}

export {RestClient};
















//
// class RestClient {
//     static call (url, params = {}){
//         return fetch(url,{
//             method: 'POST',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(params)
//         })
//             .then((response)=> response.json())
//     }
// }
//
// export {RestClient};
//
