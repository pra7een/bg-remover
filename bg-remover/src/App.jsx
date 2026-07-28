import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import Result from "./components/Result";

function App() {

  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />

      <UploadBox
        image={image}
        setImage={setImage}
        setResultImage={setResultImage}
      />

      <Result
        image={image}
        resultImage={resultImage}
      />
    </>
  );
}

export default App;