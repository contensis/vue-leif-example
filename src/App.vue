<template>
  <site-header></site-header>
  <router-view />
  <site-footer></site-footer>
</template>

<script>
  import siteFooter from './components/siteFooter.vue'
  import SiteHeader from './components/siteHeader.vue'
  export default {
  components: { siteFooter, SiteHeader },
    name: 'App',
  }
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  color: #333333;
  font-family: 'Helvetica', Arial, sans-serif;
  overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Source Serif Pro', serif;
}
h1 {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
}
h3 {
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 2.5rem;
}
h4 {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
}
h5 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
}
h6 {
  font-size: 1rem;
  font-size: 600;
  line-height: 1.5rem;
}
p {
  font-size: 16px;
  line-height: 32px;
  margin: 16px 0;
}
.sr-only {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
/* Menu Styles */
.hamburger {
  display: block;
  position: relative;
  user-select: none;
  z-index: 1;
  -webkit-user-select: none;
}
.hamburger a {
  color: #232323;
  opacity: 1;
  text-decoration: none;
  transition: opacity 0.3s ease;
}
.hamburger a:hover {
  opacity: 0.8;
}
.hamburger input {
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  opacity: 0; 
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-touch-callout: none;
}
.hamburger__container--outer {
  background: #77E8C6;
  height: 64px;
  width: 64px;
}
.hamburger__container--inner {
  height: 24px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34px;
}
.hamburger__container:before  {
  background-color: #77E8C6;
  content: '';
  height: 100%;
  position: absolute;
  right:0;
  top:0;
  width: 100%;
}
.hamburger span {
  background: #2B2F51;
  border-radius: 3px;
  display: block;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  transform-origin:  22px 3px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  width: 33px;
  z-index: 1;
}
.hamburger span:first-child {
  transform-origin: 0% 0%;
}
.hamburger .span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
.hamburger input:checked ~ .hamburger__container--outer .hamburger__container--inner span {
  background: #2B2F51;
  opacity: 1;
  transform: rotate(45deg) translate(-2px, 0px);
}
.hamburger input:checked ~ .hamburger__container--outer .hamburger__container--inner span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
.hamburger input:checked ~ .hamburger__container--outer .hamburger__container--inner span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
.menu {
  background: #2B2F51;;
  height: 100vh;
  list-style-type: none;
  padding: 112px 16px 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100vw, 0);
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  width: 320px;
  z-index: -1;
  -webkit-font-smoothing: antialiased;
}
.menu li a {
  color: #fff;
  font-family: 'Source Serif Pro', serif;
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-decoration: none;
}
.menu li:not(:last-child) {
  padding-bottom: 32px;
}
.hamburger input:checked ~ ul {
  transform: none;
}
/* End  */
.fixed {
  overflow: hidden;
  position: relative;
}
.fixed:before {
  background: rgb(43, 47, 81) none repeat scroll 0% 0%;
  content: '';
  height: 100vh;
  left: 0px;
  opacity: 0.25;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
}
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
  position: relative;
}
.logo {
  height: 32px;
  margin: 16px 0px 0px 16px;
  width: 54px;
}
.footer {
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 288px;
  margin-top: 120px;
  width: 100%;
}
.footer__logo {
  display: block;
  margin: 0 auto;
}
.footer__logo img {
  height: 70px;
  margin: 0 auto 24px;
  max-width: 133px;
  object-fit: contain;
  width: 100%;
}
.footer__socials {
  align-items: center;
  display: flex;
  justify-content: center;
}
.footer__socials a:not(:last-child) {
  display: block;
  margin-right: 32px;
}
.footer__socials a:hover {
  opacity: 0.8;
}
.footer__copyright {
  display: flex;
  align-content: center;
  justify-content: center;
  color: #2B2F51;
  font-size: 12px;
  margin: 0;
}
.btn {
  border: 1px solid #2B2F51;
  border-radius: 4px;
  color: #2B2F51;
  display: block;
  font-family: 'Source Serif Pro', serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  margin: 0 auto;
  max-width: 288px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  width: 100%;
}
.btn:hover {
  background: rgba(195, 198, 222, 0.2);
}
.category {
  color: #6E729B;
  display: block;
  font-size: 14px;
  line-height: 24px;
}
/* Global Blog Card Styles */
.blog-card {
  padding: 16px;
  position: relative;
}
.blog-card__link {
  text-decoration: none;
}
.blog-card__link:after {
  content: '';
  position: absolute;
  inset: 0;
}

.blog-card:hover {
  box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
  cursor: pointer;
}
.blog-card:not(:last-child) {
  margin-bottom: 80px;
}
.blog-card__title {
  color:#2B2F51;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;
}
.blog-card__title.desktop {
  display: none;
}
.blog-card__img {
  display: block;
  height: 304px;
  margin-bottom: 24px;
  object-fit: cover;
  width: 100%;
}
.blog-card__text {
  color: #333;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 24px;
}
@media only screen and (min-width: 768px) {
  .blog-card {
    padding: 24px;
    align-items: center;
    display: flex;
  }
  .blog-card:not(:last-child) {
    margin-bottom: 48px;
  }
  .blog-card__title {
    color: #2B2F51;
    font-size: 26px;
    font-weight: 600;
    line-height: 40px;
    margin-bottom: 80px;
  }
  .blog-card__img {
    height: 184px;
    margin: 0;
    margin-right: 40px;
    max-width: 180px;
  }
  .blog-card__title, .blog-card__text {
    margin-bottom: 16px;
  }
  .blog-card__title.desktop {
    display: block
  }
  .blog-card__title.mobile {
    display: none;
  }
}
/* End */
@media only screen and (min-width: 1024px) {
  h1 {
    font-size: 4rem;
    line-height: 5rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  h5 {
    font-size: 1rem;
    line-height: 2rem;
  }
  h6 {
    font-size: 1.125rem;
  }
  li {
    color: rgb(51, 51, 51);
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    }
  }
  .hamburger__container--outer {
    height: 80px;
    width: 80px;
  }
  .menu {
    width: 370px;
  }
  .menu li a {
    font-size: 2rem;
    line-height: 3rem;
  }
  .logo {
    height: 48px;
    margin: 24px 0px 0px 80px;
    width: 80px;
  }

</style>
