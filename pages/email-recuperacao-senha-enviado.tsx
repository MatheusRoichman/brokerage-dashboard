import Image from "next/image";
import Link from "next/link";
import { Box } from "../components/Box";
import { ImageContainer } from "../components/ImageContainer";

const RecoveryEmailSentPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md-lg:flex-row w-screen h-full min-h-screen text-white">
        <ImageContainer />
        <section
          id="email-sent"
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
                Esqueci minha senha
              </h1>

              <p className="mt-10 md:mt-20">
                Enviamos um e-mail para você. Siga as instruções contida nela
                para resetar sua senha.
              </p>

              <Link href="/login">
                <a className="text-dark-blue font-extrabold underline text-2xl mt-4 mb-20">
                  Voltar para tela de login
                </a>
              </Link>
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

export default RecoveryEmailSentPage;
