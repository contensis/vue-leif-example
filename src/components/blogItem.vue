<template>
  <template v-if="blog">
    <div class="blog-hero">
      <h1 class="blog-hero__title">{{ blog.entryTitle }}</h1>
      <img
        v-if="blog.thumbnailImage"
        class="blog-hero__img"
        :src="
          'http://live.leif.contensis.cloud' + blog.thumbnailImage.asset.sys.uri
        "
        :alt="blog.thumbnailImage.altText"
      />
    </div>
    <div class="profile">
      <img
        class="profile__img"
        :src="
          'http://live.leif.contensis.cloud' + blog.author.photo.asset.sys.uri
        "
        :alt="blog.author.photo.altText"
      />
      <span class="profile__name">{{ blog.author.entryTitle }}</span>
      <span class="category">{{ blog.category.entryTitle }}</span>
    </div>
    <div class="blog__content">
      <p class="lead">{{ blog.leadParagraph }}</p>
      <template v-for="(field, index) in blog.postBody" :key="index">
        <div v-if="field.type === 'markup'" v-html="field.value"></div>
        <div v-if="field.type === 'image'" class="inline-img">
          <img
            class="inline-img__img"
            :src="
              'http://live.leif.contensis.cloud' + field.value.asset.sys.uri
            "
            :alt="field.value.altText"
          />
          <div class="inline-img__content">
            <h2 class="inline-img__title">{{ field.value.caption }}</h2>
          </div>
        </div>
      </template>
    </div>
  </template>
</template>

<script>
// Connect to the client
import ContensisClient from '../plugins/contensis';

export default {
  name: 'BlogItem',
  title: 'Page title',
  data() {
    return {
      blog: null,
    };
  },
  async created() {
    // Get the entry ID from the route.
    const entryId = this.$route.params.id;
    // Get the entry by ID. Link depth of 1 to pull in linked content.
    const entry = await ContensisClient.entries.get({
      id: entryId,
      linkDepth: 1,
    });
    // Pass the entry data into blog prop.
    this.blog = entry;
  },
};
</script>
