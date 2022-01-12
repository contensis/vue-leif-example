<template>
  <h1 class="blogs__title">Our blogs</h1>
  <ul class="blogs">
      <li class="blog-card" v-for="item in blogListData" v-bind:key="item.sys.id">
        <router-link :to="{ name: 'blog', params: {id: item.sys.id, slug: item.sys.slug} }">
            <h2 class="blog-card__title mobile">{{ item.entryTitle }}</h2>
            <img class="blog-card__img" :src="'http://live.leif.zenhub.contensis.cloud' + item.thumbnailImage.asset.sys.uri" :alt="item.thumbnailImage.altText" />
            <div class="related-blog__content">
            <h2 class="blog-card__title desktop">{{ item.entryTitle }}</h2>
            <p class="blog-card__text">{{ item.leadParagraph }}</p>
            <span class="category">{{ item.category.entryTitle }}</span>
            </div>
        </router-link>
      </li>
  </ul>
</template>

<script>
  const { Query, Op } = require("contensis-delivery-api");
  import ContensisClient from '../plugins/contensis'
  export default {
    name: 'BlogListing',
    data() {
        return {
          blogListData: null
        }
      },
      async created() {
        //--------------------------------------
        // Get a list of blogs
        //--------------------------------------
        const blogsQuery = new Query(
          Op.equalTo("sys.contentTypeId", "blogPost"),
          Op.equalTo("sys.versionStatus", "latest")
        );
        const blogsPayload = await ContensisClient.entries.search(blogsQuery);
        this.blogListData = blogsPayload.items
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blogs__title {
  color: #2B2F51;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin-bottom: 64px;
  text-align: center;
}
.blogs-hero {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 620px;
  padding: 0 16px;
  text-align: center;
  width: 100%;
}
.blogs-hero__img {
  display: block;
  height: 240px;
  margin-bottom: 24px;
  object-fit: cover;
  width: 100%;
}
.blogs-hero__title {
  color: #2B2F51;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 16px;
}
.blogs-hero__text {
  margin-bottom: 16px;
}
.category {
  margin-bottom: 24px;
}
.btn {
  align-items: center;
  display: flex;
  justify-content: center;
}
.btn img {
  margin-left: 12px;
}
.blogs {
  list-style: none;
  padding: 0 16px;
  margin: 80px auto;
  max-width: 840px;
  width: 100%;
}
.blog-card {
  text-align: left;
}
.pagination {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
.pagination__item {
  align-content: center;
  border: 1px solid #2B2F51;
  border-radius: 4px;  
  color: #2B2F51;
  cursor: pointer;
  display: flex;
  font-family: 'Source Serif Pro', serif;
  font-size: 20px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  line-height: 32px;
  margin: 4px;
  padding: 8px 16px;
  text-decoration: none;
  width: 48px;
}
.pagination__item a {
  display: inline-flex;
}
.pagination__item:hover {
  opacity: 8;
}
.pagination__item:focus {
  border: 3px solid #303B9F;
}
.pagination__item:active {
  background-color: #2B2F51;
  color:#77E8C6;
}
.active {
  background-color: #2B2F51;
  color:#77E8C6;
}
.arrow-left {
  transform: scaleX(-1);
}
.arrow, .arrow .active {
  background-color: #77E8C6;
  border: 1px solid #77E8C6;
}
@media only screen and (min-width: 1024px) {
  .blogs-hero {
    flex-direction: row-reverse;
    margin: 0 auto;
    max-width: 1060px;
    text-align: left;
    width: 100%;
  }
  .blogs-hero__content {
    padding: 0 40px 0 0;
  }
  .btn { 
    margin: 0 auto;
  }
  .blogs-hero__content .btn {
    margin: 0;
  }
  .blogs__title {
    font-size: 64px;
    line-height: 80px;
  }
  .blogs-hero__img {
    height: 432px;
    max-width: 510px;
  }
  .blogs-hero__title {
    font-size: 48px;
    line-height: 56px;
  }
}
</style>
