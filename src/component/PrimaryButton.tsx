const PrimaryButton = ({children}) => {
    return(
        <button className={'flex bg-primary-main text-white px-3 py-2 rounded-lg text-xl'}>
            {children}
        </button>
    )
}

export default PrimaryButton