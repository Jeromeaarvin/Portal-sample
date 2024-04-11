import React from "react";
import "./App.css";
import RegisterForm from "./RegisterForm";
import SampleForm from "./SampleForm";
import DatePicker from "./DatePicker";
import ApplicationPage from "./ApplicationPage";
import { ApplicationCountProvider } from "./ApplicationCountContext";
import Overlay from "./OverlayComponent";
import Tabs from "./Tabs";
import ToggleButton from "./ToggleButton";
import AcademicDrop from "./AcademicDrop";
import EditBlock from "./EditBlock";
import FormShow from "./FormShow";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <ApplicationCountProvider>
    <div className="App">
      <RegisterForm></RegisterForm>
      {/* <ApplicationPage></ApplicationPage> */}
      {/* <SampleForm></SampleForm> */}
      {/* <DatePicker></DatePicker> */}
      {/* <Overlay></Overlay> */}
      {/* <Tabs></Tabs> */}
      {/* <ToggleButton></ToggleButton> */}
      {/* <AcademicDrop></AcademicDrop> */}
      {/* <EditBlock></EditBlock> */}
      {/* <FormShow></FormShow> */}
    </div>
    </ApplicationCountProvider>
  );
}

export default App;