import { FC, SVGProps } from 'react'
import { ReactComponent as Logo } from '@assets/HomeSetting/Logo.svg'
import { IconProps } from './interface'

const Svg = (
  SvgComponent: FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> => {
  return function Icon({
    height = '24',
    width = '24',
    className = '',
  }: IconProps) {
    const svgProps = {
      height,
      width,
      className,
    }
    return <SvgComponent {...svgProps} />
  }
}

export const LogoIcon = Svg(Logo)
