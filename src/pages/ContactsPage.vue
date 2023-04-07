<script>
import axios from "axios";
import { store } from "../store";
import { Form, Field, ErrorMessage } from "vee-validate";

const dataArray = "storage-key";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      surname: "",
      mail: "",
      phone: "",
      address: "",
      date: "",
      total: "",
      errors: {},
      success: false,
      loading: false,

      store,
    };
  },
  methods: {
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "La mail è richiesta";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Devi inserire una mail valida";
      }
      // All is good
      return true;
    },
    validateRequest(value) {
      // if the field is empty
      if (!value) {
        return "Il campo è richiesto";
      }
      return true;
    },
    validateNumeric(value) {
      const numericRegex = /^[0-9]+$/;
      if (!numericRegex.test(value)) {
        return "Il campo deve contenere solo numeri";
      }
      if (value.length > 15) {
        return "Il campo non può contenere più di 15 caratteri";
      }
      return true;
    },
    validateLength50(value) {
      if (value.length > 50) {
        return "Il campo non può contenere più di 50 caratteri";
      }
      return true;
    },
    validateLength70(value) {
      if (value.length > 70) {
        return "Il campo non può contenere più di 70 caratteri";
      }
      return true;
    },
    validateLength100(value) {
      if (value.length > 100) {
        return "Il campo non può contenere più di 100 caratteri";
      }
      return true;
    },
    addPrice(cart) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        const itemTotal = parseFloat(cart[i].price) * cart[i].quantity;
        total += itemTotal;
      }
      this.totalPrice = total.toFixed(2);
    },
    sendForm() {
      const data = {
        name: this.name,
        surname: this.surname,
        mail: this.mail,
        phone: this.phone,
        address: this.address,
        date: "2020/04/12",
        total: this.store.total,
        slug: this.name,
      };
      this.loading = true;
      axios
        .post(`${this.store.baseUrl}/api/contacts`, data)
        .then((response) => {
          if (!response.data.success) {
            this.errors = response.data.errors;
            this.loading = false;
          } else {
            this.name = "";
            this.surname = "";
            this.mail = "";
            this.phone = "";
            this.address = "";
            this.success = true;
            setTimeout(() => {
              localStorage.clear();
              this.loading = false;
              this.$router.push({ name: "thank-you" });
            }, 2000);
          }
        });
    },
  },
  mounted() {
    const personalPlate = JSON.parse(localStorage.getItem(dataArray));
    if (personalPlate) {
      this.myData = personalPlate;
      let arrayCart = Object.values(this.myData);
      if (Array.isArray(arrayCart)) {
        this.myData = arrayCart.filter((word) => word.quantity > 0);
        this.addPrice(this.myData);
      }
    }
    this.store.total = this.totalPrice;
  },
};
</script>

<template lang="">
  <div class="d-flex justify-content-center" v-if="loading">
    <div class="">
      <div class="contain-svg mt-5">
        <svg
          style="
            fill-rule: nonzero;
            clip-rule: evenodd;
            stroke-linecap: round;
            stroke-linejoin: round;
          "
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <clipPath id="ArtboardFrame">
            <rect height="83.9" width="369.91" x="0" y="0" />
          </clipPath>
          <g class="loader" clip-path="url(#ArtboardFrame)" id="SvgjsG2920">
            <g opacity="1">
              <path
                d="M38.042-1.7053e-13C59.2052-1.7053e-13 76.0854 17.1327 76.0854 38.0447C76.0854 53.9177 66.2596 68.027 51.6469 73.57L51.6469 83.9L48.3716 83.9L48.3716 74.8297C41.5692 76.5934 34.5147 76.5934 27.7123 74.8297L27.7123 83.9L24.6889 83.9L24.6889 73.57C9.82428 68.027-0.0015221 53.9177-0.0015221 38.0447C-0.0015221 17.1327 17.1306-1.7053e-13 38.042-1.7053e-13ZM49.8833 31.9979C54.1663 31.9979 57.4416 36.533 57.4416 42.076C57.4416 46.8631 54.9222 50.8943 51.6469 51.9021L51.6469 72.0583C65.5038 66.5153 74.5738 53.1619 74.5738 38.0447C74.5738 17.8886 58.1974 1.51171 38.042 1.51171C17.8865 1.51171 1.51014 17.8886 1.51014 38.0447C1.51014 53.1619 10.8321 66.5153 24.6889 72.0583L24.6889 51.9021C21.1617 50.6423 18.6423 45.3514 18.6423 38.8006C18.6423 36.2811 19.1462 34.0135 19.6501 31.9979L22.1695 31.9979L22.6734 37.5408L23.4292 44.3435L24.1851 37.5408L24.6889 31.9979L27.7123 31.9979L28.4681 37.5408L29.2239 44.3435L29.7278 37.5408L30.4836 31.9979L32.4992 31.9979C33.255 34.0135 33.7589 36.2811 33.7589 38.8006C33.7589 45.3514 30.9875 50.6423 27.7123 51.9021L27.7123 73.0661C34.5147 75.0817 41.8211 75.0817 48.3716 73.0661L48.3716 51.9021C45.0964 50.8943 42.5769 46.8631 42.5769 42.076C42.5769 36.533 45.8522 31.9979 49.8833 31.9979Z"
                fill="#fe724c"
                fill-rule="nonzero"
                opacity="1"
                stroke="none"
              />
            </g>
          </g>
        </svg>
      </div>
      <h5>Work in progress</h5>
    </div>
  </div>
  <div v-else>
    <div class="mt-4 d-flex justify-content-center">
      <div class="w-50">
        <Form @submit="sendForm">
          <div class="row">
            <div>
              <label class="control-label" for="nome">Nome:</label>
              <Field
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model="name"
                placeholder="nome"
                maxlength="50"
                :rules="[validateRequest, validateLength50]"
              />
              <ErrorMessage class="text-danger" name="name" />
            </div>
            <div>
              <label class="control-label" for="cognome">Cognome:</label>
              <Field
                type="text"
                class="form-control"
                name="surname"
                id="surname"
                v-model="surname"
                placeholder="cognome"
                maxlength="70"
                :rules="[validateRequest, validateLength70]"
              />
              <ErrorMessage class="text-danger" name="surname" />
            </div>
            <div>
              <label class="control-label" for="email">Email:</label>
              <Field
                type="email"
                class="form-control"
                name="mail"
                id="mail"
                v-model="mail"
                placeholder="email"
                :rules="validateEmail"
              />
              <ErrorMessage class="text-danger" name="mail" />
            </div>
            <div>
              <label class="control-label" for="telefono">Telefono:</label>
              <Field
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="telefono"
                maxlength="15"
                :rules="[validateRequest, validateNumeric]"
              />
              <ErrorMessage class="text-danger" name="phone" />
            </div>
            <div>
              <label class="control-label" for="indirizzo">Indirizzo:</label>
              <Field
                type="text"
                class="form-control"
                name="address"
                id="address"
                v-model="address"
                placeholder="indirizzo"
                maxlength="100"
                :rules="[validateRequest, validateLength100]"
              />
              <ErrorMessage class="text-danger" name="address" />
            </div>
            <div class="mt-4 text-center">
              <div id="dropin-container"></div>
              <!-- <button type="submit" class="send_email">Invia</button> -->
              <button type="submit" id="submit-button" class="send_email">
                Invia
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.contain-svg {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;

  svg {
    height: 100%;
    width: 100%;
  }
}

.loader {
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(2);
  }
}

button {
  background-color: transparent;
  border: 3px solid $primary_color;
  border-radius: 10px;
  padding: 3px 6px;
  color: $primary_color;
  font-weight: bold;
  transition: all 0.25s;

  &:hover {
    background-color: $primary_color;
    color: white;
  }
}

label {
  margin: 0.5em 0em;
}
</style>
