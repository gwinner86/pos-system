const Swal = require('sweetalert2')

export default class SweetAlertWrapper {

  showMessage(title, message, type='success') {
      return Swal.fire(title, message, type)
  }
                                                     
  showDialogYesOrNo(sweetAlertOptions, callback=undefined) {

      Swal.fire(sweetAlertOptions).then((result) => {
          if(!(typeof callback == "undefined") && result.value) {
              callback()
          }
      })
  }

}