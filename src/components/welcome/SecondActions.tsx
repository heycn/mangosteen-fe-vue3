import s from './welcome.module.scss'
import { RouterLink, useRouter } from 'vue-router'
import { FunctionalComponent } from 'vue'

export const SecondActions: FunctionalComponent = () => {
  const router = useRouter()
  const handleNext = () => router.replace('/welcome/3')

  return (
    <div class={s.actions}>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <button onClick={handleNext}>下一页</button>
      <RouterLink to='/start'>跳过</RouterLink>
    </div>
  )
}

SecondActions.displayName = 'FirstActions'
