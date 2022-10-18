export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    sort: 'alpha'
  },
  options: {
    storySort: {
      locales: 'en-US',
      method: 'alphabetical',
      order: ['LoadingSkeleton']
    }
  }
}
