import s from './WelcomeLayout.module.scss'
import icon from '../../assets/icons/welcome_4.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayout } from './WelcomeLayout'

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={icon} />,
      title: () => <h2>云端储存<br />不用担心数据丢失</h2>,
      buttons: () => <>
        <span class={s.fake}>占位</span>
        <RouterLink to='/start'>开始记账</RouterLink>
        <span class={s.fake}>占位</span>
      </>
    }}
  </WelcomeLayout> 
)

Forth.displayName = 'Forth'