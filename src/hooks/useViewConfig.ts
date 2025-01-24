interface ViewConfig {
  homePagePadding: string
}
export default function useViewConfig(): ViewConfig {
  return {
    homePagePadding: '0 100px 0 100px'
  }
}