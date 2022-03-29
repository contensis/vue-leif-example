<template>
    <template v-if="blog">
        <div class="blog-hero">
            <h1 class="blog-hero__title">{{blog.entryTitle}}</h1>
            <img v-if="blog.thumbnailImage" class="blog-hero__img" :src="'http://live.leif.contensis.cloud'+ blog.thumbnailImage.asset.sys.uri" :alt="blog.thumbnailImage.altText"/>
        </div>
        <div class="profile">
            <img class="profile__img" :src="'http://live.leif.contensis.cloud' + blog.author.photo.asset.sys.uri" :alt="blog.author.photo.altText" />
            <span class="profile__name">{{blog.author.entryTitle}}</span>
            <span class="category">{{blog.category.entryTitle}}</span>
        </div>
        <div class="blog__content">
            <p class="lead">{{blog.leadParagraph}}</p>
            <template v-for="(field, index) in blog.postBody" :key="index">
                <div v-if="field.type === 'markup'" v-html="field.value"></div>
                <div v-if="field.type === 'image'" class="inline-img">
                    <img class="inline-img__img" :src="'http://live.leif.contensis.cloud' + field.value.asset.sys.uri" :alt="field.value.altText"/>
                    <div class="inline-img__content">
                        <h2 class="inline-img__title">{{field.value.caption}}</h2>
                    </div>
                </div>
            </template>
        </div>
    </template>
</template>

<script>
// Connect to the client
import ContensisClient from '../plugins/contensis'

export default {
  name: 'BlogItem',
  title: 'Page title',
  data() {
      return {
        blog: null
      }
    },
    async created() {
        // Get the entry ID from the route.
        const entryId = this.$route.params.id;
        // Get the entry by ID. Link depth of 1 to pull in linked content.
        const entry = await ContensisClient.entries.get({ id: entryId, linkDepth: 1 });
        // Pass the entry data into blog prop.
        this.blog = entry;
    }
}

</script>

<style scoped>
.blog-hero {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  padding: 0 16px;
  text-align: center;
}
.blog-hero__title {
  color: #2B2F51;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin-bottom: 24px; 
  max-width: 520px;
  width: 100%;
}
.blog-hero__img {
  height: 240px;
  max-width: 288px;
  object-fit: cover;
  width: 100%;
}
.profile {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
}
.profile__img {
  border-radius: 50%;
  height: 40px;
  margin-bottom: 8px;
  object-fit: cover;
  width: 40px;
}
.profile__name {
  display: block;
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
}
.blog__content {
  margin-bottom: 80px;
  padding: 0 16px;
}
.lead {
  font-family: 'Source Serif Pro', serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin: 0 auto 24px;
  max-width: 620px;
  width: 100%;
}
.blog__content div {
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
}
.inline-img {
  margin: 64px auto;
  max-width: 840px;
  width: 100%;
}
.inline-img__img {
  display: block;
  height: 288px;
  margin-bottom: 24px;
  object-fit: cover;
  width: 100%;
}
.inline-img__content {
  padding: 0 16px;
  text-align: center;
}
.inline-img__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
}
.inline-img__text {
  color: #6E729B;
  font-size: 14px;
  line-height: 24px;
}
@media only screen and (min-width: 768px) {
  .inline-img {
    margin: 80px auto;
  }
  .inline-img__img {
    height: 480px
  }
}
@media only screen and (min-width: 1024px) {
.lead {
  font-size: 24px;
}
  .blog-hero {
    flex-direction: row;
  }
  .blog-hero__title {
    font-size: 64px;
    line-height: 80px;
    margin-bottom: 0;
    margin-right: 40px;
    text-align: left;
  }
  .blog-hero__img {
    max-width: 510px;
    height: 432px;
  }
}
</style>
