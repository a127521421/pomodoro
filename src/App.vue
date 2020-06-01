<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/list">清單</router-link>|
      <router-link to="/settings">設定</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="stylus">
#app {
  height:100vh
  text-align: center;
  background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}

#nav{
  font-size:3rem
  }
</style>
