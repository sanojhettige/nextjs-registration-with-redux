type FormMethod = 'POST' | 'PUT';
type AutoCompleteType = 'off' | 'on';

interface Props {
    children: React.ReactNode,
    onSubmit?: (e: any) => void,
    action?: string,
    method?: FormMethod,
    autocomplete?: AutoCompleteType
}

const Form = ({ children, autocomplete = 'off', ...otherProps }: Props) => {
    return (<form autoComplete={autocomplete} {...otherProps}>
        <input autoComplete="false" name="hidden" type="text" className="hidden" />
        {children}
    </form>);
}

export default Form;