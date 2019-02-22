<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" alt="" class="logo" />
              Build-a-Bot
            </router-link>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class="nav-link" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
      <router-view />
    </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555555, #999999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

main {
  background-color: #ffffff;
  min-height: 300px;
  padding: 30px;
  width: 964px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: #ffffff;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaaaaa;
  width: 100px;
  min-height: 300px;
}
</style>
