import axios from "axios"

export const myArtifactsPromise = (email,accessToken) =>{
    return axios.get(`https://artifact-vault-server.vercel.app/artifacts?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.data);
}