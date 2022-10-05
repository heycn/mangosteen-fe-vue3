import s from './welcome.module.scss'
import icon from '../../assets/icons/welcome_3.svg'
import { FunctionalComponent } from 'vue'

export const Third: FunctionalComponent = () => (
  <div class={s.card}>
    <img src={icon} />
    <h2>可视化图表<br />每笔收支一目了然</h2>
  </div>
)

Third.displayName = 'Third'
