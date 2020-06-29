import Vue from "vue";
import VueRouter from "vue-router";
import PartnerForm from "@/views/PartnerForm.vue";
import ResultShow from "@/views/ResultsShow.vue";
import SpecialResults from "@/views/SpecialResults.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PartnerForm",
    component: PartnerForm,
  },
  {
    path: "/results-show",
    name: "resultsShow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ResultShow,
  },
  {
    path: "/special-results",
    name: "specialResults",
    component: SpecialResults,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
