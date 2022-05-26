import { API_URL } from "../env/config";

const baseManager = {

    getAll: async (url) => {
        let responseData = [];

        await fetch(API_URL + url)
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            })
            
        return responseData;
    },

    getEntityById: async (url, id) => {
        let responseData = {};

        await fetch(API_URL + url + "/" + id.toString())
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            })

        return responseData;
    }
}

export default baseManager;