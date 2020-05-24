import { watch, reactive } from '@vue/composition-api'
import Name from '~/domain/Name'
import EmailAddress from '~/domain/EmailAddress'

interface IForm {
  name: string
  email: string
}

export default function() {
  const defaultInput: IForm = { name: '', email: '' }

  const forms = reactive({ ...defaultInput })
  const errors = reactive({ ...defaultInput })

  watch(
    () => forms.name,
    () => {
      errors.name = ''
      try {
        Name.validation(forms.name)
      } catch (e) {
        errors.name = e.message
      }
    },
    { lazy: true }
  )
  watch(
    () => forms.email,
    () => {
      errors.email = ''
      try {
        EmailAddress.validation(forms.email)
      } catch (e) {
        errors.email = e.message
      }
    },
    { lazy: true }
  )

  return { forms, errors }
}
