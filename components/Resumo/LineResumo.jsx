


export default function LineResumo(props) {
    return (
        <div className='flex w-full px-4 justify-between'>
            <div className='py-1'>{props.id}</div>
            <div className='py-1 bg-gray-400'>{props.nome}</div>
            <div className='py-1'>{props.tipo}</div>
            <div className='py-1'>{props.situacao}</div>
            <div className='py-1'>{props.date}</div>
            <div className='py-1 font-semibold text-right'>{props.valor}</div>
        </div>
    )
}