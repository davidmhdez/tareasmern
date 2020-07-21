const { default: ax } = require("./axios");

const tokenAuth = token => {
    if(token){
        ax.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete ax.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;