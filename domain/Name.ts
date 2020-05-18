export default class Name {
  constructor(private _name: string) {
    Name.validation(this._name)
  }

  static validation(name: string): never | void {
    if (name === '') {
      throw new Error('名前を入力してください')
    }
    if (typeof name !== 'string') {
      throw new TypeError('名前は文字列にしてください')
    }
    if (name.length > 8) {
      throw new Error('名前は8文字以内にしてください')
    }
  }
}
