import { usePlayerSetting } from '@hook/usePlayerSetting'
import { SettingBoardPageProps } from './interface'

export function withSettingBoardPage(
  Component: React.FC<SettingBoardPageProps>
) {
  function WithSettingBoardPage() {
    const { isSetting, handleIsSetting } = usePlayerSetting()
    const newProps = {
      isSetting,
      handleIsSetting,
    }
    return <Component {...newProps} />
  }

  return WithSettingBoardPage
}
