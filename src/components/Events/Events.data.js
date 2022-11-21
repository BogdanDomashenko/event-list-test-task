import { getRandomImage, getRandomVideo } from "../../common/utils/";

export const admin = {
  _id: 2,
  name: "Admin",
};

export const initialEvents = [
  {
    _id: 1,
    createdAt: new Date(),
    user: admin,
    text: "hello",
  },
  {
    _id: 2,
    createdAt: new Date(),
    user: admin,
    video: getRandomVideo(),
  },
  {
    _id: 3,
    createdAt: new Date(),
    user: admin,
    image: getRandomImage(),
  },
  {
    _id: 4,
    createdAt: new Date(),
    user: admin,
    image: getRandomImage(),
  },
  {
    _id: 5,
    createdAt: new Date(),
    user: admin,
    video: getRandomVideo(),
  },
];
