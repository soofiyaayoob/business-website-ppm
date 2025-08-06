export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white space-y-6">
     
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
        <span className="inline-block animate-pulse">Writen</span>{" "}
        <span className="inline-block animate-pulse delay-150">PPT</span>{" "}
        <span className="inline-block animate-pulse delay-300">Trading</span>{" "}
        <span className="inline-block animate-pulse delay-500">LLC</span>
      </h1>

     
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
