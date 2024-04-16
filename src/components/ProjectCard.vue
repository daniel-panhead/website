<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
  import { ref } from 'vue'
  import ProjectCardPopup from "./ProjectCardPopup.vue";
  // import ProjectCard from "./ProjectCard.vue";

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const lgBreakpoint = breakpoints.greaterOrEqual('lg');

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

</script>

<template>
  <div style="display: contents">
    <div @click="handleClickCard" :class="{'project_card': true, 'project_card--popup': isPopup}">
      <div class="placeholder_image"></div>
      <div class="project_card-body">
        <div :class="{'project_card-header': true, 'project_card-header--popup': isPopup}">
          <h3>{{title}}</h3>
          <p>{{tagline}}</p>
        </div>
        <p :class="isPopup ? 'project_card-description--popup' : 'project_card-description'">
          <slot></slot>
        </p>
        <a v-if="lgBreakpoint || isPopup" :href="link" class="project_card-link">
          Check it out
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
      <svg
        v-if="!isPopup && !lgBreakpoint"
        class="project_card-expand_trigger"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"></path>
      </svg>
    </div>
    <ProjectCardPopup v-if="!isPopup && !lgBreakpoint" v-model="showPopup">
      <ProjectCard :title="title" :tagline="tagline" :link="link" :isPopup="true">
        <slot></slot>
      </ProjectCard>
    </ProjectCardPopup>
  </div>
</template>

<style>
  .project_card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 28px;
    border: 1px solid black;
    border-radius: 12px;
    background-color: white;
    box-shadow: -4px 4px 0 0 black;
  }

  .project_card:active:not(:focus-within) {
    top: 4px;
    right: 4px;
    box-shadow: none;
  }

  .project_card--popup {
    box-shadow: none;
  }

  .project_card--popup:active:not(:focus-within) {
    top: 0;
    right: 0;
  }

  .placeholder_image {
    width: 240px;
    height: 155px;
    background: gray;
  }

  .project_card-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
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
    font-weight: 500;
  }

  .project_card-header p {
    font-size: 18px;
    margin: 0;

    @media (min-width: 1024px) {
      font-weight: 500;
    }
  }

  .project_card-header--popup p {
    font-weight: 500;
  }

  .project_card-description {
    display: none;
    font-size: 18px;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .project_card-description--popup {
    font-size: 18px;
  }

  .project_card-link {
    display: flex;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    color: var(--primary-text);
  }
  .project_card-expand_trigger {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 12px;
    margin-bottom: 12px;
  }
</style>
