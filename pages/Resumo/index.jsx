import Image from 'next/image'
import LineResumo from "../../components/Resumo/LineResumo";

export default function Resumo(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-black sm:bg-purple-50">
      <main className="relative h-screen w-full md:h-[712px] md:w-[350px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black">
      <Image className=" absolute"
          src="/Screen-iphone.png"
          alt="Picture of the author"
          layout="fill"
        />
        <div className="absolute top-0 inset-x-0">
          <div className="h-6 w-40 mx-auto bg-black rounded-b-2xl"></div>
        </div>
        <div className="relative w-full h-full flex flex-col items-center mt-6">
        <h1>Resumo</h1>
        <LineResumo />
        </div>
      </main>
    </div>
  );
}
