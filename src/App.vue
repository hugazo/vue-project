<script setup>
import { watch } from "vue";
import useName from "./usename";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  allowSpam: z.boolean(),
  lastName: z.string(),
});

// Component.
// - Receives a 2D schema =>>
// That component renders the schema with a dynamic form

const { name } = useName();

watch(name, () => {
  console.log("Name updated", name);
});
</script>

<template>
  <p>Hello {{ name }}</p>
  <input v-model="name" />
</template>
