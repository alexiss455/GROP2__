import { RouterProvider } from "react-router-dom";
import Mainrouter from "./routes"; // Adjust the path if needed

function App() {
  return <RouterProvider router={Mainrouter} />;
}

export default App;
