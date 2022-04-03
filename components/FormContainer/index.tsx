import { Box } from "../Box";

export const FormContainer: React.FC<{
  children: React.ReactNode;
  title: string;
  id: string;
  formMethod: string;
}> = ({ children, title, id, formMethod }) => {
  return (
    <>
      <section className="w-full" id={id}>
        <Box textCentered backgroundColor="gray">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <form method={formMethod} className="mt-14 space-y-4">
            {children}
          </form>
        </Box>
      </section>
    </>
  );
};
