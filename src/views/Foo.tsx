import { defineComponent } from 'vue'

export const Foo = defineComponent({
	setup() {
		return () => <>
			<div>Foo</div>
		</>
	}
})