/** @format */

import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  // Fetching data, don't forget call the function
  const load = async () => {
    try {
      const res = await projectFirestore.collection("posts").doc(id).get();
      // console.log(res.data());
      post.value = { ...res.data(), id: res.id };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
