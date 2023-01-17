interface IInput {
    type: string;
    label: string;
    multilined?: boolean;
    placeholder?: string;
    onChange: (...params: any) => void;
}

export default IInput;