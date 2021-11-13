<template>
  <div>
    <h2 class="row1">Nested Pages</h2>
    <div>
      <router-link to="/fallen-kingdom-wiki/nested/one">Nested Page One</router-link>
      <router-link to="/fallen-kingdom-wiki/nested/two">Nested Page Two</router-link>
    </div>
    <router-view class="row3" />
  </div>
</template>

<script>
  export default {
    name: 'NestedPages'
  }
</script>