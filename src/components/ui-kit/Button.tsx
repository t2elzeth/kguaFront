import classnames from "classnames";

export enum ButtonTypes {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum ButtonSizes {
  S = "small",
  M = "medium",
  L = "large",

  FILL = "fill",
  NONE = "none",
}

export enum ButtonStyles {
  OUTLINED = "outlined",
  GRAY = "gray",
  PLAIN = "plain",
  GREEN_OUTLINED = "greenOutlined",
  PLAIN_INTERACTIVE = "plainInteractive",
  ICON = "icon",
  LIGHT = "light",
  EMOJI = "emoji",
  PRIMARY_FLAT = "flat",
  DANGER = "danger",
}

export type ButtonProps = {
  tabIndex?: number;
  isRounded?: boolean;
  isHalfRounded?: boolean;
  borderColor?: "primaryBorder" | "grayBorder" | "noBorder";
  onClick?: (e?: any) => any;
  disabled?: boolean;
  type?: ButtonTypes;
  style?: ButtonStyles;
  size?: ButtonSizes;
  className?: string;
  active?: boolean;
  withoutFocus?: boolean;
  interactionColor?: "white" | "gray";
  emoji?: string;
  logoGradient?: boolean;
  customStyles?: any
};

export const Button: React.FC<ButtonProps> = ({
  tabIndex,
  onClick,
  disabled = false,
  isHalfRounded,
  type = ButtonTypes.BUTTON,
  children,
  active,
  className,
  borderColor,
  isRounded,
  logoGradient,
  customStyles,
}) => {
  return (
    <button
      tabIndex={typeof tabIndex === "number" ? tabIndex : undefined}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classnames(
        className,
        "button",
        "medium",
        "light",
        active && "active",
        disabled && "disabled",
        borderColor && "borderColor",
        isRounded && "rounded",
        isHalfRounded && "rounded-half",
        logoGradient && "logo-gradient"
      )}
      style={customStyles}
    >
      {children}
    </button>
  );
};
