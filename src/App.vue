<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'ethernet']"></font-awesome-icon></router-link>
      <router-link to="/list"><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon></router-link>
      <router-link to="/settings"><font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon></router-link>
    </div>
    <keep-alive >
      <router-view id="main" />
    </keep-alive>
  </div>
</template>

<style lang="stylus">
#app {
  height:100vh
  text-align: center;
  background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}

#main{
  position relative
  top 15%
}

#nav{
  font-size:3rem;
  position:relative;
  top: 90%;
  display:flex;
  justify-content:space-around;
  }
</style>
