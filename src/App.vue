<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <boolean-input v-model:value="model.agree.$model" />
  <name-input v-model:value="model.name.$model" />
  <pre>{{ model }}</pre>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useForm } from "./modules/useForm";
import BooleanInput from "./components/boolean-input.vue";
import NameInput from "./components/name-input.vue";

const { model } = useForm();
</script>
