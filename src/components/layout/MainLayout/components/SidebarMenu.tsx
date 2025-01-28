import classNames from "classnames";
import { useLocation, useNavigate } from "react-router";
import {
  FC,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { MenuItem as BaseMenuItem, Menu as BaseMenu } from "@mui/base";

import {
  IconLayoutDashboard,
  IconArticle,
  IconBubbleText,
  IconUsers,
  IconSettingsCog,
  IconWashDryclean,
  IconChevronCompactDown,
} from "@tabler/icons-react";

const sidebarMenu: MenuItemItf[] = [
  {
    type: "section",
    title: "Application",
    list: [
      {
        type: "item",
        icon: <IconLayoutDashboard strokeWidth={2.5} />,
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        type: "sub-menu",
        icon: <IconArticle strokeWidth={2.5} />,
        title: "Article",
        list: [
          { title: "Article List", path: "/aritcle/list" },
          { title: "Created Article", path: "/article/create" },
          { title: "Article Comment", path: "/article/comment" },
          { title: "Article Tag", path: "/article/tag" },
          { title: "Article Type", path: "/article/type" },
        ],
      },
      {
        icon: <IconBubbleText strokeWidth={2.5} />,
        title: "Message",
        path: "/message",
      },
    ],
  },
  {
    type: "section",
    title: "Other",
    list: [
      { icon: <IconUsers strokeWidth={2.5} />, title: "User", path: "/user" },
      {
        icon: <IconSettingsCog strokeWidth={2.5} />,
        title: "Setting",
        path: "/setting",
      },
    ],
  },
];

export type ItemType = {
  type?: "item" | "section" | "sub-menu";
  icon?: ReactNode;
  path?: string;
  title: string;
  list?: ItemType[];
};

interface MenuSectionItf {
  label: string;
  list: ItemType[];
}

interface MenuItemItf extends ItemType {
  type?: "item" | "section" | "sub-menu";
  list?: ItemType[];
  onClick?: () => void;
}

interface MenuItf {
  id?: string;
  type?: "sub-menu" | "menu";
  open?: boolean;
  list: MenuItemItf[];
}

const MenuSection: FC<MenuSectionItf> = (props) => {
  const { label, list } = props;
  return (
    <li className="menu-section">
      <p className="label">{label}</p>
      <ul>
        {list.map((item, index) => (
          <MenuItem
            type={item.type}
            icon={item.icon}
            path={item.path}
            title={item.title}
            key={index}
            list={item.list}
          />
        ))}
      </ul>
    </li>
  );
};

const MenuItem: FC<MenuItemItf> = (props) => {
  const { icon, path, title, type = "item", list } = props;

  const navigator = useNavigate();
  const location = useLocation()

  const [itemState, setItemState] = useState<{
    height: number;
    open: boolean;
  }>({
    height: 0,
    open: false,
  });

  const subMenu = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const triggerEl = trigger.current;
    if (triggerEl) {
      setItemState((pre) => {
        return {
          ...pre,
          height: triggerEl.offsetHeight,
        };
      });
    }
  }, []);

  const handleClick = (type: ItemType["type"], path: string, title?: string) => {
    if (type === "item") {
      navigator(path, {
        state: { title: title }
      });
    } else if (type === "sub-menu") {
      const subMenuEl = subMenu.current;
      if (subMenuEl) {
        setItemState({
          open: !itemState.open,
          height: itemState.open ? itemState.height - subMenuEl.offsetHeight : itemState.height + subMenuEl.offsetHeight,
        });
      }
    } else {
      setItemState((pre) => {
        return {
          ...pre,
          open: !pre.open,
        };
      });
    }
  };

  if (type === "sub-menu" && list) {
    return (
      <div className="item-sub" style={itemState.height ? { height: itemState.height } : {}}>
        <BaseMenuItem
          ref={trigger}
          className="menu-item-sub"
          onClick={() => handleClick(type, "")}
        >
          <span className="menu-icon">{icon}</span>
          <span className="title">{title}</span>
          <span className="arrow">
            <IconChevronCompactDown size={18} />
          </span>
        </BaseMenuItem>
        <Menu ref={subMenu} type="sub-menu" list={list} open={false}></Menu>
      </div>
    );
  } else if (type === "section" && list) {
    return <MenuSection label={title} list={list} />;
  } else {
    return (
      <BaseMenuItem
        className={classNames("menu-item", { "menu-item_selected": path === location.pathname })}
        onClick={() => handleClick(type, path as string, title)}
      >
        <span className="menu-icon">{icon}</span>
        <span className="title">{title}</span>
      </BaseMenuItem>
    );
  }
};

const Menu = forwardRef<HTMLDivElement, MenuItf>((props, ref) => {
  const { id, list, type = "menu" } = props;
  return (
    <BaseMenu
      ref={ref}
      id={id}
      className={type === "sub-menu" ? "sub-menu" : ""}
    >
      {list.map((item, index) => {
        if (type === "sub-menu") {
          return (
            <MenuItem
              icon={<IconWashDryclean size={8} />}
              title={item.title}
              path={item.path}
              key={index}
            />
          );
        } else {
          return (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              path={item.path}
              type={item.type}
              list={item.list}
            />
          );
        }
      })}
    </BaseMenu>
  );
});

export default () => <Menu id="sidebar-menu" list={sidebarMenu} />;
