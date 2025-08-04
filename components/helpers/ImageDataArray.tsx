import Image from "next/image";
const ImageArray: React.FC = () => {
  const imageArray = [
    { myimage1: "/1.jpg" },
    { myimage2: "/2.jpg" },
    { myimage3: "/3.jpg" },
    { myimage4: "/4.jpg" }
  ];

  return (
    <div>
      {imageArray.map((image, index) => (
        <Image
          key={index}
          src={Object.values(image)[0]} // Get the first value of the object
          alt={`Image ${index + 1}`}
          width={400}
          height={400}
          className="rounded-lg"/>

      ))}
    </div>
  );

}

export default ImageArray;