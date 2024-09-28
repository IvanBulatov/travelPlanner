<script>

import AppSidebar from './components/AppSidebar.vue';
import { RouterView } from 'vue-router'

export default {
	components: {
		AppSidebar,
		RouterView
	}
};


</script>

<template>
	<div class="app">
		<div class="app-container">
			<app-sidebar></app-sidebar>
			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<style>
.app-container {
	display: flex;
}

.main-content {
	margin-left: 250px;
	padding: 20px;
	width: calc(100% - 250px);
	background-color: #EDEEF0;
	min-height: 1080px;
}
</style>
