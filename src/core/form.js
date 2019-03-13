export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  value() {
    const value = {}

    Object.keys(this.controls).forEach(item => {
      value[item] = this.form[item].value
    })

    return value
  }

  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach(item => {
      const validators = this.controls[item]

      let isValid = true

      validators.forEach(validator => {
        isValid = validator(this.form[item].value) && isValid
      })

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}