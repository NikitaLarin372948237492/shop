<template>
  <div class="headerelse">


    <h2 class="site-title">Ми тільки відкрилися! </h2>

  </div>
  <nav class="navigation">
    <router-link to="/">Home</router-link> |
    <router-link to="/man">Man</router-link> |
    <router-link to="/woman">Woman</router-link>|
    <router-link to="/kids">Kids</router-link>|
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {

  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;


    &.router-link-exact-active {
      color: #42b983;
    }
  }

}

firstLink {
  position: relative;
  top: 500px;
  right: 0px;

}

router-link {
  position: absolute;
  top: 100px;
  left: 100px;

}

.navigation {
  margin-top: 20px;
  margin-bottom: 20px;
}

.headerelse {
  width: 100%;
  height: 32px;
  margin-bottom: 20px;
  background-color: rgb(176, 176, 176);
  color: white;
  padding-top: 8px;
  text-size-adjust: 20;
}
</style>
