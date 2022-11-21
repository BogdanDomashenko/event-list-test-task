import { Video } from "expo-av";
import { useRef, useState } from "react";
import { StyleSheet, Button, View, ActivityIndicator } from "react-native";

export const MessageVideo = ({ props }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  return (
    <>
      {isLoading && <ActivityIndicator />}
      <Video
        ref={video}
        style={{
          aspectRatio: (width / height).toFixed(2),
          width: "100%",
          display: isLoading ? "none" : "flex",
        }}
        resizeMode="cover"
        source={{
          uri: props.currentMessage.video,
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onReadyForDisplay={(response) => {
          const { width, height } = response.naturalSize;

          setIsLoading(false);
          setWidth(width);
          setHeight(height);
        }}
      />
      {!isLoading && (
        <View>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
      )}
    </>
  );
};
