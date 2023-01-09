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
      { title: "welcome to the blog", body: "Lorem ipsum", id: 1 },
      { title: "top 5 css tips", body: "Lorem ipsum", id: 2 },
    ]);
    return { posts };
  },
};
</script>
