export interface MutationObserverOptions extends MutationObserverInit {
  tags: string[]
}

export type MutationHandlerObserver = () => void

export const MutationHandler = (options: MutationObserverOptions) => {
  let mutationObserver: MutationObserver | undefined = undefined
  let mutationHandlerObserver: MutationHandlerObserver | undefined = undefined
  let targetNode: HTMLElement | null = null
  let isObserving = false
  const tags = options.tags.map(t => t.toUpperCase())

  const config: MutationObserverInit = {
    childList: options.childList || true,
    subtree: options.subtree || true,
    attributes: options.attributes || true,
    characterData: options.characterData || true,
  }

  const callback = (mutationRecord: MutationRecord[]) => {
    console.log('mutationRecord', mutationRecord)
    const hasChanges = mutationRecord.some(record => tags.includes(record.target.nodeName))
    if (hasChanges && mutationHandlerObserver) {
      mutationHandlerObserver()
    }
  }

  const destroyMutationObserver = () => {
    if (mutationObserver !== undefined) {
      mutationObserver.disconnect()
      mutationObserver = undefined
    }
  }

  return {
    connect: (el: HTMLElement | null, observer: MutationHandlerObserver) => {
      console.log('connect')
      if (typeof MutationObserver === 'undefined') {
        return
      }
      destroyMutationObserver()
      targetNode = el
      mutationHandlerObserver = observer
      mutationObserver = new MutationObserver(callback)
    },
    observe: () => {
      console.log('observe')
      if (!isObserving && targetNode && mutationObserver) {
        mutationObserver.observe(targetNode, config)
        isObserving = true
      }
    },
    stopObserve: () => {
      console.log('stopObserve')
      mutationObserver?.disconnect()
      isObserving = false
    },
    disconnect: () => {
      console.log('disconnect')
      destroyMutationObserver()
      mutationHandlerObserver = undefined
      isObserving = false
    },
  }
}
