import Image from 'next/image'
import { TbGlobe } from 'react-icons/tb'
import Label from './components/label'
import { Switch } from '@/components/ui/switch'
import { FaGoogle } from 'react-icons/fa6'

const Home = () => {
  return (
    <div className="flex">
      <div className="hidden lg:flex lg:max-w-[900px] w-full h-[100vh] relative">
        <Image
          src={'/images/bg-login.png'}
          layout="fill"
          objectFit="cover"
          alt="bg"
        />
      </div>
      <div className="w-full flex-1 flex flex-col  p-8 ">
        <div className="flex gap-4 items-center justify-center">
          <TbGlobe size={48} />
          <span className="text-3xl font-medium">Página de Login</span>
        </div>
        <h2 className="text-xl mt-16">Bem-vindo novamente..</h2>
        <div className="mt-8 flex flex-col gap-3">
          <label className="text-[#333333] font-light text-xs" htmlFor="email">
            Login
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Entre com seu email"
            className="h-[40px]  bg-gray-400/20 rounded-lg p-3 placeholder:text-black placeholder:opacity-100 placeholder:text-sm "
          />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <label
            className="text-[#333333] font-light text-xs"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            className="h-[40px]  bg-gray-400/20 rounded-lg p-3 placeholder:text-black placeholder:opacity-100 placeholder:text-sm "
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="my-8 flex items-center justify-start gap-2">
            <Switch />
            <span className="font-light text-sm">Lembre-se</span>
          </div>
          <a href="#" className="text-blue-400">
            Esqueceu sua senha?
          </a>
        </div>
        <button className="w-full bg-blue-500 text-white p-3 rounded-xl">
          Entre
        </button>
        <div className="w-full h-[1px] bg-gray-400/20 my-8"></div>
        <button className="flex items-center justify-center gap-4 bg-black text-white p-3 rounded-xl">
          <FaGoogle />
          Ou faça login com o Google
        </button>
        <span className="text-xs text-center mt-8">
          Não tem uma conta?{' '}
          <a href="#" className="text-blue-400">
            Clique aqui
          </a>{' '}
          para se registrar
        </span>
      </div>
    </div>
  )
}

export default Home
