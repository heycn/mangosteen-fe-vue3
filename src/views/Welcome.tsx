import { defineComponent, Transition, VNode } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router'
import s from './Welcome.module.scss'

type Args = { Component: VNode; route: RouteLocationNormalizedLoaded }

export const Welcome = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#logo" />
          </svg>
          <h1>Give My Money</h1>
        </header>
        <main>
          <RouterView name='main'>
            {({ Component: Content, route: R }: Args) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {Content}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name='footer' />
        </footer>
      </div>
    )
  }
})
