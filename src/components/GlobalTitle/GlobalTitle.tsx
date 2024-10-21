const GlobalTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl lg:text-4xl font-bold text-qur-1 m-auto w-fit mb-6 border-qur-1 border-e-4 border-b-4 rounded-lg p-3">
      {title}
    </h1>
  );
};

export default GlobalTitle;
