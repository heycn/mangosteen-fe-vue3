import s from './welcome.module.scss'

export const Forth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome_4' />
    </svg>
    <h2>云端储存<br />不用担心数据丢失</h2>
  </div>
)

Forth.displayName = 'Forth'
