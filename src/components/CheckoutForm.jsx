import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import "./CheckoutForm.css"
function CheckoutForm() {
    let [name, setName] = useState("Jäger Meister") // :)
    let [phone, setPhone] = useState("")
    let [address, setAddress] = useState("")
    let [btnColor, setBtnColor] = useState("red")

    const handleOrder = () => {

        alert(`Заказ оформлен!\n Имя: ${name}\n Телефон: ${phone}\n Адрес: ${address}`)

        setBtnColor("green")
    }

    return (
        <div>
            <h2>Оформление заказа</h2>
            {/* e.target – это сам инпут, .value – это новый текст который введем, через сам setAddress уже записываем данные новые которые введем */}
            <Input placeholder="Введите имя" onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Введите телефон" onChange={(e) => setPhone(e.target.value)} />
            <Input placeholder="Введите адрес" onChange={(e) => setAddress(e.target.value)} />
            <Button myColor={btnColor} onClick={handleOrder}></Button>
        </div>
    )
}

export default CheckoutForm
