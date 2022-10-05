import s from './WelcomeLayout.module.scss'
import icon from '../../assets/icons/welcome_2.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayout } from './WelcomeLayout'

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={icon} />,
      title: () => <h2>每日提醒<br />养成记账好习惯</h2>,
      buttons: () => <>
        <span class={s.fake}>占位</span>
        <RouterLink to='/welcome/3'>下一页</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink>
      </>
    }}
  </WelcomeLayout> 
)

Second.displayName = 'Second'