import axios from "axios";


export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

// import axios from "axios";

// export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
//     try {
//         const reqConfig = {
//             method: httpRequest,
//             url,
//             data: reqBody,
//             headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
//         };
//         const response = await axios(reqConfig);
//         return response.data; // Return only the response data
//     } catch (error) {
//         // Handle error response
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//             return error.response; // Return the error response
//         } else if (error.request) {
//             // The request was made but no response was received
//             console.log(error.request);
//             return error.request;
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log("Error", error.message);
//             return error.message;
//         }
//     }
// };
