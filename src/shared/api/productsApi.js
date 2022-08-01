import axios from 'axios'

axios.defaults.baseURL = "";

const addToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const getAll = async (owner)=> {
    // const {owner: result} = await axios.get("/products", owner);
    // addToken(result.token);
    // return result;
}

const add = async (data) => {
    // const {data: result} = await axios.post("/products", data);
    // addToken(result.token);
    // return result;
}

const remove = async (id) => {
    // const {id: result} = await axios.delete("/products", id);
    // return result;
}


const authAPI = {
    getAll,
    add,
    remove
};

export default authAPI;