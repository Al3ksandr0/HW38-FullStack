import "./Button.css"

function Button({ children = "оформить сейчас", myColor, onClick }) { //
    return (
        <button className={myColor} onClick={onClick}>
            {children}{/* текст внутри кнопки */}
        </button>
    )
}

export default Button
