<script>
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import AppSearch from "./AppSearch.vue";
import { store } from "../store";
export default {
  name: "AppHeader",
  components: {
    AppSearch,
    Multiselect,
  },
  data() {
    return {
      restaurateur: [],
      type: "",
      store,
      currentPage: 1,
      types: [],
      menuItems: [
        {
          label: "Homepage",
          routeName: "HomePage",
        },
        {
          label: "Ristoranti",
          routeName: "RestaurateurPage",
        },
        // {
        //     label: 'Braintree',
        //     routeName: 'BraintreePage'
        // },
        // {
        //     label: 'Contatti',
        //     // routeName: 'contacts'
        // },
      ],
      options: [],
    };
  },
  //Prova search
  methods: {
    searchAll() {
      const slugify = store.inputText
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      this.store.searched = slugify;
    },
    getTypes(type_page) {
      axios
        .get(`${this.store.baseUrl}/api/types`, { params: { page: type_page } })
        .then((response) => {
          if (response.data.success) {
            this.types = response.data.results;
            this.types.forEach((element) => {
              this.options.push(element.name);
            });
          } else {
          }
        });
    },
    async RestaurateursList() {
      try {
        if (this.store.selectedType) {
          const restaurateurs = {};
          const promises = this.store.selectedType.map((type) => {
            return axios
              .get(`${this.store.baseUrl}/api/types/${type}`)
              .then((response) => {
                if (response.data.success) {
                  const currentRestaurateurs = response.data.restaurateurs;
                  currentRestaurateurs.forEach((restaurateur) => {
                    if (!restaurateurs[restaurateur.slug]) {
                      restaurateur.types = [type];
                      restaurateurs[restaurateur.slug] = restaurateur;
                    } else {
                      restaurateurs[restaurateur.slug].types.push(type);
                    }
                  });
                  this.store.currentPage =
                    response.data.restaurateurs.current_page;
                  this.store.lastPage = response.data.restaurateurs.last_page;
                }
              })
              .catch((error) => {
                console.error(error);
              });
          });
          await Promise.all(promises);
          this.store.restaurateurs = Object.values(restaurateurs);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getTypes();
  },
  computed() {},
};
</script>

<template lang="">
  <header class="my-bg-primary my-text-light">
    <div class="container px-0">
      <nav class="navbar navbar-expand-lg navbar-dark mx-2">
        <router-link :to="{ name: 'HomePage' }" class="navbar-brand fw-bold">
          <div class="d-flex align-items-center">
            <div style="transform: scale(1)">
              <svg
                height="100%"
                stroke-miterlimit="10"
                style="
                  fill-rule: nonzero;
                  clip-rule: evenodd;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                version="1.1"
                viewBox="0 0 369.91 83.9"
                width="100%"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <clipPath id="ArtboardFrame">
                  <rect height="83.9" width="369.91" x="0" y="0" />
                </clipPath>
                <g clip-path="url(#ArtboardFrame)" id="SvgjsG2920">
                  <g opacity="1">
                    <path
                      d="M38.042-1.7053e-13C59.2052-1.7053e-13 76.0854 17.1327 76.0854 38.0447C76.0854 53.9177 66.2596 68.027 51.6469 73.57L51.6469 83.9L48.3716 83.9L48.3716 74.8297C41.5692 76.5934 34.5147 76.5934 27.7123 74.8297L27.7123 83.9L24.6889 83.9L24.6889 73.57C9.82428 68.027-0.0015221 53.9177-0.0015221 38.0447C-0.0015221 17.1327 17.1306-1.7053e-13 38.042-1.7053e-13ZM49.8833 31.9979C54.1663 31.9979 57.4416 36.533 57.4416 42.076C57.4416 46.8631 54.9222 50.8943 51.6469 51.9021L51.6469 72.0583C65.5038 66.5153 74.5738 53.1619 74.5738 38.0447C74.5738 17.8886 58.1974 1.51171 38.042 1.51171C17.8865 1.51171 1.51014 17.8886 1.51014 38.0447C1.51014 53.1619 10.8321 66.5153 24.6889 72.0583L24.6889 51.9021C21.1617 50.6423 18.6423 45.3514 18.6423 38.8006C18.6423 36.2811 19.1462 34.0135 19.6501 31.9979L22.1695 31.9979L22.6734 37.5408L23.4292 44.3435L24.1851 37.5408L24.6889 31.9979L27.7123 31.9979L28.4681 37.5408L29.2239 44.3435L29.7278 37.5408L30.4836 31.9979L32.4992 31.9979C33.255 34.0135 33.7589 36.2811 33.7589 38.8006C33.7589 45.3514 30.9875 50.6423 27.7123 51.9021L27.7123 73.0661C34.5147 75.0817 41.8211 75.0817 48.3716 73.0661L48.3716 51.9021C45.0964 50.8943 42.5769 46.8631 42.5769 42.076C42.5769 36.533 45.8522 31.9979 49.8833 31.9979Z"
                      fill="#ffffff"
                      fill-rule="nonzero"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M106.894 23.5246C117.58 23.5246 125.438 31.6443 125.438 41.8594C125.438 52.0745 117.58 60.1943 106.894 60.1943L95.9985 60.1943L95.9985 23.5246L106.894 23.5246ZM106.842 56.0558C115.59 56.0558 120.985 49.7172 120.985 41.8594C120.985 34.0017 115.59 27.663 106.842 27.663L100.346 27.663L100.346 56.0558L106.842 56.0558ZM135.024 56.1082L152.468 56.1082L152.468 60.1943L133.976 60.1943L130.676 60.1943L130.676 23.5246L135.024 23.5246L151.996 23.5246L151.996 27.6107L135.024 27.6107L135.024 39.764L148.225 39.764L148.225 43.7453L135.024 43.7453L135.024 56.1082ZM162.316 56.1082L178.764 56.1082L178.764 60.1943L157.968 60.1943L157.968 23.5246L162.316 23.5246L162.316 56.1082ZM188.35 23.5246L188.35 60.1943L184.003 60.1943L184.003 23.5246L188.35 23.5246ZM224.286 23.5246L228.895 23.5246L212.499 60.1943L208.885 60.1943L192.541 23.5246L197.151 23.5246L210.718 54.4843L224.286 23.5246ZM237.434 56.1082L254.877 56.1082L254.877 60.1943L236.386 60.1943L233.086 60.1943L233.086 23.5246L237.434 23.5246L254.406 23.5246L254.406 27.6107L237.434 27.6107L237.434 39.764L250.634 39.764L250.634 43.7453L237.434 43.7453L237.434 56.1082ZM278.031 40.026C282.85 41.126 285.993 45.1073 285.993 49.7172C285.993 56.1606 281.803 60.1943 272.74 60.1943L260.378 60.1943L260.378 23.5246L272.897 23.5246C280.074 23.5246 283.636 27.6107 283.636 32.3777C283.636 35.8875 281.645 38.7163 278.031 40.026ZM272.583 27.4011L264.726 27.4011L264.726 38.6116L272.583 38.6116C276.774 38.6116 279.341 36.3066 279.341 32.954C279.341 29.4965 276.931 27.4011 272.583 27.4011ZM272.583 56.3177C278.869 56.3177 281.645 53.7509 281.645 49.3505C281.645 45.5264 278.869 42.2261 272.845 42.2261L264.726 42.2261L264.726 56.3177L272.583 56.3177ZM308.937 23.0008C318.471 23.0008 327.69 30.7538 327.69 41.8594C327.69 52.9651 318.471 60.7181 308.937 60.7181C299.351 60.7181 290.184 52.9651 290.184 41.8594C290.184 30.7538 299.351 23.0008 308.937 23.0008ZM308.937 56.5797C316.114 56.5797 323.185 50.503 323.185 41.8594C323.185 33.2159 316.114 27.1392 308.937 27.1392C301.708 27.1392 294.689 33.2159 294.689 41.8594C294.689 50.503 301.708 56.5797 308.937 56.5797ZM351.158 23.0008C360.692 23.0008 369.912 30.7538 369.912 41.8594C369.912 52.9651 360.692 60.7181 351.158 60.7181C341.572 60.7181 332.405 52.9651 332.405 41.8594C332.405 30.7538 341.572 23.0008 351.158 23.0008ZM351.158 56.5797C358.335 56.5797 365.407 50.503 365.407 41.8594C365.407 33.2159 358.335 27.1392 351.158 27.1392C343.929 27.1392 336.91 33.2159 336.91 41.8594C336.91 50.503 343.929 56.5797 351.158 56.5797Z"
                      fill="#ffffff"
                      fill-rule="nonzero"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul class="navbar-nav mr-auto">
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link
                :to="{ name: item.routeName }"
                class="text-white nav-item nav-link"
              >
                {{ item.label }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'CartPage' }"
                class="text-white nav-item nav-link"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.z_index {
  z-index: 99;
}
</style>
