import { defineComponent } from 'vue'
import s from './First.module.scss'
import icon from '../../assets/icons/welcome_2.svg'
import { RouterLink } from 'vue-router'

export const Second = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={icon} />
          <h2>每日提醒<br />养成定期记账习惯</h2>
        </div>
        <div class={s.actions}>
          <span class={s.fake}>占位</span>
          <RouterLink to='/welcome/3'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div>
    )
  }
})
