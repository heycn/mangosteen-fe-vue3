import { defineComponent } from 'vue'
import { Icon } from './Icon'
import s from './FloatButton.module.scss'

export const FloatButton = defineComponent({
  setup() {
    return () => (
      <button class={s.button}>
        <Icon name='add' />
      </button>
    )
  }
})
