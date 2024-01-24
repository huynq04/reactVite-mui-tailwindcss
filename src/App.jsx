import { useState, useCallback, useMemo, useRef } from 'react'
import Content from './content'
import './App.css'

function App() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleAdd = () => {
        setProducts([...products, { name, price: Number(price) }])

        setName('')
        setPrice('')

        nameRef.current.focus() // focus vào ô input name
    }

    // useMemo: dùng để tính toán giá trị trả về, nếu giá trị dependencies không thay đổi thì không tính toán lại
    const total = useMemo(() => {
        const total = products.reduce((result, product) => {
            return result + product.price
        }, 0)

        return total
    }, [products]) // khi products thay đổi thì mới tính lại total

    return (
        <div className="App">
            <label>
                Name:
                <input
                    ref={nameRef}
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Price:
                <input type="text" placeholder="enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <button onClick={handleAdd}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
