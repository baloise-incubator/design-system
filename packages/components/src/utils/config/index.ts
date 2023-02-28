import { isWindowDefined } from '../browser'
import { Config } from './config'
import { BalConfigState, BalIcons, BalLanguage, BalRegion } from './config.types'
import { BalConfigObserver } from './observable/observer'

export * from './initialize'
export * from './config.types'
export * from './config'
export * from './observable/observer'
export * from './mode'

export type BalConfigChangeFn = (config: BalConfigState) => void

export const onBalConfigChange = (callback: BalConfigChangeFn) => {
  attachToConfig({
    configChanged(state) {
      callback(state)
    },
  })
}

export const useBalConfig = (): Config | undefined => {
  if (!isWindowDefined()) {
    return
  }

  const win = window as any
  return win && win.BaloiseDesignSystem && win.BaloiseDesignSystem.config
}

export const attachToConfig = (observer: BalConfigObserver): void => {
  const config = useBalConfig()

  if (config) {
    config.attach(observer)
  }
}

export const attachComponentToConfig = (observer: BalConfigObserver): void => {
  const config = useBalConfig()

  if (config) {
    config.attachComponent(observer)
  }
}

export const detachComponentToConfig = (observer: BalConfigObserver): void => {
  const config = useBalConfig()

  if (config) {
    config.detachComponent(observer)
  }
}

export const updateBalLanguage = (language: BalLanguage): void => {
  const config = useBalConfig()

  if (config) {
    config.language = language
  }
}

export const updateBalRegion = (region: BalRegion): void => {
  const config = useBalConfig()

  if (config) {
    config.region = region
  }
}

export const updateBalAllowedLanguages = (allowedLanguages: BalLanguage[]): void => {
  const config = useBalConfig()

  if (config) {
    config.allowedLanguages = allowedLanguages
  }
}

export const updateBalIcons = (icons: BalIcons): void => {
  const config = useBalConfig()

  if (config) {
    config.icons = {
      ...config.icons,
      ...icons,
    }
  }
}

export const updateBalAnimated = (animated: boolean): void => {
  const config = useBalConfig()

  if (config) {
    config.animated = animated
  }
}
