# Using Contensis with Vue.js

This step by step guide will take you through getting your entries from Contensis and displaying them using the delivery API and a simple Vue app.

## Requirements

* NPM
* [Git](https://git-scm.com/downloads)
* Command line interface knowledge

## Using the demo project

This app will pull in data from the Leif project in Contensis. The Vue demo is used so you can see how a simple app can use the delivery API.

To get started:

* Clone the Contensis React project

``` shell
git clone https://gitlab.zengenti.com/ps-projects/leif-example-sites/vue-leif-example.git
```

* Change directory to the repo directory

``` shell
cd vue-leif-example
```

* Install dependencies

``` shell
npm install
```

* Run it

``` shell
npm run serve
```

Go to http://localhost:8080 and view the React app running in your browser.

## How it works

### Include the Contensis delivery API helper

The Contensis delivery API helper contains classes to perform the repetitive tasks of retrieving content from the API.

Include an instance of ```contensis-delivery-api``` in index.js:

```js
// plugins/contensis.js
const { Client } = require("contensis-delivery-api");
```

### Connect to the Contensis delivery API

Set the root url of the Contensis CMS, access token, and project you want to use with the delivery API.

``` js
// plugins/contensis.js
const ContensisClient = Client.create({
  rootUrl: "<root-url>",
  accessToken: "<access-token>",
  projectId: "<project-id>",
});
```

### Export it for use in the app

```js
// plugins/contensis.js
export default ContensisClient
```

### Get a single blog entry by its id

To keep things simple we're using the GUID of the entry as part of the url and passing that along as part of the routing.

```js
// Connect to the client
import ContensisClient from '../plugins/contensis'
...
 // Get the entry ID from the route.
const entryId = this.$route.params.id;
// Get the entry by ID. Link depth of 1 to pull in linked content.
const entry = await ContensisClient.entries.get({ id: entryId, linkDepth: 1 });
// Pass the entry data into blog prop.
this.blog = entry;
```

Here's a fuller example:

```js
// components/BlogItem.js
<template>
    <h1 class="blog-hero__title">{{blog.entryTitle}}</h1>
    <p class="lead">{{blog.leadParagraph}}</p>
    etc...
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

```

### Get a list of blogs

More information on search queries can be found here: https://www.contensis.com/help-and-docs/apis/delivery-js/search/query-operators

```js
// Get the Contensis connection details and connect
import ContensisClient from '../plugins/contensis'
...
// Import Query and Op to query the api
const { Query, Op } = require("contensis-delivery-api");
// Query for blog posts.
const blogsQuery = new Query(
    Op.equalTo("sys.contentTypeId", "blogPost"),
    Op.equalTo("sys.versionStatus", "latest")
);
// Search using the query.
const blogsPayload = await ContensisClient.entries.search(blogsQuery);
// Pass search results to the blogListData prop.
this.blogListData = blogsPayload.items

```

Full example:

```js
// components/BlogListing.js
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
  // Connect to the client
  import ContensisClient from '../plugins/contensis'
  // Import search classes
  const { Query, Op } = require("contensis-delivery-api");

  export default {
    name: 'BlogListing',
    data() {
        return {
          blogListData: null
        }
      },
      async created() {
        // Query for blog posts.
        const blogsQuery = new Query(
          Op.equalTo("sys.contentTypeId", "blogPost"),
          Op.equalTo("sys.versionStatus", "latest")
        );
        // Search using the query.
        const blogsPayload = await ContensisClient.entries.search(blogsQuery);
        // Pass search results to the blogListData prop.
        this.blogListData = blogsPayload.items
      }
  }
</script>

```
