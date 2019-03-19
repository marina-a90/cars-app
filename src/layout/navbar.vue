<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item>
                            <router-link to="/cars">
                                Cars
                            </router-link>
                    </b-nav-item>

                    <b-nav-item>
                            <router-link to="/cars/add">
                                Add car
                            </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
