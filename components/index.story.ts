import { storiesOf } from '@storybook/vue'
// import Logo from './Logo.vue'
// import Vue from 'vue'

storiesOf('Hello World', module)
  .add('testcase', () => ({
    template: '<div>hello storybook nuxt</div>',
    props: {}
  }));
  // .add('radio', () => ({
  //   component: { Logo },
  //   template: '<Logo />',
  //   render: (h) => h(Vue.component('logo', Logo), { props: {} })
  // }))
