<template>
  <button type="button" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: []
}
</script>

<style>
button.btn {
  padding: 0.5rem;
  margin: 0.5rem 5%;
  font-family: inherit;
  background-color: #f8f8f8;
  border: 1px solid #3a0061;
  color: #000;
  border-radius: 0.5rem;
  cursor: pointer;
  width:90%;
  /* min-width: 8rem; */
}

button:hover,
button:active {
  background-color: yellow;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>