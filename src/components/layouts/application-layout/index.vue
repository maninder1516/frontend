<template>
    <!-- Header section -->
    <Header />
    <router-view></router-view>
    <!-- Footer Section -->
    <Footer/>
</template>

<script>
import Header from './components/sections/Header.vue';
import Footer from './components/sections/Footer.vue';

export default {
    name:'AppLayout',
    components: {
        Header,
        Footer
    }
}
</script>