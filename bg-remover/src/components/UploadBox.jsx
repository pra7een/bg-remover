import { useRef } from "react";
import axios from "axios";

function UploadBox({ image, setImage, setResultImage }) {

  const fileInput = useRef();

  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  async function removeBackground() {

    const file = fileInput.current.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {

      const response = await axios.post(
        "http://localhost:5000/remove-bg",
        formData,
        {
          responseType: "blob",
        }
        );

        console.log(response);
        console.log(response.data);
        console.log(response.data.size);

        const imageUrl = URL.createObjectURL(response.data);
        console.log(imageUrl);

setResultImage(imageUrl);

    } catch (error) {
      console.log(error);
      alert("Background removal failed");
    }
  }

  return (
    <div className="upload">

      <button onClick={() => fileInput.current.click()}>
        Upload Image
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleImage}
        style={{ display: "none" }}
      />

      {image && (
        <button
          className="remove-btn"
          onClick={removeBackground}
        >
          Remove Background
        </button>
      )}

    </div>
  );
}

export default UploadBox;