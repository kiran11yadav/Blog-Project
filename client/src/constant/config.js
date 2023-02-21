// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:"Loading...",
        message:"data is being loaded,pls wait"
    },
    success:{
        title:"Success",
        message:"Data successfuly loaded"
    },
    responseFailure:{
     title:"Error",
     message:"An error occured while fetching response from server"   
    },
   requestFailure:{
    title:"Error",
    message:"An error occured while passing request data"
   },
   networkError:{
    title:"Error",
    message:"unable to connect with server."

   }
}

// api server call
 
export const SERVICS_URLS={
userSignup:{url:'/signup',method:'POST'}
}