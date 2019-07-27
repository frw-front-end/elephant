<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/hPage" tag="span">HPage</router-link>
      </div>
      <div>
        <router-link to="/custom-page" tag="span">CustomPage</router-link>
      </div>
      <div>
        <router-link to="/me" tag="span">Me</router-link>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 25px 5px;
  position: fixed;
  bottom: 0;
  display: flex;
  background: black;
  width: 100%;
  z-index: 10;
  div {
    width: 33.33%;
    text-align: center;
  }
  span {
    color: white;
    &.router-link-active {
      color: #a4925a;
    }
  }
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
