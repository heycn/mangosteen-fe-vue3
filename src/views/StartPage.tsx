import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '../shared/FloatButton'
import { Center } from '../shared/Center'
import { Icon } from '../shared/Icon'
import { Navbar } from '../shared/Navbar'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('click')
    }

    return () => (
      <div>
        <Navbar>
          {{
            default: 'Give My Money',
            icon: <Icon name='menu' class={s.icon} />
          }}
        </Navbar>
        <Center class={s.logo_wrapper}>
          <Icon name='logo' class={s.logo} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton iconName='add' />
      </div>
    )
  }
})
