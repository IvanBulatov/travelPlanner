<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            tripName: '',
            startDate: '',
            endDate: '',
            places: '',
            description: ''
        }
    },
    methods: {
        async createTrip() {
            try {
                await axios.post('/trip/create', {
                    tripName: this.tripName,
                    places: this.places.split(',').map(place => place.trim()),
                    dates: {
                        start: dayjs(this.startDate).format('YYYY-MM-DD'),
                        end: dayjs(this.endDate).format('YYYY-MM-DD')
                    },
                    description: this.description
                });
                this.$router.push('/trips');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<template>
    <div class="create-trip-page">
        <h3>Создать новое путешествие</h3>
        <form @submit.prevent="createTrip" class="my-3">
            <div class="mb-3">
                <label for="tripName" class="form-label">Название путешествия</label>
                <input type="text" v-model="tripName" class="form-control" id="tripName">
            </div>
            <div class="mb-3">
                <label for="startDate" class="form-label">Дата начала</label>
                <input type="date" v-model="startDate" class="form-control" id="startDate">
            </div>
            <div class="mb-3">
                <label for="endDate" class="form-label">Дата окончания</label>
                <input type="date" v-model="endDate" class="form-control" id="endDate">
            </div>
            <div class="mb-3">
                <label for="places" class="form-label">Места (через запятую)</label>
                <input type="text" v-model="places" class="form-control" id="places">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Описание</label>
                <textarea v-model="description" class="form-control" id="description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Создать</button>
        </form>
    </div>
</template>

<style>
.create-trip-page {
    max-width: 600px;
    margin: auto;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
