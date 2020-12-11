<template>
  <div id="app">
    <div class="container">
      <keep-alive >
        <router-view id="main" />
      </keep-alive>
      <div id="nav">
        <router-link to="/" class="button"><font-awesome-icon :icon="['fas', 'ethernet']"></font-awesome-icon></router-link>
        <router-link to="/list" class="button"><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon></router-link>
        <router-link to="/settings" class="button"><font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
#app {
  height:auto
  text-align: center;
}

#app .container {
  max-width: 375px;
  margin: 10px auto;
  border: 1px solid  #FFCC22;
  padding: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  font-family: "Nunito","Noto Sans TC", sans-serif;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
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
  justify-content:space-between;
  }
</style>
