<template>
  <div>
    <div class="text-container">
      <h2>
        {{ $store.state.partnerForm.name1 }} &
        {{ $store.state.partnerForm.name2 }}
      </h2>
      <h2>
        {{ $store.state.partnerForm.compatabilityPercentage }}% Compatability
      </h2>
      <button @click="$router.push('/')">Start Over</button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  h2 {
    font-weight: 500;
    font-size: 24px;
  }

  .text-container {
    margin-top: 80px;
  }

  button {
    margin-top: 16px;
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
