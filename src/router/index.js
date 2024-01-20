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
			path: '/posts',
			name: 'Posts',
			component: PostsPage,
		},
		// di ko na ginawang child ng post user ids
		{
			path: '/posts/:id',
			name: 'PostId',
			component: PostInfo,
		},
		{
			path: '/users/:id',
			name: 'UserId',
			component: UserInfo,
		},

		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import('../views/AboutView.vue')
		// }
	],
});

export default router;
