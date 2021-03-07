<template>
<div>
  <my-addItion></my-addItion>
  <h3>-------------------------</h3>
  <my-subtraction></my-subtraction>
</div>
</template>

<script>
import addItion from './components/addItion'
import subtraction from './components/subtraction'

export default {
  data(){
    return {

    }
  },
  components: {
    'my-addItion': addItion,
    'my-subtraction': subtraction 
  }
}
</script>