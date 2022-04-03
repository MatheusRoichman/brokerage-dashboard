export const Box: React.FC<{
  children: React.ReactNode;
  textCentered?: boolean;
  backgroundColor?: string;
}> = ({ backgroundColor, children, textCentered }) => {
  return (
    <>
      <div className={`bg-${backgroundColor}` + " py-12 px-5 md:px-10 rounded-lg flex flex-col " + (textCentered ? "text-center" : "text-left")}>
        {children}
      </div>
    </>
  );
};
