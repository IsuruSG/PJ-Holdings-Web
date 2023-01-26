interface INavItem {
  title: string;
  isActive?: boolean;
  scroll?: number;
  onClick?: (...params: any) => void;
}

export default INavItem;
