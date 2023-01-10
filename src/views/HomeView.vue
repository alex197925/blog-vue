<!-- @format -->

<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostListView :posts="posts" />
  </div>
</template>

<script>
import PostListView from "@/components/PostListView.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    PostListView,
  },

  setup() {
    // Store data here
    const posts = ref([]);
    const error = ref(null);

    // Fetching data, don't forget call the function
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        // console.log(data);
        // If is no data, display error message
        if (!data.ok) {
          throw Error("no data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
