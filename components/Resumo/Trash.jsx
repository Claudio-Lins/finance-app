import Image from 'next/image'

export default () => {
    return (
        <div className="w-4 mx-auto">
            <Image
                src='/trash.svg'
                width={30}
                height={30}
                layout='responsive'
            />
        </div>
    
    )
}