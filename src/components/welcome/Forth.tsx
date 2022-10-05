import s from './welcome.module.scss'
import icon from '../../assets/icons/welcome_4.svg'
import { FunctionalComponent } from 'vue'

export const Forth: FunctionalComponent = () => (
  <div class={s.card}>
    <img src={icon} />
    <h2>云端储存<br />不用担心数据丢失</h2>
  </div>
)

Forth.displayName = 'Forth'
