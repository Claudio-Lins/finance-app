


export default function LineResumo(props) {
    return (
        <div className='flex w-full px-4 justify-between'>
            <div className='py-1 w-full '>{props.id}</div>
            <div className='py-1 w-full text-left'>{props.nome}</div>
            <div className='py-1 w-full text-left '>{props.tipo}</div>
            <div className='py-1 w-full '>{props.situacao}</div>
            <div className='py-1 w-full '>{props.date}</div>
            <div className='py-1 w-full  font-semibold text-right'>{props.valor}</div>
        </div>
    )
}