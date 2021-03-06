//export default MyPlugin;

const VueRouteLink = Vue.component('route-link', {
	props: ['to'],
	template: '<a v-bind:href="getHref" v-on:click.prevent="goto" v-bind:class="{ \'is-active\': active }"><slot></slot></a>',
	methods: {
		goto: function() {
			Router.navigate(this.to);
		}
	},
	computed: {
		active: function() {
			if (Router.currentRoute === this.to) {
				return true;
			}
			return false;
		},
		getHref: function() { // Middle Click - open in new tab
			return "./?/" + this.to;
		}
	}
});

const VueZeroFrameRouter = {
	routes: null,
	install(Vue, options) {
		/*Vue.mixin({ // Inject stuff into all components
			mounted() {
				console.log('Mounted');
			}
		});*/
		Vue.component(VueRouteLink.name, VueRouteLink);
		//Vue.currentView = options.routes[0];
		/*Router.hooks({
			after: function(currentRoute, params) {
				vueInstance.currentView = 'route-' + currentRoute.replace(/:/g, '').replace(/\//g, '-');
				if (currentRoute == '') {
					vueInstance.currentView = 'route-home';
				}
			}
		});*/


		//Router.init();
	}
};

function VueZeroFrameRouter_Init(vueInstance, routes) {
	VueZeroFrameRouter.routes = routes;
	for (var i = 0; i < routes.length; i++) {
		Router.add(routes[i].route, !routes[i].component.init ? function() {} : routes[i].component.init, {
			before: !routes[i].component.before ? function() { return true; } : routes[i].component.before,
			after: !routes[i].component.after ? function() {} : routes[i].component.after,
			leave: !routes[i].component.leave ? function() {} : routes[i].component.leave
		}, routes[i].component);
	}
	Router.vueInstance = vueInstance;
	Router.setView = function(i, object) {
		this.vueInstance.currentView = object;
	}
	Router.init();
}
