<template>
<div id="app">
    <div class="top-banner">Test Frontend</div>
    <navbar />
    <router-view />
</div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 16px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.top-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #718096;
    border-radius: 8px;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
}

h1,
p,
span {
    color: #2c3e50;
}
</style>
