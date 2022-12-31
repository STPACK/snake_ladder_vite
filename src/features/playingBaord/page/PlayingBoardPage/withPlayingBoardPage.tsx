import { PlayingBoardPageProps } from './interface'

export function withPlayingBoardPage(
  Component: React.FC<PlayingBoardPageProps>
) {
  function WithPlayingBoardPage() {
    const newProps = {
      id: 1,
    }
    return <Component {...newProps} />
  }

  return WithPlayingBoardPage
}
