import axios from "axios";

export const createPost = async (postData) => {
  console.log(postData);

  await axios.post("", postData).catch((error) => {
    if (error != undefined) {
      console.log(error);
    }
  });
};
