import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import ChangePassword from "./components/ChangePassword";
import Premium from "./components/Premium";
import NotFound from "./components/NotFound";
import Chat from "./components/Chat";
// import SignUp from "./components/SignUp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//       children: [
//         { path:"/login" ,
//          element: </Login/> },
//        {}
// ]
//   },
// ]);

function App() {
  return (
    <>
    {/* <RouterProvider router={router} />; */}
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<Body/>}/>  or */}
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/signup" element={<SignUp/>}/> */}
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/connections" element={<Connections/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/premium" element={<Premium/>}/>
          <Route path="/chat/:targetUserId" element={<Chat/>}/>
          {/* <Route path="/terms-and-conditions" element={<terms/>}/> */}
        </Route> 
         {/* Unknown URL */}
            <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>

    </>
  );
}

export default App;
