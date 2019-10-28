<template>
<div class="fix-nav" >
  <no-ssr>
    <div>
    <nav id="mainnav"   class="uk-navbar-container uk-navbar-transparent"   uk-navbar>

      <div class="uk-navbar-left uk-visible@s">

        <ul class="uk-navbar-nav"  >
          <li v-for="(menulink, index) in menu.data.nav" :key="'menu-link-left-' + index" v-if="menulink.primary.posicion == 'izquierda'">
            <nuxt-link v-if='$prismic.asLink(menulink.primary.link)' :to="$prismic.asLink(menulink.primary.link)" >{{ $prismic.asText(menulink.primary.label) }}</nuxt-link>
            <template v-if="menulink.items.length>0">
                  <div uk-dropdown="pos: bottom-justify; boundary: #mainnav; boundary-align: true; offset: 0; animation: uk-animation-fade; duration: 250; delay-hide: 100">
                    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-center">
                      <ul class="uk-navbar-nav">
                         <li v-for="(link, index) in menulink.items" :key="'nav-'+ index">
                          <nuxt-link  v-if='$prismic.asLink(link.sub_nav_link)' :to="$prismic.asLink(link.sub_nav_link)">{{ $prismic.asText(link.sub_nav_link_label) }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>
                </template>
          </li>

        </ul>

      </div>

      <div class="uk-navbar-center">
        <div class="uk-navbar-item">
          <nuxt-link to="/" class="uk-display-inline"><div class="main-logo-nav uk-background-contain" uk-img alt=""></div></nuxt-link>
        </div>
      </div>

      <div class="uk-navbar-right">

        <ul class="uk-navbar-nav  uk-visible@s">
          <li  v-for="(menulink, index) in menu.data.nav" :key="'menu-link-right-' + index" v-if="menulink.primary.posicion == 'derecha'">
            <nuxt-link v-if='$prismic.asLink(menulink.primary.link)' :to="$prismic.asLink(menulink.primary.link)" >{{ $prismic.asText(menulink.primary.label) }}</nuxt-link>
          </li>
          <li>
            <a href="#"><span class="uk-margin-small-right"><fa size="2x" :icon="['fas', 'language']"  /></span><span class="uk-visible@s">{{ menu.lang | literalyzeLanguage }}</span></a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li v-for="(lang, index) in menu.alternate_languages" :key="'lang-'+index"><a href="#"><span class="uk-margin-small-right" uk-icon="chevron-right"></span>{{ lang.lang | literalyzeLanguage }}</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <!--<div class="uk-navbar-item hl-link-nav">
          <a href="">Contacto<span class="uk-margin-small-left" uk-icon="chevron-right"></span></a>
        </div>-->
        <div class="uk-navbar-item uk-hidden@s">
          <a class="uk-overflow-hidden" @click="toggleMainMenu">
            <div class="menu-hb menu-appear"></div>
            <div class="menu-hb menu-appear"></div>
            <div class="menu-hb menu-appear"></div>
          </a>
        </div>

      </div>
    </nav>
    </div>

    <div class="main-menu-mobile uk-hidden@s uk-position-fixed uk-position-cover">
      <button @click="toggleMainMenu" class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-container">
        <div class="uk-flex uk-flex-middle uk-flex-center" uk-height-viewport>
          <ul class="uk-list uk-list-large">
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Inicio</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Nosotros</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Experiencias</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Aventura</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>MICE</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Blog</a></li>
            <li class="uk-overflow-hidden"><a class="link-menu" href=""><span class="uk-margin-small-right" uk-icon="icon: chevron-right; ratio: 1.2;"></span>Contacto</a></li>
          </ul>
        </div>
      </div>
    </div>
  </no-ssr>


</div>
</template>

<script>
import {
  TimelineLite,
  Back
} from 'gsap'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  mapState
} from 'vuex'

export default {
  computed: {
    fas() {
      return fas
    },
    ...mapState({
      menu: state => state.menu.menu,
    })
  },
  data() {
    return {
      timeline: null,
      isopen: false,
      ismainmenuopen: false,
      isanimationloaded: false,
      lightlogo: '/logolight.png',
      darklogo: '/logodark.png',
      logoimg: '/logolight.png'
    }
  },
  beforeMount() {
    this.timeline = new TimelineLite({
      paused: true
    });
    this.preloadertl = new TimelineLite({
      paused: true
    })
    this.menutl = new TimelineLite({
      paused: true
    })
    //this.openAnimation()
  },
  mounted() {
    this.openAnimation()
    this.menuAnimation()
  },
  filters: {
    literalyzeLanguage(langvalue) {
      switch (langvalue) {
        case 'es-es':
          return 'Español'
          break;
        case 'en-gb':
          return 'English'
          break;
        default:

      }
    }
  },
  methods: {
    toggleLogo(){
      console.log('hover')
      //this.logoimg = this.darklogo
    },
    showdestinations() {
      this.timeline.timeScale(1).play()
    },
    leavedestinations() {
      this.timeline.timeScale(2.5).reverse()
    },
    openAnimation() {

      const children = this.$el.querySelectorAll('.appear-fade');

      this.timeline.to('.nav-expander', .5, {
        ease: Power4.easeOut,
        startAt: {
          y: '-105%',
          visibility: 'hidden'
        },
        y: '0%',
        visibility: 'visible'
      }, 'begin')

      for (var i = 0; i < children.length; i++) {
        this.timeline.to(children[i], .8, {
          ease: Power4.easeOut,
          startAt: {
            y: '-15%',
            opacity: 0,
            visibility: 'hidden'
          },
          y: '0%',
          opacity: 1,
          visibility: 'visible'
        }, 'begin+=' + (.4 + i * 0.2))
      }

      this.preloadertl.to('.preloader', .5, {
        ease: Power4.easeOut,
        y: '-100%'
      })

      var vim = this

      TweenLite.to(this.timeline, 0.5, {
        progress: 1,
        onComplete: function() {
          // once the tween is completed take the timeline back to 0
          vim.timeline.progress(0);
          vim.preloadertl.play()
        }
      });

    },

    menuAnimation() {
      const children = this.$el.querySelectorAll('.menu-appear');
      const linkchildren = this.$el.querySelectorAll('.link-menu');

      for (var i = 0; i < children.length; i++) {
        this.menutl.to(children[i], .3, {
          ease: Power4.easeOut,
          x: '100%',
        }, 'begin+=' + (i * 0.2))
      }

      this.menutl.to('.main-menu-mobile', .5, {
        ease: Power4.easeOut,
        startAt: {
          visibility: 'hidden'
        },
        x: '0%',
        visibility: 'visible'
      }, 'begin+=' + ((children.length) * 0.2))

      for (var i = 0; i < linkchildren.length; i++) {
        this.menutl.to(linkchildren[i], .5, {
          ease: Power4.easeOut,
          x: '0%',
        }, 'begin+=' + (((children.length) * 0.2) + i * 0.2))
      }

    },

    toggleMainMenu() {
      if (this.ismainmenuopen) {
        this.menutl.timeScale(2).reverse()
        this.ismainmenuopen = false
      } else {
        this.menutl.timeScale(1).play()
        this.ismainmenuopen = true
      }
    }

  }
}
</script>

<style lang="css">
</style>
