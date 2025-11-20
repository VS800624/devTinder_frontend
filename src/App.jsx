import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";

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

    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<Body/>}/>  or */}
        <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
