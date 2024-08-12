import "./App.css";
import ChartBlock from "./components/ChartBlock";
import InputBlock from "./components/inputBlock";
import LoadingStatus from "./components/LoadingStatus";
import OutputBlock from "./components/OutputBlock";

function App() {
   return (
      <>
         <InputBlock />
         <ChartBlock />
         <LoadingStatus />
         <OutputBlock />
      </>
   );
}

export default App;
