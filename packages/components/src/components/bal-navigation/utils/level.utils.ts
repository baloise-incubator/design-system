import { LevelInfo, MetaLevelInfo } from '../bal-navigation.types'

export const readSubLevels = async (element: HTMLElement, target: string): Promise<LevelInfo[]> => {
  const subLevels = Array.from(element.querySelectorAll<any>(target)) as any[]
  const levels: LevelInfo[] = []
  for (const level of subLevels) {
    const info = await level.getLevelInfo()
    levels.push(info)
  }
  return levels
}

export const mapToMetaLevels = (levels: LevelInfo[]): MetaLevelInfo[] => {
  return levels.filter(isMetaLevel).map(mapToMetaLevel)
}

const isMetaLevel = (level: LevelInfo): boolean => {
  return level.type === 'meta'
}

const mapToMetaLevel = (level: LevelInfo): MetaLevelInfo => {
  return {
    value: level.value,
    label: level.label,
    isTabLink: level.isTabLink,
    link: level.link,
    linkLabel: level.linkLabel,
    trackingData: level.trackingData,
    onClick: level.onClick,
  }
}
