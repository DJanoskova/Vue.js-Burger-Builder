<template>
  <div class="ingredients">
    <table>
      <tbody>
      <tr v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient">
        <td>
          {{ ingredient.label }}
        </td>
        <td>
          <ButtonRound @click="$emit('onRemove', ingredient.name)">
            -
          </ButtonRound>
          <ButtonRound @click="$emit('onAdd', ingredient.name)" class="primary">
            +
          </ButtonRound>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="$emit('onReset')" class="mt-2">Reset burger</button>
  </div>
</template>

<script>
import { ingredients } from '../models/ingredients'

import ButtonRound from './buttons/ButtonRound'

export default {
  props: {
    selected: Array
  },
  data () {
    return {
      ingredients: ingredients.filter(ingredient => !ingredient.disablePick)
    }
  },
  methods: {
    handleAdd(ingredient) {
      this.selected.unshift(ingredient)
      this.$emit('input', this.selected)
    },
    handleRemove(ingredient) {
      const index = this.selected.findIndex(i => i === ingredient)
      this.selected.splice(index, 1)
      this.$emit('input', this.selected)
    }
  },
  components: {
    ButtonRound
  }
}
</script>

<style scoped lang="scss">
.ingredients {
  border-radius: 1rem;
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.ingredient {
  background: white;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  padding: 0.3rem;

  img {
    object-fit: cover;
  }
}
</style>
