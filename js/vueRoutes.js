const NotFound = {
	template: '<p v-once>Page Not Found</p>'
}
const Home = {
	data: function() {
		return {
			tutorialsList: []
		}
	},
	template: '\
		<section class="section">\
			<div class="columns">\
				<div class="column is-8 is-offset-2">\
					<h2>Our Goal</h2>\
					<p>Our Goal is to provide useful information, tutorials, and help to those who want to develop Zites in order to inspire more development on the ZeroNet. This site will <em>not</em> teach the basics of front-end web development. You can go <a href="#">here</a> for that. This site only focuses on ZeroNet-specific development, including the ZeroFrame API. To get started developing a Zite for the ZeroNet, follow <a href="tutorials/?t=the_basics">this tutorial</a> to start learning to build basic zites. You can then move on to other tutorials on the <a href="#">tutorials page</a>.</p>\
				</div>\
			</div>\
		</section>\
		<section class="section">\
			<div class="columns">\
				<div class="column is-5 is-offset-2">\
					<h2>Tutorials</h2>\
					<div v-html="tutorialsList"></div>\
				</div>\
				<div class="column">\
					<h2>Tips &amp; Tricks</h2>\
				</div>\
			</div>\
		</section>'
}

const About = {
	template: '<p v-once>About Page</p>'
}

const routes = [
	{path: '/', component: Home},
	{ path: '/about', component: About}
]

const router = new VueRouter({
	routes: routes
});