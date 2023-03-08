import s from './welcome.module.scss'

export const Second = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome_2' />
    </svg>
    <h2>
      每日提醒
      <br />
      养成记账好习惯
    </h2>
  </div>
)

Second.displayName = 'Second'
