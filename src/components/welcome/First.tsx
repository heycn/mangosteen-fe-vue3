import { defineComponent } from 'vue'
import s from './First.module.scss'
import icon from '../../assets/icons/welcome_1.svg'
import { RouterLink } from 'vue-router'

export const First = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={icon} />
          <h2>我不只是一头猪<br />还是一头会省钱的猪</h2>
        </div>
        <div class={s.actions}>
          <span class={s.fake}>占位</span>
          <RouterLink to='/welcome/2'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div>
    )
  }
})
