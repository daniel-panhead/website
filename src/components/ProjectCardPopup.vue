<script setup lang="ts">
const shown = defineModel<boolean>();

// const props = defineProps<{
//   description: string
// }>();
</script>

<template>
  <div v-if="shown" class="project_card-popup">
    <div @click.self="shown = false" class="project_card-popup_container">
      <button @click="shown = false" class="unstyled_button">
        <svg class="project_card-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="29"
          height="29" fill="none" viewBox="0 0 24 24">
          <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.project_card-popup {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100dvw;
  height: 100dvh;
}

.project_card-popup_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: end;
  gap: 24px;
  padding: 0 24px;
}

.unstyled_button {
  background: none;
  border: none;
  padding: 0;
}

</style>