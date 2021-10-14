import { Image } from "react-bootstrap";

function ImageHelpers({ src }) {
  const ImgUrl = () => {
    console.log(src);
    if (src === null || src === undefined || src == "") {
      return "./profile_image.jpg";
    }
    return src;
  };

  return (
    <>
      <Image src={ImgUrl()} roundedCircle height="45px" />
    </>
  );
}

export default ImageHelpers;
