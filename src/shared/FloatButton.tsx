import { defineComponent, PropType } from 'vue'
import { Icon } from './Icon'
import s from './FloatButton.module.scss'

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup: (props, context) => {
    return () => (
      <button class={s.button}>
        <Icon name={props.iconName} class={s.icon} />
      </button>
    )
  }
})
