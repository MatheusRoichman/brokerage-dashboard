import Image from "next/image";
import Link from "next/link";
import { Box } from "../components/Box";
import { ImageContainer } from "../components/ImageContainer";

const Home: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md-lg:flex-row w-screen h-full min-h-screen text-white">
        <ImageContainer />
        <section
          id="homepage"
          className="w-full md-lg:w-1/2 xl:w-2/5 p-10 xl:p-20 bg-dark flex justify-center"
        >
          <div className="w-full h-full flex flex-col justify-between items-center space-y-6">
            <header className="flex items-center">
              <span className="bg-gray rounded-circle p-3">
                <Image
                  src="/src/logos/logo-porto-itapoa.png"
                  alt="Logo Porto Itapoa"
                  width={35}
                  height={18}
                />
              </span>
              <h2 className="uppercase ml-4 font-bold tracking-widest text-light-gray">
                Brokerage
              </h2>
            </header>

            <Box backgroundColor="gray">
              <h1 className="text-center font-semibold text-4xl">
                Páginas do site
              </h1>

              <nav className="mt-10">
                <ul className="list-none">
                  <li>
                    <Link href="/login">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cadastro">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Cadastro
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/confirme-seu-cadastro">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Cadastro realizado
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cadastro-confirmado">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Cadastro confirmado
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/esqueci-minha-senha">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Esqueci minha senha
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/email-recuperacao-senha-enviado">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        E-mail de recuperação de senha enviado
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/redefinir-senha">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Redefinir senha
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/senha-alterada">
                      <a className="text-dark-blue font-bold underline text-xl my-2">
                        Senha alterada
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Box>

            <footer className="flex items-center">
              <span className="bg-gray rounded-circle flex items-center justify-center px-2 py-5">
                <Image
                  src="/src/logos/logo-prime.png"
                  alt="Logo Porto Itapoa"
                  width="46px"
                  height="21px"
                />
              </span>
              <h2 className="uppercase ml-4 font-bold tracking-widest text-light-gray">
                Prime
              </h2>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
