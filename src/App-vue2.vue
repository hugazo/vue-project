<script>
export default {
  setup() {
    const name = "";

    return {
      name,
    };
  },
  watch: {
    name(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<template>
  <p>Hello {{ name }}</p>
</template>
