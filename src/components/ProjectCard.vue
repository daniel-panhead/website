<script setup lang="ts">
  const { title, tagline } = defineProps<{
    title: string,
    tagline: string
  }>();

</script>

<template>
  <div class="project_card">
    <div class="placeholder_image"></div>
    <div class="project_card-body">
      <div class="project_card-header">
        <h3>{{title}}</h3>
        <p>{{tagline}}</p>
      </div>
      <p class="project_card-description">
        <slot></slot>
      </p>
      <a href="#" class="project_card-link">
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
</template>

<style>
  .project_card {
    flex-basis: 50%;
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

  .project_card-description {
    display: none;
    font-size: 18px;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .project_card-link {
    display: none;
    width: fit-content;
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--primary-text);
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
