<template>
  <div class="not-found">
    <p>404</p>
    <ul>
      <li><a @click="goBack()" class="go-back">Go Back</a></li>
      <li><router-link to="/">Go Home</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  p {
    font-size: 50px;
  }
  ul {
    padding: 0 400px;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }
}
.go-back {
  color: #551A8B;
  cursor: pointer;
  text-decoration: underline;
}
</style>
