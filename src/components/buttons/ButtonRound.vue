<template>
  <button type="button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  width: 1.7rem;
  height: 1.7rem;
  display: inline-flex;
  border-radius: 50%;
  margin: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 1rem;
}
</style>
