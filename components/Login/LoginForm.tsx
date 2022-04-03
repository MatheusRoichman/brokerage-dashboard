import Link from "next/link";
import AtIcon from "../../public/src/icons/icon-at.svg";
import PasswordIcon from "../../public/src/icons/icon-password.svg";
import { FormContainer } from "../FormContainer";
import { InputWithIcon } from "../InputWithIcon";

export const LoginForm: React.FC = () => {
  return (
    <>
      <FormContainer
        id="login-form"
        title="Faça seu login na plataforma"
        formMethod="POST"
      >
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

        <InputWithIcon
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          aria-label="Digite sua senha"
          className="input"
          required
        >
          <PasswordIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>

        <div className="text-left">
          <Link href="/esqueci-minha-senha">
            <a className="no-underline text-dark-blue text-base font-semibold">
              Esqueci minha senha
            </a>
          </Link>
        </div>

        <button
          type="submit"
          className="bg-blue-gradient uppercase mt-4 w-full py-4 rounded"
        >
          Entrar
        </button>
      </FormContainer>
    </>
  );
};
