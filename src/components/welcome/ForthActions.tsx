import s from './welcome.module.scss'
import { useRouter } from 'vue-router'
import { FunctionalComponent } from 'vue'

export const ForthActions: FunctionalComponent = () => {
  const router = useRouter()
  const replace = (to: string) => router.replace(to)

  return (
    <div class={s.actions}>
      <button class={s.fake}>跳过</button>
      <button onClick={() => replace('/start')}>开始</button>
      <button class={s.fake}>跳过</button>
    </div>
  )
}

ForthActions.displayName = 'ForthActions'
