interface elementDictionaryInterface {
  [name: string]: {
    get: () => HTMLElement | null,
    stagehand: boolean,
    changer: boolean,
    isVisible: () => boolean
  }
}

export default elementDictionaryInterface