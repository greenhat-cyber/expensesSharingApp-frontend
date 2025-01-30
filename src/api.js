import axios from "axios";

const actionHandler = (payload) => {
  
    const token = localStorage.getItem("admin-token");
    
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  
    return new Promise((resolve, reject) => {
      // payload.baseURL = "https://tuberlink-backend.onrender.com/";
  
      axios({
        ...payload,
        baseURL: "https://tuberlink-backend.onrender.com/",
        withCredentials: true, // Ensure this line is added to send/receive cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response);
          } else {
            console.log("failure", response);
            reject(response);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  
  
  axios.interceptors.response.use(undefined, function (err) {
    var statusCode = err.status;
    return new Promise(() => {
      if (statusCode == 401) {
        // Got an unauthorized, logout the User
        localStorage.removeItem("token");
        window.location.pathname = "/signin";
        
      }
      throw err;
    });
  });


export default {

    /* auth URLs */
    signInURL: "/auth/signin/", // [POST]
    signUpURL: "/auth/signup/", // [POST]


    actionHandler,
}