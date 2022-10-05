import s from './WelcomeLayout.module.scss'
import icon from '../../assets/icons/welcome_3.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayout } from './WelcomeLayout'

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={icon} />,
      title: () => <h2>可视化图表<br />每笔收支一目了然</h2>,
      buttons: () => <>
        <span class={s.fake}>占位</span>
        <RouterLink to='/welcome/4'>下一页</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink>
      </>
    }}
  </WelcomeLayout> 
)

Third.displayName = 'Third'