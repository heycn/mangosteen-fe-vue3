import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>
    }
  },

  setup: (props, context) => {
    return () => (
      <svg class={s.svg}>
        <use xlinkHref={`#${props.name}`} onClick={props.onClick}></use>
      </svg>
    )
  }
})
