function loadState(NAME: string) {
  try {
    const serializedState = localStorage.getItem(NAME)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.log('Error loading state from localStorage:', error)
    return undefined
  }
}

export { loadState }
