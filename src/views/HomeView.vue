<!-- @format -->

<template>
  <div class="home">
    <h1>Home</h1>
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
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum is not simply",
        id: 2,
      },
    ]);
    return { posts };
  },
};
</script>
