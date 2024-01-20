import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import PostsPage from '../views/PostsPage.vue';
import UserPage from '../views/UsersPage.vue';
import UserInfo from '../views/UserInfo.vue';
import PostInfo from '@/views/PostInfo.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
		},
		{
			path: '/users',
			name: 'Users',
			component: UserPage,
		},
		{
			path: '/recipes',
			name: 'Posts',
			component: PostsPage,
		},
		// di ko na ginawang child ng post user ids
		{
			path: '/recipes/:id',
			name: 'RecipesId',
			component: PostInfo,
		},
		{
			path: '/users/:id',
			name: 'UserId',
			component: UserInfo,
		},
	],
});

export default router;
