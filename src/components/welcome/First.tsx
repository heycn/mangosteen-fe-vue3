import s from './welcome.module.scss'
import icon from '../../assets/icons/welcome_1.svg'
import { FunctionalComponent } from 'vue'

export const First: FunctionalComponent = () => (
  <div class={s.card}>
    <img src={icon} />
    <h2>别看我只是一头猪<br />我可是一头会省钱的猪</h2>
  </div>
)

First.displayName = 'First'
