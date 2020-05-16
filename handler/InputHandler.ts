import { ref, watch } from '@vue/composition-api'
import Name from '~/domain/Name'
import EmailAddress from '~/domain/EmailAddress'

interface IForm {
  name: string
  email: string
}

export default function() {
  const defaultInput: IForm = { name: '', email: '' }
  const errors = ref(defaultInput)

  const forms = {
    name: ref(''),
    email: ref('')
  }
  watch(
    forms.name,
    () => {
      errors.value.name = ''
      try {
        Name.validation(forms.name.value)
      } catch (e) {
        errors.value.name = e.message
      }
    },
    { lazy: true }
  )
  watch(
    forms.email,
    () => {
      errors.value.email = ''
      try {
        EmailAddress.validation(forms.email.value)
      } catch (e) {
        errors.value.email = e.message
      }
    },
    { lazy: true }
  )

  return { ...forms, errors }
}
