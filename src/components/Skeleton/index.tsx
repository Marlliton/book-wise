export function Skeleton() {
  return (
    <div className="grid grid-cols-[232px_1fr] h-screen gap-24 p-5">
      <aside className="animate-pulse flex flex-col items-center bg-gray-700 rounded-xl py-10 px-10">
        <div className="flex flex-col flex-1 gap-4 w-full">
          <div className="bg-gray-600 rounded-md h-16 w-full" />
          <span className="bg-gray-600 rounded-md h-8 w-full" />
          <span className="bg-gray-600 rounded-md h-8 w-full" />
          <span className="bg-gray-600 rounded-md h-8 w-full" />
        </div>

        <div className="flex w-full items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
        </div>
      </aside>
      <div className="animate-pulse flex overflow-hidden gap-8">
        <div className="flex-1">
          <div className="flex gap-3 rounded-md bg-gray-700 h-48 p-4">
            <div className="bg-gray-600 w-28 rounded"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <p className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <footer className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
            </div>
          </div>

          <div className="flex gap-3 rounded-md bg-gray-700 h-48 p-4 mt-12">
            <div className="bg-gray-600 w-28 rounded"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <p className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <footer className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
            </div>
          </div>

          <div className="flex gap-3 rounded-md bg-gray-700 h-48 p-4 mt-12">
            <div className="bg-gray-600 w-28 rounded"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <p className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
              <footer className="flex-1 bg-gray-600 rounded-md h-4 w-full" />
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-5 items-center w-96">
          <div className="bg-gray-700 rounded-xl h-36 w-full" />
          <div className="bg-gray-700 rounded-xl h-36 w-full" />
          <div className="bg-gray-700 rounded-xl h-36 w-full" />
        </aside>
      </div>
    </div>
  );
}
