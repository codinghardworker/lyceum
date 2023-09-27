import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70a5fceb = () => interopDefault(import('..\\pages\\index1.vue' /* webpackChunkName: "pages/index1" */))
const _5fa26422 = () => interopDefault(import('..\\pages\\indexmain.vue' /* webpackChunkName: "pages/indexmain" */))
const _01feb1a7 = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _5089f596 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _26e68a4e = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _3eee2243 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _a99b5cb2 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _54fb6535 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _7f1ab8a7 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _03c04396 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _3a4577c3 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _af65face = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _5f2b3307 = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _201eafd5 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _657fbfeb = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _3748811e = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _59c9310a = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _79407232 = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _4e12a229 = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _0e2524f3 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _425c1348 = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _b9ec5098 = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _36a58467 = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _37ee8a75 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _2aeef586 = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _66598594 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _1f3866a5 = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _61b7eff7 = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _1381d7c4 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _12c6ba90 = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _7639123f = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _2a6690c6 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _5e9f81a6 = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _4189af22 = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _2720f3b2 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _3b64c0b5 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _255c2672 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _56cf2e15 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _1c914b47 = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _0f7b9f95 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _3aae1527 = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _960fdc96 = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _18ed2f36 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _17872637 = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _dff5e894 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index1",
    component: _70a5fceb,
    name: "index1"
  }, {
    path: "/indexmain",
    component: _5fa26422,
    name: "indexmain"
  }, {
    path: "/about/about-dark",
    component: _01feb1a7,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _5089f596,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _26e68a4e,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _3eee2243,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _a99b5cb2,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _54fb6535,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _7f1ab8a7,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _03c04396,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _3a4577c3,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _af65face,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _5f2b3307,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _201eafd5,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _657fbfeb,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _3748811e,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _59c9310a,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _79407232,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _4e12a229,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _0e2524f3,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _425c1348,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _b9ec5098,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _36a58467,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _37ee8a75,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _2aeef586,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _66598594,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _1f3866a5,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _61b7eff7,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _1381d7c4,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _12c6ba90,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _7639123f,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _2a6690c6,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _5e9f81a6,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _4189af22,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _2720f3b2,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _3b64c0b5,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _255c2672,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _56cf2e15,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _1c914b47,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _0f7b9f95,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _3aae1527,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _960fdc96,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _18ed2f36,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _17872637,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _dff5e894,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
