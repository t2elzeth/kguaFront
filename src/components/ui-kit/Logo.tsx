import classnames from 'classnames'

export enum LogoSize {
  S = 'small',
  M = 'medium',
  L = 'large',

  NONE = 'none',
}

export const LogoSizeProp = {
  small: {
    width: 20,
    height: 20,
  },
  medium: {
    width: 40,
    height: 40,
  },
  large: {
    width: 60,
    height: 60,
  },
}

export type LogoProps = {
  size?: LogoSize
  className?: string
  customClassName?: string
  text?: string
  onLogoClick?: ([any]: any) => void
}

const Logo: React.FC<LogoProps> = ({ size = LogoSize.S, onLogoClick, className }) => {
  const { width, height } = LogoSizeProp[size] || {}

  return (
    <img
      width={width}
      height={height}
      className={classnames('logo', size && `${size}`, className)}
      onClick={onLogoClick}
      src="/images/logo.svg"
      alt="ioka logo"
    />
  )
}

export { Logo }
