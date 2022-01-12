<template>
    <header class="header">
  <router-link to="/"><img class="logo" src="@/assets/svgs/logo.svg" alt="Leif" /></router-link>
  <nav id="nav" role="navigation" aria-expanded="false">
    <div class="hamburger">
      <label for="hamburger-checkbox" id="hamburger-label" class="sr-only">Open menu</label>
      <input type="checkbox" id="hamburger-checkbox" onchange="noScroll()" />
      <div class="hamburger__container--outer" aria-hidden="true">
        <div class="hamburger__container--inner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul id="menu" class="menu" aria-hidden="true">
        <li><a href="/">About</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Products</a></li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
    export default {
    name: 'SiteFooter'
    }
</script>