import { PlayerSettingProvider } from '@hook/usePlayerSetting'
import { SettingBoardPage } from '@features/settingBoard/page/SettingBoardPage'
import { PlayingBoardPage } from '@features/playingBaord/page/PlayingBoardPage'
import './App.css'

function App() {
  return (
    <PlayerSettingProvider>
      <SettingBoardPage />
      <PlayingBoardPage />
    </PlayerSettingProvider>
  )
}

export default App
