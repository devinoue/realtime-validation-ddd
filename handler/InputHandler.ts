import { ref, watch, reactive } from '@vue/composition-api'
import Name from '~/domain/Name'
import EmailAddress from '~/domain/EmailAddress'

interface IForm {
  name: string
  email: string
}

export default function() {
  const defaultInput: IForm = { name: '', email: '' }
  const errors = ref(defaultInput)

  const forms = reactive({
    name: '',
    email: ''
  })
  watch(
    () => forms.name,
    () => {
      errors.value.name = ''
      try {
        Name.validation(forms.name)
      } catch (e) {
        errors.value.name = e.message
      }
    },
    { lazy: true }
  )
  watch(
    () => forms.email,
    () => {
      errors.value.email = ''
      try {
        EmailAddress.validation(forms.email)
      } catch (e) {
        errors.value.email = e.message
      }
    },
    { lazy: true }
  )

  return { forms, errors }
}
