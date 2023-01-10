<!-- @format -->

<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostListView :posts="postsWithTag" />
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import SpinnerView from "@/components/SpinnerView.vue";
import PostListView from "@/components/PostListView.vue";
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostListView, SpinnerView },
  setup() {
    const router = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(router.params.tag));
    });

    return { posts, error, postsWithTag };
  },
};
</script>

<style></style>
