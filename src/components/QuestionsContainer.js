
const QuestionsContainer = ({children, headline}) => {
  return (
    <div className="border border-gray-200 rounded-lg py-4 my-4">
      <h2 className="text-center">{headline}</h2>
      <div className="px-10 py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
       {children}
      </div>
    </div>
  );
}

export default QuestionsContainer