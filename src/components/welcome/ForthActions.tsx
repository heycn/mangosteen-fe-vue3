import s from './welcome.module.scss'
import { RouterLink, useRouter } from 'vue-router'
import { FunctionalComponent } from 'vue'

export const ForthActions: FunctionalComponent = () => {
  const router = useRouter()
  const handleNext = () => router.replace('/start')

  return (
    <div class={s.actions}>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <button onClick={handleNext}>完成</button>
      <RouterLink class={s.fake} to='/start'>
        跳过
      </RouterLink>
    </div>
  )
}

ForthActions.displayName = 'ForthActions'
