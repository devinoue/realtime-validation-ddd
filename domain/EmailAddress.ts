export default class EmailAddress {
  constructor(private _email: string) {
    EmailAddress.validation(this._email)
  }

  static validation(email: string) {
    if (email === '') {
      throw new TypeError('メールアドレスを入力してください')
    }
    if (email.match(/.+@.+\..+/) === null) {
      throw new Error('Eメールアドレスのフォーマットに従って入力してください')
    }
  }
}
