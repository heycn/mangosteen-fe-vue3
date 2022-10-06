import { defineComponent, ref } from 'vue'
import { Button } from '../shared/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '../shared/FloatButton'
import { Center } from '../shared/Center'
import { Icon } from '../shared/Icon'
import { Navbar } from '../shared/Navbar'
import { Overlay } from '../shared/Overlay'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false)

    const onClick = () => {
      console.log('click')
    }

    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value
    }

    return () => (
      <div>
        <Navbar>
          {{
            default: () => 'Give My Money',
            icon: () => <Icon name='menu' class={s.icon} onClick={onClickMenu} />
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
        {overlayVisible.value && <Overlay onClose={() => (overlayVisible.value = false)} />}
      </div>
    )
  }
})
