
import Edit from './Edit'
import Trash from './Trash'

export default function LineResumo(props) {
    return (
        <div className='flex w-full px-4 py-1 justify-between'>
            <div className='py-1 w-full text-left'>{props.id}</div>
            <div className='py-1 w-full text-left'>{props.nome}</div>
            <div className='py-1 w-full text-left '>{props.tipo}</div>
            <div className='py-1 w-full '>{props.situacao}</div>
            <div className='py-1 w-full '>{props.date}</div>
            <div className='py-1 w-full '><Trash /></div>
            <div className='py-1 w-full '><Edit /></div>
            <div className='py-1 w-full  font-semibold text-right'>{props.valor}</div>
        </div>
    )
}