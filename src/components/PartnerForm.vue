<template>
  <form>
    <input
      class="name-input"
      type="text"
      placeholder="Partner 1"
      v-model="name1"
    />
    <input
      class="name-input"
      type="text"
      placeholder="Partner 2"
      v-model="name2"
    />
    <button @click.prevent="submitForm" class="submit-button">
      Find Your Compatability
    </button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name1: "",
        name2: "",
      };
    },
    methods: {
      submitForm() {
        this.$store.commit("partnerForm/TOGGLE_LOADING");
        if (this.name1 === "Warren" && this.name2 === "Salma") {
          this.$store.commit("partnerForm/TOGGLE_SPECIAL");
        } else {
          setTimeout(() => {
            this.$store.commit("partnerForm/TOGGLE_LOADING");
            this.$store
              .dispatch("partnerForm/calculateLove", {
                name1: this.name1,
                name2: this.name2,
              })
              .then(() => {
                this.$router.push("/results-show");
              });
          }, 5000);
        }
      },
    },
  };
</script>

<style scoped>
  .name-input {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 16px;
    background: #e7e7e7;
    border: none;
    color: black;
    padding: 12px 15px;
    border-radius: 8px;
    margin-bottom: 16px;
    width: 100%;
  }

  .submit-button {
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    font-size: 16px;
    background: #db93b0;
    border: none;
    width: 100%;
    padding: 16px 0;
    color: white;
    border-radius: 8px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  }
</style>
