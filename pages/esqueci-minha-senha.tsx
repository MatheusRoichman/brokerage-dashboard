import Image from "next/image";
import { Box } from "../components/Box";
import { ImageContainer } from "../components/ImageContainer";
import { InputWithIcon } from "../components/InputWithIcon";
import AtIcon from "../public/src/icons/icon-at.svg";

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md-lg:flex-row w-screen h-full min-h-screen text-white">
        <ImageContainer />
        <section
          id="forgot-my-password"
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

            <Box textCentered backgroundColor="gray">
              <form
                id="password-recovery-form"
                method="POST"
                className="space-y-10"
              >
                <h1 className="font-semibold text-4xl">Esqueci minha senha</h1>
                <p className="text-left">
                  Digite o e-mail cadastrado para recuperar sua senha.
                </p>
                <InputWithIcon
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  aria-label="Digite seu e-mail"
                  className="input"
                  required
                >
                  <AtIcon className="absolute my-[22px] left-4" />
                </InputWithIcon>
                <button
                  type="submit"
                  className="bg-blue-gradient uppercase mt-4 w-full py-4 rounded"
                >
                  Entrar
                </button>
              </form>
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

export default ForgotPasswordPage;
