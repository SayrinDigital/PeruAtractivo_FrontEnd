<template>
<div>
  
<no-ssr>
    <section class="uk-cover-container fix-position-nav main-header-home">
    <video autoplay loop muted playsinline uk-cover>
        <source :src="$prismic.asLink(home.background)" type="video/mp4">
    </video>
    <div class="uk-position-cover overlay"></div>
    <div class="uk-section uk-position-cover  uk-flex uk-flex-middle uk-flex-center">
      <div class="uk-container uk-container-large uk-text-center">
        <div>
          <div class="uk-height-small uk-hidden@s"></div>
          <p class="light head">{{ $prismic.asText(home.subtitulo) }}</p>
          <h1 class="uk-width-xlarge@m uk-margin-auto uk-margin-remove-top light main-heading">{{ $prismic.asText(home.encabezado_principal) }}</h1>
          <a class="uk-position-center-right uk-overlay uk-icon-link down-link" href="#scroll-top" uk-scroll uk-icon="icon: arrow-down; ratio: 1.5"></a>
          <div class="uk-margin-large-top uk-hidden">
            <a class="hl-link-white uk-display-inline-block" href="">{{ $prismic.asText(home.boton_explorar_titulo) }}<span class="uk-margin-small-left" uk-icon="minus"></span></a>
          </div>
        </div>
        <!--<section class="searcher uk-hidden@s">
          <div class="uk-container">
            <div class="container">
              <div class=" uk-text-center uk-flex-middle uk-flex" uk-grid>
                <div class="uk-width-2-5@s">
                  <div>
                    <div>
                      <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon"><fa :icon="['fas', 'map']"  /></span>
                        <input class="uk-input uk-form-blank blank-form uk-width-1-1" :placeholder="$prismic.asText(home.buscador_contenido)" type="text">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-width-2-5@s">
                  <div class="uk-child-width-1-2 uk-text-left@s uk-text-center uk-flex uk-flex-middle" uk-grid>
                    <div>
                      <div>
                        <p class="title-section-search">{{ $prismic.asText(home.buscador_destinos) }}</p>
                        <div>
                          <div uk-form-custom="target: > * > span:first-child">
                            <select class="dark-select">
                                <option value="">{{ $prismic.asText(home.buscador_elegir_texto) }}</option>
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3">Option 03</option>
                                <option value="4">Option 04</option>
                          </select>
                            <p class="desc light uk-margin-remove">
                              <span></span>
                              <span uk-icon="icon: chevron-down"></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p class="title-section-search">{{ $prismic.asText(home.buscador_servicios) }}</p>
                        <div>
                          <div uk-form-custom="target: > * > span:first-child">
                            <select class="dark-select">
                                <option value="">{{ $prismic.asText(home.buscador_elegir_texto) }}</option>
                                <option value="1">Option 01</option>
                                <option value="2">Option 02</option>
                                <option value="3">Option 03</option>
                                <option value="4">Option 04</option>
                          </select>
                            <p class="desc light uk-margin-remove">
                              <span></span>
                              <span uk-icon="icon: chevron-down"></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-width-1-5@s">
                  <div>
                    <div class="uk-text-center search-container">
                      <a href="" class="search-button uk-display-inline-block"><span class="uk-icon uk-margin-small-right" uk-icon="search"></span>{{ $prismic.asText(home.buscador_boton_buscar_titulo) }}</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>-->
      </div>
    </div>
    <section class="searcher uk-position-bottom-center uk-visible@s">
      <div class="uk-container">
        <div class="container">
          <div class="uk-text-center uk-flex-middle uk-flex" uk-grid>
            <div class="uk-width-2-5@s">
              <div>
                <div>
                  <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon"><fa :icon="['fas', 'map']"  /></span>
                    <input class="uk-input uk-form-blank blank-form uk-width-1-1" :placeholder="$prismic.asText(home.buscador_contenido)" type="text">
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-width-2-5@s">
              <div class="uk-child-width-1-2 uk-text-left@s uk-text-center uk-flex uk-flex-middle" uk-grid>
                <div>
                  <div>
                    <p class="title-section-search">{{ $prismic.asText(home.buscador_destinos) }}</p>
                    <div>
                      <div uk-form-custom="target: true">
                        <select class="dark-select">
                            <option value="">{{ $prismic.asText(home.buscador_elegir_texto) }}</option>
                            <option v-for="(destino, index) in home.destinos" :key="'destino' + index" value="1">{{ $prismic.asText(destino.lugar) }}</option>
                      </select>
                        <p class="desc light uk-margin-remove">
                          <span></span>
                          <span uk-icon="icon: chevron-down"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p class="title-section-search">{{ $prismic.asText(home.buscador_servicios) }}</p>
                    <div>
                      <div uk-form-custom="target: true">
                        <select class="dark-select">
                            <option value="">{{ $prismic.asText(home.buscador_elegir_texto) }}</option>
                            <option v-for="(servicio, index) in home.servicios" :key="'servicio' + index" value="1">{{ $prismic.asText(servicio.nombre) }}</option>

                      </select>
                        <p class="desc light uk-margin-remove">
                          <span></span>
                          <span uk-icon="icon: chevron-down"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-width-1-5@s">
              <div>
                <div class="uk-text-center search-container">
                  <a href="" class="search-button uk-display-inline-block"><span class="uk-icon uk-margin-small-right" uk-icon="search"></span>{{ $prismic.asText(home.buscador_boton_buscar_titulo) }}</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </section>
  </no-ssr>

  <div id="scroll-top"></div>

      <template v-for="(content, index) in home.body">
        <template v-if="content.slice_type == 'seccion_carrusel_informativo'">
          <GalleryContentText :key="'GalleryContentText' + index" :content="content"></GalleryContentText>
        </template>
        <template v-if="content.slice_type == 'imagen_informativa'">
          <SectionImageContent :key="'SectionImageContent' + index" :content="content"></SectionImageContent>
        </template>
        <template v-if="content.slice_type == 'full_imagen_con_texto'">
          <FullWidthImageText :key="'FullWidthImageText' + index" :content="content"></FullWidthImageText>
        </template>
        <template v-if="content.slice_type == 'carrusel_de_imagenes_con_encabezado'">
          <HeaderCarousel :key="'HeaderCarousel' + index" :content="content"></HeaderCarousel>
        </template>
      </template>

</div>
</template>

<script>

import Navigator from '~/components/mainui/Navigator'
import GalleryContentText from '~/components/prismic/GalleryContentText'
import SectionImageContent from '~/components/prismic/SectionImageContent'
import FullWidthImageText from '~/components/prismic/FullWidthImageText'
import HeaderCarousel from '~/components/prismic/HeaderCarousel'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      att: {
        controls: false,
        playsinline: true,
        loop: true,
        autoplay: true,
        muted: true,
      }
    }
  },

  computed: {
    fas () {
         return fas
      },
      ...mapState({
        home: state => state.home.home.data,
      })
  },
  components: {
    GalleryContentText,
    SectionImageContent,
    FullWidthImageText,
    HeaderCarousel
  }
}
</script>
