function Result({ image, resultImage }) {
  return (
    <section className="result">

      <div className="box">
        <h3>Original Image</h3>

        {image ? (
          <img
            src={image}
            alt="Original"
            className="result-image"
          />
        ) : (
          <div className="placeholder">
            <p>No Image Yet</p>
          </div>
        )}
      </div>

      <div className="box">
        <h3>Background Removed</h3>

        {resultImage ? (
          <img
            src={resultImage}
            alt="Background Removed"
            className="result-image"
          />
        ) : (
          <div className="placeholder">
            <p>No Image Yet</p>
          </div>
        )}
      </div>

    </section>
  );
}

export default Result;