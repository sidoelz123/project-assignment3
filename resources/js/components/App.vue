<template>
    <div>
        <TheNavbar />
        <section class="bg-body-secondary pb-4" style="padding-top: 6em">
            <router-view />
        </section>
    </div>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";

export default {
    name: "App",
    components: {
        TheNavbar,
    },
    created() {
        this.$store.dispatch("FETCH_PRODUCTS");
    },
};
</script>
