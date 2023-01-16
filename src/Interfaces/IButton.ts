interface IButton {
  title: string;
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

export default IButton;
