import "./App.css";
import MainPage from "./component/MainPage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div data-theme="cupcake">
      <MainPage></MainPage>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
