import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './App.scss'
// import './assets/stylesheets/reset.scss'
// import './assets/stylesheets/vars.scss'

export const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView />
      </div>
    )
  }
})
