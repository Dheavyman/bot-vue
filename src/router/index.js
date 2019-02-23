import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import StandardSidebar from '../components/sidebar/StandardSidebar.vue';
import BuildSidebar from '../components/sidebar/BuildSidebar.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';
import NotFound from '../components/shared/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: StandardSidebar,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: BuildSidebar,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [{
      name: 'BrowseHeads',
      path: 'heads',
      component: RobotHeads,
    }, {
      name: 'BrowseArms',
      path: 'arms',
      component: RobotArms,
    }, {
      name: 'BrowseTorsos',
      path: 'torsos',
      component: RobotTorsos,
    }, {
      name: 'BrowseBases',
      path: 'bases',
      component: RobotBases,
    }],
  }, {
    path: '/part/:partType/:id',
    name: 'Part',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }],
});
