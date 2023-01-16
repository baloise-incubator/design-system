import { isWindowDefined } from '../browser'
import { BalLogger, defaultLoggerConfig } from '../log'
import { BALOISE_SESSION_KEY } from './config.const'
import { BalConfig, BalConfigState, BalIcons, BalLanguage, BalRegion } from './config.types'
import { BalConfigObserver } from './observable/observer'
import {
  balIconClose,
  balIconInfoCircle,
  balIconPlus,
  balIconMinus,
  balIconEdit,
  balIconTrash,
  balIconNavGoLeft,
  balIconNavGoRight,
  balIconNavGoDown,
  balIconNavGoUp,
  balIconCaretLeft,
  balIconCaretDown,
  balIconCheck,
  balIconDate,
  balIconDocument,
  balIconUpload,
  balIconMenuBars,
} from '../constants/icons.constant'

export class Config {
  private _componentObservers: BalConfigObserver[] = []
  private _observers: BalConfigObserver[] = []
  private _config: BalConfigState = {
    region: 'CH',
    language: 'de',
    allowedLanguages: ['de', 'fr', 'it', 'en'],
    icons: {
      balIconClose,
      balIconInfoCircle,
      balIconPlus,
      balIconMinus,
      balIconEdit,
      balIconTrash,
      balIconNavGoLeft,
      balIconNavGoRight,
      balIconNavGoDown,
      balIconNavGoUp,
      balIconCaretLeft,
      balIconCaretDown,
      balIconCheck,
      balIconDate,
      balIconDocument,
      balIconUpload,
      balIconMenuBars,
    },
    fallbackLanguage: 'de',
    logger: defaultLoggerConfig,
    animated: true,
  }

  get locale(): string {
    return `${this._config.language}-${this._config.region}`
  }

  get region(): BalRegion {
    return this._config.region
  }

  set region(region: BalRegion) {
    if (region !== this._config.region) {
      this._config.region = region
      this._notify()
    }
  }

  get language(): BalLanguage {
    return this._config.language
  }

  set language(language: BalLanguage) {
    if (language !== this._config.language) {
      if (this._config.allowedLanguages.includes(language)) {
        this._config.language = language
      } else {
        this._config.language = this._config.fallbackLanguage
      }

      this._notify()
    }
  }

  get allowedLanguages(): BalLanguage[] {
    return this._config.allowedLanguages
  }

  set allowedLanguages(allowedLanguages: BalLanguage[]) {
    if (allowedLanguages !== this._config.allowedLanguages) {
      this._config.allowedLanguages = allowedLanguages
      this._notify()
    }
  }

  get icons(): BalIcons {
    return this._config.icons
  }

  set icons(icons: BalIcons) {
    this._config.icons = {
      ...this._config.icons,
      ...icons,
    }
    this._notify()
  }

  get logger(): BalLogger {
    return this._config.logger
  }

  set logger(logger: BalLogger) {
    this._config.logger = { ...logger }
    this._notify()
  }

  get animated(): boolean {
    return this._config.animated
  }

  set animated(animated: boolean) {
    this._config.animated = animated
    this._notify()
  }

  attach(observer: BalConfigObserver): void {
    const isExist = this._observers.includes(observer)
    if (isExist) {
      return console.log('Subject: Observer has been attached already.')
    }

    this._observers.push(observer)
    observer.configChanged(this._config)
  }

  detach(observer: BalConfigObserver): void {
    const observerIndex = this._observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.')
    }

    this._observers.splice(observerIndex, 1)
  }

  attachComponent(observer: BalConfigObserver): void {
    const isExist = this._componentObservers.includes(observer)
    if (isExist) {
      return console.log('Subject: Observer has been attached already.')
    }

    this._componentObservers.push(observer)
    observer.configChanged(this._config)
  }

  detachComponent(observer: BalConfigObserver): void {
    const observerIndex = this._componentObservers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.')
    }

    this._componentObservers.splice(observerIndex, 1)
  }

  toString() {
    return JSON.stringify(this._config)
  }

  reset(config: BalConfig) {
    this._config = {
      ...this._config,
      ...config,
      icons: {
        ...this._config.icons,
        ...config.icons,
      },
    }
    this._notify(false)
  }

  private _notify(all = true) {
    for (const observer of this._componentObservers) {
      observer.configChanged(this._config)
    }

    if (all) {
      for (const observer of this._observers) {
        observer.configChanged(this._config)
      }
    }

    if (isWindowDefined()) {
      saveConfig(window, this._config)
    }
  }
}

export const config = /*@__PURE__*/ new Config()

export const configFromSession = (win: Window): any => {
  try {
    const configStr = win.sessionStorage.getItem(BALOISE_SESSION_KEY)
    return configStr !== null ? JSON.parse(configStr) : {}
  } catch (e) {
    return {}
  }
}

export const saveConfig = (win: Window, c: any) => {
  try {
    win.sessionStorage.setItem(BALOISE_SESSION_KEY, JSON.stringify(c))
  } catch (e) {
    return
  }
}
