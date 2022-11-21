import { getRandomNumber } from "./getRandomNumber";

const urls = [
  "https://joy.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
  "https://cdn.videvo.net/videvo_files/video/premium/video0046/large_watermarked/360_360-0509_preview.mp4",
  "https://cdn.videvo.net/videvo_files/video/premium/video0012/large_watermarked/327-1_327-1591_preview.mp4",
  "https://joy.videvo.net/videvo_files/video/free/2015-08/large_watermarked/cat_in_the_sun_preview.mp4",
  "https://joy.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_03_preview.mp4",
  "https://joy.videvo.net/videvo_files/video/free/video0453/large_watermarked/_710__import_preview.mp4",
];

export const getRandomVideo = () => {
  const index = getRandomNumber(0, urls.length);
  return urls[index];
};
