import { createContext, useContext, useState } from 'react'
import { FunctionComponentType } from 'interface/FunctionComponentType'
import { UserType } from 'interface/UserType'
import { BoardSizeType } from 'interface/BoardSizeType'

interface PlayerSettingContextProps {
  isSetting: boolean
  user: UserType[]
  boardSize: BoardSizeType
  addUser: (name: string) => void
  deleteUser: (index: number) => void
  changeBoardSize: (value: BoardSizeType) => void
  handleIsSetting: () => void
}

const PlayerSettingContext = createContext<PlayerSettingContextProps>({
  isSetting: true,
  user: [],
  boardSize: { row: 4, col: 4 },
  addUser: () => {},
  deleteUser: () => {},
  changeBoardSize: () => {},
  handleIsSetting: () => {},
})

export function PlayerSettingProvider({ children }: FunctionComponentType) {
  const [isSetting, setIsSetting] = useState(true)
  const [user, setUser] = useState<UserType[]>([])
  const [boardSize, setBoardSize] = useState<BoardSizeType>({ row: 4, col: 4 })

  function handleIsSetting() {
    setIsSetting(prev => !prev)
  }

  function addUser(name: string) {
    setUser(prev => {
      prev.push({ name, isStop: false })
      return prev
    })
  }

  function deleteUser(index: number) {
    setUser(prev => prev.slice(index, 1))
  }

  function changeBoardSize(value: BoardSizeType) {
    setBoardSize(value)
  }

  const value = {
    isSetting,
    user,
    boardSize,
    handleIsSetting,
    addUser,
    deleteUser,
    changeBoardSize,
  }

  return (
    <PlayerSettingContext.Provider value={value}>
      {children}
    </PlayerSettingContext.Provider>
  )
}

export function usePlayerSetting() {
  return useContext(PlayerSettingContext)
}
