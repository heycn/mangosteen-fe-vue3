import { defineComponent, PropType, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import s from './ItemCreate.module.scss'

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },

  setup: (props, context) => {
    const overlayVisible = ref(false)
    const router = useRouter()
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value
    }

    return () => (
      <MainLayout>
        {{
          title: () => 'Give My Money',
          icon: () => <Icon name='menu' class={s.icon} onClick={onClickMenu} />,
          default: () => (
						<div>main</div>
          )
        }}
      </MainLayout>
    )
  }
})
