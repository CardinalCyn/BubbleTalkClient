import axios from 'axios'

axios.defaults.withCredentials=true;

export const loginRequest=(username,password,staySignedIn)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/login",{username:username,password:password,staySignedIn:staySignedIn}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const registerRequest=(email,username,password,staySignedIn)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/register",{email:email,username:username,password:password,staySignedIn:staySignedIn}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const checkSession=()=>{
    console.log(process.env.REACT_APP_SERVER_API_URL);
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+"/checkSession").then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const getAboutMeBio=(username)=>{
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+"/aboutMeBio",{params:{username:username}}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const postAboutMeBio=(username,aboutMeBio)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/aboutMeBioUpload",{username:username,aboutMeBio:aboutMeBio}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}
export const checkValidProfile=(username)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/checkValidProfile",{username:username}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const uploadProfilePicture=(image)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/profilePictureUpload",image).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            console.log(err);
            return reject(err);
        })
    })
}

export const getProfilePicture=(profileName)=>{
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+"/profilePicture",{params:{username:profileName}}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const createGroupRoomRequest=(roomName)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/createRoom",{roomName:roomName,roomType:'group'}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const createDirectMessageRequest=(userToDM)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/createDirectMessageRoom",{userToDM}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const joinRoomRequest=(roomLink)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/joinRoom",{roomLink:roomLink}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}
export const leaveRoomRequest=(roomLink)=>{
    return new Promise((resolve,reject)=>{
        axios.post(process.env.REACT_APP_SERVER_API_URL+"/leaveRoom",{roomLink:roomLink}).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}
export const getUserRooms=()=>{
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+"/getUserRooms").then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}
export const getMessages=(roomLink,offset)=>{
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+`/getMessages/${roomLink}/${offset}/`).then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

export const logoutRequest=()=>{
    return new Promise((resolve,reject)=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL+"/logout").then((response)=>{
            return resolve(response.data);
        }).catch((err)=>{
            return reject(err);
        })
    })
}

