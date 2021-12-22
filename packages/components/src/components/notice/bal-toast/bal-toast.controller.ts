import { BalNoticeController, BalNoticeOptions } from '../../../helpers/notice.controller'
import { Components } from '../../../types'

export interface BalToastOptions extends BalNoticeOptions {}

export class BalToastController extends BalNoticeController {
  constructor() {
    super({
      tag: 'bal-toast',
    })
  }

  create(options: BalToastOptions): Components.BalToast {
    return super.create(options)
  }
}

export const balToastController = new BalToastController()
