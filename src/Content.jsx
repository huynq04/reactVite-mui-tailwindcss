import { memo } from 'react'

function Content({ onIncrease }) {
    console.log('re-render')

    return (
        <>
            <h1>Hello ReactJs</h1>
            <button onClick={onIncrease}>click</button>
        </>
    )
}

export default memo(Content)
