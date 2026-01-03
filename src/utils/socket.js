import io from "socket.io-client"
import {BASE_URL} from "./constants"

export const createSocketConnection = () => {
  return io(BASE_URL)   // url where you need to connect (backend url) .ie. basically you are telling the client connect to your backend system 
}

// let socket;
// export const createSocketConnection = () => {
//   if (!socket){
//     socket = io(BASE_URL, {
//       withCredentials : true
//     })
//   }
//   return socket
//   // return io(BASE_URL)   // url where you need to connect (backend url) .ie. basically you are telling the client connect to your backend system 
// }