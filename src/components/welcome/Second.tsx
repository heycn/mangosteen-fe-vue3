import s from './welcome.module.scss'
import icon from '../../assets/icons/welcome_2.svg'
import { FunctionalComponent } from 'vue'

export const Second: FunctionalComponent = () => (
  <div class={s.card}>
    <img src={icon} />
    <h2>每日提醒<br />养成记账好习惯</h2>
  </div>
)

Second.displayName = 'Second'
