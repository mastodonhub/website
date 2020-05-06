<template>
  <i :class="'fa ' + IconClass" @click="handleIconClick" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'zft',
  data () {
    return {
      flag: false
    }
  },
  props: {
    IconClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleIconClick () {
      this.flag = !this.flag
      this.$emit('handleIconClick', this.flag)
    }
  }
}
</script>
