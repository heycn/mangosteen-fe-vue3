import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router'
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwipe'
import { throttle } from '../shared/throttle'

type Args = { Component: VNode; route: RouteLocationNormalizedLoaded }

export const Welcome = defineComponent({
  setup: () => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, { beforeStart: e => e.preventDefault() })
    const route = useRoute()
    const router = useRouter()
    const push = throttle(() => {
      if (route.name === 'Welcome1') {
        router.push('/welcome/2')
      } else if (route.name === 'Welcome2') {
        router.push('/welcome/3')
      } else if (route.name === 'Welcome3') {
        router.push('/welcome/4')
      } else if (route.name === 'Welcome4') {
        router.push('/start')
      }

    }, 750)

    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        push()
      }
    })

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#logo' />
          </svg>
          <h1>Give My Money</h1>
        </header>
        <main ref={main}>
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
