const Header = ({handledarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="save" 
            onClick={()=>handledarkMode((previosDarkMode)=> !previosDarkMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header;