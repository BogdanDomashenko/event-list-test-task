import { getRandomNumber } from "./getRandomNumber";

const urls = [
  "https://i.natgeofe.com/k/63b1a8a7-0081-493e-8b53-81d01261ab5d/red-panda-full-body_4x3.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg",
  "https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg",
  "https://www.highparkzoo.ca/wp-content/uploads/2013/12/Capybara-Chewey-1024x681.jpg",
  "https://i.pinimg.com/736x/18/c2/a5/18c2a5876ee529b338c0020a3f857759.jpg",
  "https://i.pinimg.com/564x/d6/de/0f/d6de0fb08f0478bf029a22ad6bdf4b8c.jpg",
];

export const getRandomImage = () => {
  const index = getRandomNumber(0, urls.length);
  return urls[index];
};
