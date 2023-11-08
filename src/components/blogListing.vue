<template>
  <h1 class="blogs__title">Our blogs</h1>
  <ul class="blogs">
    <li class="blog-card" v-for="blog in blogs" v-bind:key="blog.sys.id">
      <h2 class="blog-card__title mobile">
        <router-link
          class="blog-card__link"
          :to="{
            name: 'blog',
            params: { id: blog.sys.id, slug: blog.sys.slug },
          }"
          >{{ blog.entryTitle }}</router-link
        >
      </h2>
      <img
        v-if="blog.thumbnailImage"
        class="blog-card__img"
        :src="imageHost + blog.thumbnailImage.asset.sys.uri"
        alt=""
      />
      <div class="related-blog__content">
        <h2 class="blog-card__title desktop">
          <router-link
            class="blog-card__link"
            :to="{
              name: 'blog',
              params: { id: blog.sys.id, slug: blog.sys.slug },
            }"
            >{{ blog.entryTitle }}</router-link
          >
        </h2>
        <p class="blog-card__text">{{ blog.leadParagraph }}</p>
        <span class="category">{{ blog?.category?.entryTitle }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
// Connect to the client
import ContensisClient from '../plugins/contensis';
// Import search classes
import { Query, Op } from 'contensis-delivery-api';

export default {
  name: 'BlogListing',
  data() {
    return {
      imageHost: `https://live-${process.env.VUE_APP_ALIAS}.cloud.contensis.com`,
      blogs: null,
    };
  },
  async mounted() {
    try {
      const query = new Query(
        Op.equalTo('sys.contentTypeId', 'blogPost'),
        Op.equalTo('sys.versionStatus', 'published')
      );
      query.pageIndex = 0;
      query.pageSize = 9;

      const entries = await ContensisClient.entries.search(query);
      console.log({ entries });

      if (entries && entries.totalCount >= 1) this.blogs = entries.items;
      else return (this.blogs = []);
    } catch (error) {
      console.error(error);
    }

    // // Query for blog posts.
    // const blogsQuery = new Query(
    //   Op.equalTo('sys.contentTypeId', 'blogPost'),
    //   Op.equalTo('sys.versionStatus', 'latest')
    // );

    // console.log(blogsQuery);
    // // Search using the query.
    // const blogsPayload = await ContensisClient.entries.search(blogsQuery);

    // console.log(blogsPayload);
    // // Pass search results to the blogListData prop.
    // this.blogListData = blogsPayload.items;
  },
};
</script>
