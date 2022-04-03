import Image from "next/image";
import { Box } from "../components/Box";
import { ImageContainer } from "../components/ImageContainer";
import { InputWithIcon } from "../components/InputWithIcon";
import PasswordIcon from "../public/src/icons/icon-password.svg";

const PasswordResetPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md-lg:flex-row w-screen h-full min-h-screen text-white">
        <ImageContainer />
        <section
          id="reset-password"
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
              <h1 className="font-semibold text-4xl">Escolha uma nova senha</h1>

              <form id="password-reset-form" className="mt-16" method="POST">
                <div className="space-y-4">
                  <InputWithIcon
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nova senha"
                    aria-label="Digite sua nova senha"
                    className="input"
                    required
                  >
                    <PasswordIcon className="absolute my-[22px] left-4" />
                  </InputWithIcon>

                  <InputWithIcon
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="Confirme sua nova senha"
                    aria-label="Confirme sua nova senha"
                    className="input"
                    required
                  >
                    <PasswordIcon className="absolute my-[22px] left-4" />
                  </InputWithIcon>
                </div>

                <button
                  type="submit"
                  className="bg-blue-gradient uppercase w-full py-4 my-12 rounded"
                >
                  Alterar
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

export default PasswordResetPage;
