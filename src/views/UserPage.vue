<script>
import axios from 'axios';

export default {
    data() {
        return {
            isReady: false,
            user: null,
            users: []
        }
    },

    mounted() {
        this.loadData();
    },

    computed: {
        usersno() {
            return this.users.slice(1);
        }
    },

    methods: {
        async loadData() {
            try {
                this.isReady = false;
                await this.loadUser();
                await this.loadUsers()
                this.isReady = true;
            } catch (error) {
                console.error(error);
            }
        },

        async loadUser() {
            let response = await axios.get('/profile');
            this.user = response.data;
        },
        async loadUsers() {
            let response = await axios.get('/users');
            this.users = response.data;
        }
    }
}
</script>

<template>
    <div class="user-page">
        <div v-if="!isReady">
            Щас все загрузим...
        </div>
        <div class="user-container" v-if="isReady">
            <div class="user-info">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/public/avatars/admin.jpg" class="img-fluid rounded-start" alt="Avatar">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ user.firstName }} {{ user.lastName }}
                                </h5>
                                <p class="card-text">
                                    {{ user.info }}
                                </p>
                                <p class="card-text">
                                    Телефон: {{ user.phone }} (в 16ричной ;)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="comments-container">
                            <h3>Путешествия друзей</h3>
                            <ul class="list-group my-3">
                                <li v-for="(user, index) in usersno" class="list-group-item comment">
                                    <div class="col-md-4 comment-avatar">
                                        <img :src="'/public/avatars/user' + (index + 1) + '.jpg'"
                                            class="img-fluid rounded-start" alt="Avatar">
                                    </div>
                                    <div class="comment-content">
                                        <h5> {{ user.username }} </h5>
                                        <p>Места: {{ user.tripName }}</p>
                                        <p>Описание: {{ user.description }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.user-page img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

/* Стили для блока комментариев */
.comments-container {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
}

.comment {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
}

.comment-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: #ddd;
}

.comment-content {
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

}
</style>
