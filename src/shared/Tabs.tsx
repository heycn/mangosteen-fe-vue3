import { defineComponent, PropType } from 'vue'
import s from './Tabs.module.scss'

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>
    }
  },

  setup: (props, context) => {
    return () => {
      const tabs = context.slots.default?.()
      if (!tabs) return () => null
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {tabs.map(tab => (
              <li
                class={tab.props?.name === props.selected ? s.selected : ''}
                onClick={() => context.emit('update:selected', tab.props?.name)}
              >
                {tab.props?.name}
              </li>
            ))}
          </ol>
          <div>{tabs.find(tab => tab.props?.name === props.selected)}</div>
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
