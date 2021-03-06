import { rootActions } from '~/constants/vuex/root'
export default async function ({ store }) {
  // console.log(store.state.message)
  if (!store.state.serverReady) {
    await store.dispatch(rootActions.NUXT_SERVER_INIT)
  }
}
