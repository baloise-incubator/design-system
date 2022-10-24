import { balToastController } from './components/notice/bal-toast/bal-toast.controller'
import { balSnackbarController } from './components/notice/bal-snackbar/bal-snackbar.controller'
import { initialize } from './utils/config'
import { setupPlatforms } from './utils/platform'
import { VERSION } from './utils/constants/version.constant'
import { isDocumentDefined, isWindowDefined } from './utils/browser'

export default function () {
  if (isWindowDefined()) {
    const win = window as any
    win.BaloiseDesignSystem = win.BaloiseDesignSystem || {}

    initialize({}, win)
    setupPlatforms(win)

    win.BaloiseDesignSystem.toastController = balToastController
    win.BaloiseDesignSystem.snackbarController = balSnackbarController
    win.BaloiseDesignSystem.initialize = () => initialize(win.BaloiseDesignSystem.config, win)
    win.BaloiseDesignSystem.version = VERSION

    if (win.addEventListener) {
      win.addEventListener('balAppLoad', () => {
        if (isDocumentDefined()) {
          const body = document.querySelector('.bal-body')
          if (body && body.classList) {
            body.classList.add('is-ready')
          }
        }
      })
    }
  }
}
