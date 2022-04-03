import Image from "next/image";
import { ImageContainer } from "../ImageContainer";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md-lg:flex-row-reverse w-screen h-full text-white">
        <ImageContainer />
        <section
          id="register"
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

            <RegisterForm />

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
