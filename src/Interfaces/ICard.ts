interface ICard {
  heading: string;
  children?: React.ReactElement | JSX.Element | string;
  Icon?: any;
  onClick?: () => void;
}

export default ICard;
