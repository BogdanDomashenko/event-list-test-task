import { useEffect, useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { MessageImage as GCImage } from "react-native-gifted-chat";

export const MessageImage = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const uri = props.currentMessage.image;

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setWidth(width);
      setHeight(height);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <GCImage
      currentMessage={props.currentMessage}
      lightboxProps={{ underlayColor: "transparent" }}
      imageStyle={{
        width: "100%",
        height: "auto",
        margin: 1,
        aspectRatio: parseFloat((width / height).toFixed(2)),
      }}
    />
  );
};
