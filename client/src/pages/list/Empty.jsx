import NotFound from './image/404-plain.png'

const Empty = () => {
    return (
        <>
            <img src={NotFound} className="img-fluid" alt="logo"/>
        </>
    )
}

export default Empty
