import { defineComponent, PropType } from 'vue'
import { Navbar } from '../shared/Navbar'

export const MainLayout = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },

  setup: (props, context) => {
    return () => (
      <>
        <Navbar>
          {{
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.()
          }}
        </Navbar>
        {context.slots.default?.()}
      </>
    )
  }
})
