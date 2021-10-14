import { useState } from "react";
import imageCompression from "browser-image-compression";
import Card from "react-bootstrap/Card";

function FileUploadHelpers({ setUser, newUser }) {
  //File Upload Helper State
  const [state, setState] = useState({
    originalLink: "",
    uploadImage: false,
  });

  //On file upload change
  const handleImgOnChange = (e) => {
    handleImageUpload(e);
    const imageFile = e.target.files[0];
    setState({
      originalLink: URL.createObjectURL(imageFile),
      uploadImage: true,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];

    //compress options
    let options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    //start compression
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        console.log(compressedFile);
        setUser({ ...newUser, image: compressedFile });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="row  justify-content-center">
        <div className="col-xl-8 col-lg-4 col-md-4 col-sm-12 ">
          {state.uploadImage ? (
            <Card.Img
              className="ht"
              variant="top"
              src={state.originalLink}
            ></Card.Img>
          ) : (
            <Card.Img
              className="ht"
              variant="top"
              src="./profile_image.jpg"
            ></Card.Img>
          )}
          <div className="d-flex justify-content-center ">
            <input
              type="file"
              accept="image/*"
              className="mt-2 btn btn-light w-75"
              onChange={(e) => handleImgOnChange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploadHelpers;
