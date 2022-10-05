import { defineComponent } from 'vue'
import s from './WelcomeLayout.module.scss'
import icon from '../../assets/icons/welcome_1.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayout } from './WelcomeLayout'

export const First = defineComponent({
  setup: () => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={icon} />,
          title: () => <h2>别看我只是一头猪<br />我可是一头会省钱的猪</h2>,
          buttons: () => <>
            <span class={s.fake}>占位</span>
            <RouterLink to='/welcome/2'>下一页</RouterLink>
            <RouterLink to='/start'>跳过</RouterLink>
          </>
        }}
      </WelcomeLayout> 
    )
  }
})
