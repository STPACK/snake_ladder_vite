import cn from 'classnames'
import { LogoIcon } from '@components/Icons'
import { SettingBoardPageProps } from './interface'

export function SettingBoardPage({
  isSetting,
  handleIsSetting,
}: SettingBoardPageProps) {
  return (
    <div
      className={cn(
        'w-[550px] mx-auto mt-[60px] border border-gray-border rounded-lg shadow p-[40px]',
        {
          hidden: !isSetting,
        }
      )}
    >
      <div className='flex flex-col items-center'>
        <LogoIcon width='100' height='107' />
        <span className='text-base text-body mt-[20px]'>Welcome !!</span>
        <span className='text-[30px] text-primary font-[600] pb-[20px] border-b border-gray-border'>
          Snakes Labs & ladders NEW!!
        </span>
      </div>
    </div>
  )
}
