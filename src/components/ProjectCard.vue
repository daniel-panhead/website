<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { onMounted, ref } from 'vue'
import ProjectCardPopup from "./ProjectCardPopup.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgBreakpoint = breakpoints.greaterOrEqual('lg');
const mounted = ref(false);

const showPopup = ref(false);

const { title, tagline, link, isPopup = false } = defineProps<{
  title: string,
  tagline: string,
  link: string,
  isPopup?: boolean
}>();

const handleClickCard = () => {
  if (!isPopup && !lgBreakpoint.value) {
    showPopup.value = true;
  }
}

const handleKeyPress = (payload: KeyboardEvent) => {
  const key = payload.key;
  if (key === "Enter" || key === " ") {
    payload.preventDefault();
    handleClickCard();
  }
}

onMounted(() => mounted.value = true);

</script>

<template>
  <div style="display: contents">
    <div @click="handleClickCard" @keydown="handleKeyPress"
      :class="{ 'project_card': true, 'project_card--popup': isPopup }"
      :tabindex="mounted && !lgBreakpoint && !isPopup ? '0' : undefined"
      :aria-haspopup="mounted && !lgBreakpoint && !isPopup ? 'dialog' : false">
      <div class="project_card-image">
        <slot name="img"></slot>
      </div>
      <div class="project_card-body">
        <div class="project_card-content">
          <div :class="{ 'project_card-header': true, 'project_card-header--popup': isPopup }">
            <h3>{{ title }}</h3>
            <p>{{ tagline }}</p>
          </div>
          <p :class="{ 'project_card-description': !isPopup }">
            <slot></slot>
          </p>
        </div>
        <a :href="link" :class="{ 'project_card-link': true, 'project_card-link--responsive': !isPopup }"
          :aria-label="`Check out more about ${title}`" target="_blank">
          Check it out
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
      <svg v-if="!isPopup" class="project_card-expand_trigger" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"></path>
      </svg>
    </div>
    <ProjectCardPopup v-if="!isPopup && !lgBreakpoint" v-model="showPopup">
      <ProjectCard :title="title" :tagline="tagline" :link="link" :isPopup="true">
        <template #img>
          <slot name="img"></slot>
        </template>
        <slot></slot>
      </ProjectCard>
    </ProjectCardPopup>
  </div>
</template>

<style>
.project_card {
  box-sizing: border-box;
  align-self: stretch;
  flex-basis: calc(50% - 16px);
  /* Subtract half the gap of the parent flexbox :/ */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 28px;
  border: 2px solid black;
  border-radius: var(--default-border-radius);
  background-color: white;
  box-shadow: -8px 8px 0 0 black;
}

.project_card:active:not(:focus-within) {
  top: 4px;
  right: 4px;
  box-shadow: none;
}

.project_card--popup {
  box-shadow: none;
  overflow-x: scroll;
  flex-basis: 80%;
}

.project_card--popup:active:not(:focus-within) {
  top: 0;
  right: 0;
}

.project_card-body {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
}

.project_card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project_card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.project_card-header h3 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.project_card-header p {
  margin: 0;

  @media (min-width: 1024px) {
    font-weight: 600;
  }
}

.project_card-header--popup p {
  font-weight: 500;
}

.project_card-description {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}

.project_card-link {
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  color: var(--primary-text);
  font-weight: 600;
}

.project_card-link--responsive {
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
}

.project_card-expand_trigger {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 12px;
  margin-bottom: 12px;

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
