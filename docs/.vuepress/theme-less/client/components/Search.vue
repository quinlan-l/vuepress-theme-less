
<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from 'vue-router'
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import { DefaultSearchPageFrontmatter } from "../../shared/index.js";

const frontmatter = usePageFrontmatter<DefaultSearchPageFrontmatter>()
// get && check site data from front matter.

const sites = computed(() => {
  let tmpSites = frontmatter.value.sites
  if (tmpSites === null || tmpSites.length == 0) {
    return sites.value = [
      {
        "name": "Google",
        "host": "www.google.com",
        "url": "https://www.google.com/search?q="
      },
      {
        "name": "Microsoft Bing",
        "host": "www.bing.com",
        "url": "https://www.bing.com/search?q="
      }
    ]
  }
  return tmpSites
})

const siteIdx = computed(() => {
  let tmpIdx = parseInt(frontmatter.value.siteIdx)

  if (tmpIdx === null || Number.isNaN(tmpIdx) || tmpIdx == null || tmpIdx < 0 || tmpIdx >= sites.value.length) {
    return 0
  }
  return tmpIdx
})


console.log(sites.value.length)

var prompt = ref(genPrompt(siteIdx.value))
const keyword = ref("")

function siteChanged(event) {
  if (event) {
    if (keyword.value == "") {
      prompt.value = genPrompt(event.target.value)
    } else {
      search()
    }
  }
}

function searchOrNot() {
  if (keyword.value != "") {
    search()
  }
}

function genPrompt(idx: number) {
  console.log(sites.value[idx])
  return "搜索  用 " + sites.value[idx].host
}
function search() {
  var idx = siteIdx.value
  var targetSite = sites.value[idx].url

  window.open(targetSite + keyword.value.split(' ').join('+'))
}
</script>

<template>
  <div class="sc-wrapper">
    <div class="sc-box-flex">
      <select class="sc-select" v-if="sites.length" v-model="siteIdx" @change="siteChanged">
        <option v-for="(site, idx) in sites" :value="idx"> {{ site.name }} </option>
      </select>
      <div class="sc-input-wrapper">
        <span class="sc-input-left"></span>
        <input class="sc-input" autofocus="true" :placeholder="prompt" v-model="keyword" @keyup.enter="searchOrNot">
        <span class="sc-input-right" @click="searchOrNot"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  position: relative;
}

$sc-input-height : 52px;
$sc-box-height: calc(2 * $sc-input-height + 20px);
$sc-input-font-size: 18px;
$sc-select-font-size: calc($sc-input-font-size - 2px);

.sc-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sc-box-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 300px;
  max-width: calc(.4 * 1280px);
  height: $sc-box-height;
}

.sc-select {
  width: 60%;
  height: $sc-input-height;
  border: 0;
  font-size: $sc-select-font-size;
  color: #2196f3;
  text-align: center;

  option {
    text-align: center;
  }
}

.sc-input-wrapper {
  width: 100%;

  .sc-input-left {
    background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_magnifier_focus_white.197e0b86.png) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 14px;
    left: 18px;
    content: "";
    width: 24px;
    height: 24px;
    z-index: 1;
  }

  .sc-input {
    width: 100%;
    height: $sc-input-height;
    box-sizing: border-box;
    border-radius: 26px;
    padding: 0 $sc-input-height;
    font-size: $sc-select-font-size;
    text-align: center;
  }

  .sc-input-right {
    background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_return_white.0c921c5a.png) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    content: "";
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
}
</style>

