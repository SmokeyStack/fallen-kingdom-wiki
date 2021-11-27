<template>
  <div style="margin:auto; width: 60%; padding: 10px">
    <h1>404</h1>
	<span v-html="getImg"></span>
    <blockquote>{{ getMsg }}</blockquote>
    <a :href="$site.base" aria-label="go to home">
      Respawn
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const msgs = [
  `From the highest peak to the deepest depths, we've searched far and wide and still can't find the page you're looking for!`,
  `From the hellish nether to the barren end, we've searched far and wide and still can't find the page you're looking for!`
]
const imgs = [
	'https://github.com/SmokeyStack/SmokeyStack.github.io/blob/main/docs/public/assets/images/404.png?raw=true',
	'https://github.com/SmokeyStack/SmokeyStack.github.io/blob/main/docs/public/assets/images/ComingSoon.png?raw=true'
]
const chance = Math.floor(Math.random() * msgs.length)
const getImg = '<img width= "750" src="' + imgs[chance] + '">'
const getMsg = msgs[chance]
export default defineComponent({
  setup: () => ({
	getMsg,
	getImg
  })
})
</script>