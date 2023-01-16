<!-- @format -->

<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostListView :posts="postsWithTag" />
      <TagCloudView :posts="posts" />
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import SpinnerView from "@/components/SpinnerView.vue";
import PostListView from "@/components/PostListView.vue";
import TagCloudView from "@/components/TagCloudView.vue";
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostListView, SpinnerView, TagCloudView },
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
