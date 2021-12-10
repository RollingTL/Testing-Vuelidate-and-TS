<template>
  <input :value="value" type="text" @input="onInput" maxlength="16" />
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const emit = defineEmits(["update:value"]);

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit("update:value", value);
};
</script>
