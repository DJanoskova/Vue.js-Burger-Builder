<template>
  <div class="container" :style="displayedStyle" :class="{handle: !ingredientData.disablePick}">
    <img :src="ingredientData.image" />
  </div>
</template>

<script>
import { ingredients } from '../models/ingredients'

export default {
  props: {
    ingredient: String,
    index: Number
  },
  computed: {
    ingredientData () {
      return ingredients.find(ingredient => ingredient.name === this.ingredient)
    },
    displayedStyle () {
      const { marginBottom, marginTop } = this.ingredientData

      return {
        marginBottom: marginBottom + '%',
        marginTop: marginTop + '%',
        zIndex: this.index + 2,
        overflow: 'visible'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;

  &.handle {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: saturate(1.1) brightness(1.2);
    }
  }
}

img {
  width: 100%;
}
</style>
