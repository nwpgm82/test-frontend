<template>
<div class="navbar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Pokemon' }">Pokemon</router-link>
    <!-- <router-link :to="{ name: 'Home' }">Function 1</router-link>
    <router-link :to="{ name: 'Home' }">Function 2</router-link>
    <router-link :to="{ name: 'Home' }">Function 3</router-link> -->
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 24px;
    width: 100%;
    margin: 50px 0;

    a {
        font-size: 24px;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    .router-link-exact-active {
        color: #48bb78;
    }
}
</style>
