import { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { admin, initialEvents } from "./Events.data";
import { MessageImage, MessageVideo } from "../ui";
import { generateRandomMessage } from "../../common/utils";

export const Events = () => {
  const [messages, setMessages] = useState([]);
  const [loadEarlier, setLoadEarlier] = useState(true);

  const handleLoadEarlier = () => {
    setLoadEarlier(false);
    setMessages((previousMessages) =>
      GiftedChat.prepend(previousMessages, initialEvents)
    );
  };

  const sendGeneratedMessage = () => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [
        {
          _id: initialEvents.length + previousMessages.length + 1,
          createdAt: new Date(),
          user: admin,
          ...generateRandomMessage(),
        },
      ])
    );
  };

  useEffect(() => {
    setInterval(sendGeneratedMessage, 60000);

    return () => {
      clearInterval(sendGeneratedMessage);
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        renderMessageVideo={(props) => <MessageVideo props={props} />}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        loadEarlier={loadEarlier}
        onLoadEarlier={handleLoadEarlier}
        renderMessageImage={(props) => <MessageImage props={props} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});
