import { defineComponent, PropType } from 'vue'
import s from './Tabs.module.scss'

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>
    },
    onUpdateSelected: {
      type: Function as PropType<(name: string) => void>
    }
  },

  setup: (props, context) => {
    return () => {
      const array = context.slots.default?.()
      if (!array) return () => null
      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {array.map(tab => (
              <li
                class={tab.props?.name === props.selected ? s.selected : ''}
                onClick={() => props.onUpdateSelected?.(tab.props?.name)}
              >
                {tab.props?.name}
              </li>
            ))}
          </ol>
          <div></div>
        </div>
      )
    }
  }
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },

  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>
  }
})
