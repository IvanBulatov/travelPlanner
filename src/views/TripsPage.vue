<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            trips: []
        }
    },
    mounted() {
        this.loadTrips();
    },
    methods: {
        async loadTrips() {
            try {
                let response = await axios.get('/trips');
                this.trips = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTrip(tripId) {
            alert('Путешествие успешно удалено, обновите страницу'); 
            await axios.delete(`/trips`, {
                params: {
                    id: tripId
                }
            });
            this.loadTrips();
        },
        getRelativeDate(date) {
            return dayjs(date).fromNow();
        }
    }
}
</script>

<template>
    <div class="trips-page">
        <h3>Все мои путешествия</h3>
        <ul class="list-group my-3">
            <li v-for="(trip, index) in trips" :key="trip._id" class="list-group-item trip" style="margin: 10px 0;">
                <h5>{{ trip.tripName }}</h5>
                <p>С {{ trip.dates.start }} по {{ trip.dates.end }}</p>
                <p>Места: {{ trip.places.join(', ') }}</p>
                <p>Описание: {{ trip.description }}</p>
                <button @click="deleteTrip(trip._id)" class="btn btn-danger">Удалить</button>
                <p style="margin-top: 5px" class="text-muted">Создано {{ getRelativeDate(trip.createdAt) }}</p>
            </li>
        </ul>
    </div>
</template>

<style>
.trips-page .trip {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

h3 {
    text-align: center;
}

.trip h5 {
    font-weight: bold;
}

.trip button {
    max-width: 200px;
}


.trip p {
    margin: 0;
}
</style>
