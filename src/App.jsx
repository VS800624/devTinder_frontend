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
          <Route path="/profile" element={<Profile/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  </Provider>

    </>
  );
}

export default App;
