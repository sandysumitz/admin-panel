import * as React from 'react';
import inp from '../generic/enums';

interface Props extends BaseProps {
    name: string;
    class: string;
    isChecked?: boolean;
    inputType?: string;
}

class GenericInput extends React.Component<Props, any>{
    constructor(props: Props, state: any) {
        super(props, state);
    }
    public render() {
        return (
            <input
                key={this.props.key}
                id={this.props.id}
                type={this.props.inputType}
                name={this.props.name}
                className={this.props.class}
                defaultChecked={this.props.isChecked} />
        );
    }
}
export default GenericInput;