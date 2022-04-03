import AtIcon from "../../public/src/icons/icon-at.svg";
import PasswordIcon from "../../public/src/icons/icon-password.svg";
import { FormContainer } from "../FormContainer";
import { InputWithIcon } from "../InputWithIcon";

export const RegisterForm: React.FC = () => {
  return (
    <>
      <FormContainer id="register-form" title="Cadastro" formMethod="POST">
        <InputWithIcon
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Razão social"
          aria-label="Digite sua razão social"
          className="input"
          required
        >
          <AtIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="cnpj"
          name="cnpj"
          type="text"
          placeholder="CNPJ"
          aria-label="Digite seu CNPJ"
          className="input"
          required
        >
          <AtIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="phone"
          name="phone"
          type="tel"
          placeholder="Telefone"
          aria-label="Digite seu número de telefone"
          className="input"
          required
        >
          <AtIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="contactName"
          name="contactName"
          type="text"
          placeholder="Nome do contato"
          aria-label="Digite o nome da pessoa do contato"
          className="input"
          required
        >
          <AtIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          aria-label="Digite seu email"
          className="input"
          required
        >
          <AtIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="password"
          name="password"
          type="password"
          placeholder="Escolha uma senha"
          aria-label="Escolha uma senha"
          className="input"
          required
        >
          <PasswordIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>
        <InputWithIcon
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="Confirme sua senha"
          aria-label="Confirme sua senha"
          className="input"
          required
        >
          <PasswordIcon className="absolute my-[22px] left-4" />
        </InputWithIcon>

        <button
          type="submit"
          className="bg-blue-gradient uppercase mt-8 w-full py-4 rounded"
        >
          Enviar
        </button>
      </FormContainer>
    </>
  );
};
