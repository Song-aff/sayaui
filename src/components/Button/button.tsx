import React from 'react'
import classNames from 'classnames'
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
export enum ButtonSize {
  large = 'lg',
  Small = 'sm',
}
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  href?: string
  children: React.ReactNode
}
// 合并原生属性与自定义属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
// Partial 转换为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, className, size, children, href, ...restProps } =
    props
  console.log(props.disabled)
  //btn,btn-lg,btn-primary...
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled && btnType === ButtonType.Link,
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
export default Button
