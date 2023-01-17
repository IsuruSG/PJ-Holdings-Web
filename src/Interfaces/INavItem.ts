interface INavItem {
  title: string;
  isActive?: boolean;
  onClick?: (...params: any) => void;
}

export default INavItem;
