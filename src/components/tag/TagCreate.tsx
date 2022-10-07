import { defineComponent, reactive } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { EmojiSelect } from '../../shared/EmojiSelect'
import { Icon } from '../../shared/Icon'
import s from './TagCreate.module.scss'

export const TagCreate = defineComponent({
  setup: () => {
    const formData = reactive({
      name: '',
      sign: ''
    })

    return () => (
      <MainLayout>
        {{
          title: () => '我的记账本',
          icon: () => <Icon name='menu' class={s.icon} />,
          default: () => (
            <>
              <div class={s.navBar}>
                <Icon name='menu' class={s.back} />
                创建标签
              </div>
              <form class={s.form}>
                <div class={s.formRow}>
                  <label class={s.formLabel}>
                    <span class={s.formItem_name}>标签名</span>
                    <div class={s.formItem_value}>
                      <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                    </div>
                    <div class={s.formItem_errorHint}>
                      <span>必填</span>
                    </div>
                  </label>
                </div>
                <div class={s.formRow}>
                  <label class={s.formLabel}>
                    <span class={s.formItem_name}>符号: {formData.sign}</span>
                    <div class={s.formItem_value}>
                      <EmojiSelect
                        v-model={formData.sign}
                        class={[s.formItem, s.emojiList, s.error]}
                      />
                    </div>
                    <div class={s.formItem_errorHint}>
                      <span>必填</span>
                    </div>
                  </label>
                </div>
                <p class={s.tips}>记账时长按标签即可进行编辑</p>
                <div class={s.formRow}>
                  <div class={s.buttonWrapper}>
                    <Button class={s.confirm} onClick={() => {}}>
                      确定
                    </Button>
                  </div>
                </div>
              </form>
            </>
          )
        }}
      </MainLayout>
    )
  }
})
