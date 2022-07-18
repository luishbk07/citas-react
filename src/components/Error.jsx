const Error = ({ children }) => {
    return (
        <div className='bg-red-800 text-white text-center rounded-md p-3 mb-3 uppercase font-bold'>
            {children}
        </div>
    )
}

export default Error