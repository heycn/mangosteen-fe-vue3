import s from './welcome.module.scss'

export const Third = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome_3' />
    </svg>
    <h2>可视化图表<br />每笔收支一目了然</h2>
  </div>
)

Third.displayName = 'Third'
