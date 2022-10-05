import s from './welcome.module.scss'
import { useSwipe } from '../../hooks/useSwipe'
import { ref, defineComponent, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

export const First = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>()
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    const router = useRouter()
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })

    return () => (
      <div class={s.card} ref={div}>
        <svg>
          <use xlinkHref='#welcome_1' />
        </svg>
        <h2>我不只是一头猪<br />我还是一头会省钱的猪</h2>
      </div>
    )
  }
})
