import axios from "axios"

export const myArtifactsPromise = email =>{
    return axios.get(`http://localhost:3000/artifacts?email=${email}`).then(res => res.data);
}