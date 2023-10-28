// eslint-disable-next-line react/prop-types
const ActiveLink = ({ href, text }) => {
    return (
        <a href={href} className="text-primary border border-primary px-6 py-1 items-center flex flex-row rounded-2xl transition-all hover:text-white hover:bg-primary">
            {text} 
        </a>
    )
}

export default ActiveLink