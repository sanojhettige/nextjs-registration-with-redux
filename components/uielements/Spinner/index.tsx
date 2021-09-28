interface Props {
    className?: string,
}

const Spinner = ({ className }: Props) => {
    return <div className={`spinner-container`}>
        <div className={`spinner ${className}`}></div>
    </div>
};

export default Spinner;