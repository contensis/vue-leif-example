<template>
   <footer class="footer">
  <router-link to="/" class="footer__logo" href="/"><img src="@/assets/svgs/logo.svg" alt="Leif" /></router-link>
  <div class="footer__socials">
    <a href="https://en-gb.facebook.com/">
      <img src="@/assets/svgs/facebook.svg" alt="Facebook" />
      <span class="sr-only">Facebook</span>
    </a>
    <a href="https://www.linkedin.com/showcase/contensis">
      <img src="@/assets/svgs/linkedin.svg" alt="Linkedin" />
      <span class="sr-only">Contensis LinkedIn</span>
    </a>
    <a href="https://twitter.com/Contensis?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
      <img src="@/assets/svgs/twitter.svg" alt="Twitter" />
      <span class="sr-only">Contensis Twitter</span>
    </a>
  </div>
  <div class="footer__copyright">
    <p>© 2022 Leif</p>
  </div>
</footer>
</template>

<script>
    export default {
        name: 'SiteHeader'
    }
</script>