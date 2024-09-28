<script>
export default {
    methods: {
        goProfile() {
            this.$router.push({
                name: 'profile'
            });
        },
        goTrips() {
            this.$router.push({
                name: 'trips'
            });
        },
        goCreateTrip() {
            this.$router.push({
                name: 'create-trip'
            });
        }
    }
}
</script>

<template>
    <div class="app-sidebar text-white">
        <ul class="list-unstyled">
            <li class="mb-4">
                <div class="btn text-white btn-logo d-flex align-items-center" @click="goProfile">
                    <img src="../assets/logo.png" alt="Logo" class="logo-img">
                    <!-- <span class="ml-2">TravelPlanner</span> -->
                </div>
            </li>
            <li>
                <button class="btn btn-primary btn-link" @click="goProfile" :class="{
                    'active-link': $route.name === 'profile'
                }">
                    Моя страница
                </button>
            </li>
            <li>
                <button class="btn btn-primary btn-link" @click="goTrips" :class="{
                    'active-link': $route.name === 'trips'
                }">
                    Мои путешествия
                </button>
            </li>
            <li>
                <button class="btn btn-primary btn-link" @click="goCreateTrip" :class="{
                    'active-link': $route.name === 'create-trip'
                }">
                    Создать путешествие
                </button>
            </li>
        </ul>
    </div>
</template>

<style>
.app-sidebar ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
}

.app-sidebar li {
    width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.app-sidebar button {
    width: 100%;
}

.app-sidebar {
    height: 10580px;
    padding: 20px;
    position: fixed;
    width: 250px;
    background-color: rgb(11, 0, 208);
}

.app-sidebar .btn-logo {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.logo-img {
    width: 200px;
    height: 60px;
}

.btn-link {
    width: 100%;
    text-align: left;
    padding: 10px 15px;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
}

.btn-link:hover,
.active-link {
    background-color: rgb(66, 66, 66);
    border-radius: 5px;
    transition: 1.5s;
    color: rgb(255, 255, 255);
    margin: 5px 0;
}
</style>
