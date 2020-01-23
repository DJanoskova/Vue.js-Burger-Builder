<template>
  <div id="app">
    <div class="builder">
      <SelectIngredients :selected="model" @onAdd="handleAdd" @onRemove="handleRemove" @onReset="handleReset" />
      <BurgerImage :ingredients="model" />
    </div>
  </div>
</template>

<script>
import './assets/app.css'

import { getBaseIngredients } from './models/ingredients'

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
}

.builder {
  display: flex;
  align-items: center;
}
</style>
