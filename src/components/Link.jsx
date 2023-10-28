// eslint-disable-next-line react/prop-types
const Link = ({ href, text }) => {
    return (
        <a href={href} className="flex flex-row items-center px-4 py-1 rounded-2xl transition-all hover:text-white hover:bg-primary">
            {text} 
        </a>
    )
}

export default Link