import { defineComponent, PropType, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import s from './ItemCreate.module.scss'
import { Tab, Tabs } from '../../shared/Tabs'

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },

  setup: (props, context) => {
    const kind = ref('支出')
    const overlayVisible = ref(false)
    const onClickMenu = () => (overlayVisible.value = !overlayVisible.value)

    return () => (
      <MainLayout>
        {{
          title: () => 'Give My Money',
          icon: () => <Icon name='menu' class={s.icon} onClick={onClickMenu} />,
          default: () => (
            <>
              <Tabs selected={kind.value} onUpdateSelected={name => kind.value = name}>
                <Tab name='支出'>icon 列表</Tab>
                <Tab name='收入'>icon 列表2</Tab>
              </Tabs>
            </>
          )
        }}
      </MainLayout>
    )
  }
})
