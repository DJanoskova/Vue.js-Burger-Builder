<template>
  <draggable
    :list="ingredients"
    group="burger"
    class="burger"
    handle=".handle"
    :move="handleMove"
  >
    <transition-group name="list" tag="div" mode="out-in">
      <IngredientImage v-for="(ingredient, index) in ingredients"
        :key="ingredient"
        :ingredient="ingredient"
        :index="ingredients.length - index" />
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

import IngredientImage from './IngredientImage'

export default {
  props: {
    ingredients: Array
  },
  methods: {
    handleMove ({ draggedContext }) {
      const { futureIndex } = draggedContext
      return !(futureIndex === 0 || futureIndex === this.ingredients.length - 1)
    }
  },
  components: {
    draggable,
    IngredientImage
  }
}
</script>

<style scoped>
.burger {
  padding: 2rem;
  max-width: 450px;
}
</style>
