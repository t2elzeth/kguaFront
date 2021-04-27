import Link from "next/link";
import classnames from "classnames";

export type Item = {
  id?: string | number;
  navTitle: string;
  onClick?: ([any]: any) => void;
  active?: boolean;
  route?: string;
  presentIcon?: string;
  disabled?: boolean;
};

export type SidebarProps = {
  className?: string;
  activeButtonClassName?: string;
  items: Item[];
  activeRoute?: string;
  customIcon?: {
    svg?: string | undefined;
    png: string;
  };
  onSidebarClick?: ([any]: any) => void;
  withIcon?: boolean;
  link?: boolean;
  activeItem?: number;
};

export const Sidebar: React.FC<SidebarProps> = ({
  className,
  items = [],
  activeRoute,
  activeButtonClassName,
  onSidebarClick,
  link = true,
  activeItem,
}) => (
  <div
    className={classnames("sidebar", className)}
    onClick={onSidebarClick}
  >
    {items.map(
      (
        {
          navTitle,
          active,
          onClick,
          route = "#",
          presentIcon,
          disabled = false,
        },
        index
      ) => {
        const activeStyle =
          active ||
          activeRoute === route ||
          (activeItem !== undefined && activeItem === index);

        if (link) {
          return (
            <Link href={route}>
              <a
                key={navTitle}
                className={classnames(
                  "item",
                  // activeStyle && "active",
                  // activeStyle && "activeButtonClassName",
                  disabled && "disabled"
                )}
              >
                {presentIcon && (
                  <img
                    src={presentIcon}
                    alt="sidebar icon"
                    className="presentIcon"
                  />
                )}
                <p className={classnames("item-text")}>{navTitle}</p>
              </a>
            </Link>
          );
        }
        return (
          <div
            key={navTitle}
            className={classnames(
              "item",
              // activeStyle && "active",
              // activeButtonClassName
            )}
            onClick={onClick}
          >
            <p className={classnames("item-text")}>{navTitle}</p>
          </div>
        );
      }
    )}
  </div>
);
