import { PlayingBoardPage } from './PlayingBoardPage'
import { withPlayingBoardPage } from './withPlayingBoardPage'

const ConnectedPlayingBoardPage = withPlayingBoardPage(PlayingBoardPage)

export { ConnectedPlayingBoardPage as PlayingBoardPage }
