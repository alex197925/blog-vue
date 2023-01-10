/** @format */

import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  // Fetching data, don't forget call the function
  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      // console.log(data);
      // If is no data, display error message
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
