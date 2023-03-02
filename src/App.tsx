import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  return (
    // BrowserRouter -> Routes -> Single Route...
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
