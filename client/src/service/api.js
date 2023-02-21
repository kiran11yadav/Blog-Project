import axios, { formToJSON } from 'axios';
import  {API_NOTIFICATION_MESSAGES,SERVICS_URLS}  from '../constant/config';

const API_URl ='http://localhost:8000';

const axiosInstance = axios.create({
    baseURL:API_URl,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    }, 
    function(err){
        return Promise.reject(err);
    }
)
axiosInstance.interceptors.request.use(
  function (response){
    // stop loader here
    return processResponse(response);
  },
  function(err){
    return Promise.reject(processError(err))
  }

)


/////////////////////////////////////
// if success -> return{isSuccess:true,data:object}
// if fail -> return {isFailure:true,status: string, msg:string.,code: int}
const processResponse = (response)=>{
    if(response?.status ===200){
        return{ issucess:true,data:response.data}
    } else{
        return{
            isFailure:true,
            status: response?.status,
            msg: response?.msg,
            code:response?.code
        }
    } 
}

const processError =(err)=>{
    if(err.response){
        console.log('ERROR IN RESPONSE:',err,formToJSON());
        return{
                isError:true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code:err.response.status
        }
    }else if(err.request){
        console.log('ERROR IN REQUEST:',err,formToJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code:""
    }

    }else{
        console.log('ERROR IN NETWORK:',err,formToJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code:""
    }
    }
}

const API={};

for (const [key,value]of Object.entries(SERVICS_URLS) ) {
    API[key]=(body,showUploadProgress,showDownloadProgress)=>
    axiosInstance({
        method:value.method,
        url:value.url,
        data:body,
        responseType: value.responseType,
        onUploadProgress:function(ProgressEvent){
         if(showUploadProgress){
            let percentageCompleted = Math.round((ProgressEvent.loaded=100)/ProgressEvent.total)
            showUploadProgress(percentageCompleted)
         }
        },
        onDownloadProgress:function(ProgressEvent){
            if(showDownloadProgress){
               let percentageCompleted = Math.round((ProgressEvent.loaded=100)/ProgressEvent.total)
               showDownloadProgress(percentageCompleted)
            }
           }
    })
    
}
export {API};