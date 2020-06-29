<template>
  <div>
    <h1>
      Find your
      <br />Compatability
    </h1>
    <partner-form></partner-form>
  </div>
</template>

<script>
import PartnerForm from "@/components/PartnerForm.vue";

export default {
  components: {
    PartnerForm
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin-top: 18px;
  margin-bottom: 24px;
}
</style>