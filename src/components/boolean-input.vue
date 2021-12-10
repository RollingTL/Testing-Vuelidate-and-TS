<template>
  <div>
    <input :checked="value" type="checkbox" @click="onClick" />
    <span class="pl1">
      {{ value }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, getCurrentInstance, computed } from "vue";

const props = defineProps<{
  value: boolean;
}>();

const emit = defineEmits(["update:value"]);

const onClick = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).checked);
  //forceUpdate()
};
</script>
