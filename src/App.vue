<template>
  <div id="app">
    <div class="builder">
      <SelectIngredients :selected="model" @onAdd="handleAdd" @onRemove="handleRemove" @onReset="handleReset" />
      <BurgerImage :ingredients="model" />
      <pre>{{ model }}</pre>
    </div>
    Total sum of your burger: {{ total }} €
  </div>
</template>

<script>
import './assets/app.css'

import { getBaseIngredients, ingredients } from './models/ingredients'

import BurgerImage from './components/BurgerImage'
import SelectIngredients from './components/SelectIngredients'

export default {
  name: 'app',
  data () {
    return {
      model: getBaseIngredients()
    }
  },
  methods: {
    handleAdd (ingredient) {
      this.model.splice(1, 0, ingredient)
    },
    handleRemove (ingredient) {
      const index = this.model.findIndex(i => i === ingredient)
      if (index > -1) this.model.splice(index, 1)
    },
    handleReset () {
      this.model = getBaseIngredients()
    }
  },
  computed: {
    total () {
      const result = this.model.reduce((sum, ingredientName) => {
        const ingredientData = ingredients.find(ingredient => ingredient.name === ingredientName)
        return sum + ingredientData.price
      }, 0)
      return result.toFixed(2)
    }
  },
  components: {
    BurgerImage,
    SelectIngredients
  }
}
</script>

<style scoped>
#app {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
}

.builder {
  display: flex;
  align-items: center;
}

pre {
  background: #f1f1f1;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
