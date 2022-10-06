import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router'
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwipe'
import { throttle } from '../shared/throttle'

type Args = { Component: VNode; route: RouteLocationNormalizedLoaded }

const pushMap: Record<string, string> = {
  'Welcome1': '/welcome/2',
  'Welcome2': '/welcome/3',
  'Welcome3': '/welcome/4',
  // 'Welcome4': '/start'
}

export const Welcome = defineComponent({
  setup: () => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, { beforeStart: e => e.preventDefault() })
    const route = useRoute()
    const router = useRouter()
    const replace = throttle(() => {
      const name = (route.name || 'Welcome1').toString()
      router.replace(pushMap[name])
    }, 750)

    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        replace()
      }
    })

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#logo' />
          </svg>
          <h1>我的记账本</h1>
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
