import s from './welcome.module.scss'

export const First = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome_1' />
    </svg>
    <h2>
      我不只是一头猪
      <br />
      我还是一头会省钱的猪
    </h2>
  </div>
)

First.displayName = 'First'
