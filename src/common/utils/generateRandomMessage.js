import { getRandomNumber } from "./getRandomNumber";
import { LoremIpsum } from "lorem-ipsum";
import { getRandomImage } from "./getRandomImage";
import { getRandomVideo } from "./getRandomVideo";

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateRandomMessage = () => {
  const variant = getRandomNumber(0, 3);

  switch (variant) {
    case 0:
      return { text: lorem.generateWords(getRandomNumber(1, 20)) };
    case 1:
      return { image: getRandomImage() };
    case 2:
      return { video: getRandomVideo() };
  }
};
