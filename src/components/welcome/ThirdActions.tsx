import s from './welcome.module.scss'
import { RouterLink, useRouter } from 'vue-router'
import { FunctionalComponent } from 'vue'

export const ThirdActions: FunctionalComponent = () => {
  const router = useRouter()
  const handleNext = () => router.replace('/welcome/4')

  return (
    <div class={s.actions}>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <button onClick={handleNext}>下一页</button>
      <RouterLink to='/start'>跳过</RouterLink>
    </div>
  )
}

ThirdActions.displayName = 'ThirdActions'
