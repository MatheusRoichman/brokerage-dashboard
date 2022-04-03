export const ImageContainer: React.FC = () => {
  return (
    <>
      <div className="relative flex w-full">
        <div className="absolute w-full h-full z-10 bg-mask"></div>
        <div className="bg-factory w-full h-[50vh] md-lg:h-full bg-no-repeat bg-cover bg-bottom flex items-end p-6 md:p-12">
          <h3 className="text-3xl font-semibold z-20">
            corretagem de armazenamento de cargas
          </h3>
        </div>
      </div>
    </>
  );
};
