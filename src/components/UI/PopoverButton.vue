<template>
  <button type="button" class="btn example-popover" data-bs-trigger="hover focus" data-bs-toggle="popover" :data-bs-content="description" :title="title">
      <slot></slot>
    </button>
</template>

<script>
export default {
  props: ['title', 'description'], 
}
</script>