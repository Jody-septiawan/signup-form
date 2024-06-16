export default function Home() {
  return (
    <main>
      <nav className="h-[7vh] border-4 flex items-center justify-between px-[20px]">
        <div>1</div>
        <div>2</div>
      </nav>
      <div className="flex border-4 border-red-500 h-[90vh] p-[20px]">
        <div className="flex-1 border-4 border-green-500">Kiri</div>
        <div className="flex-[4] border-4 border-violet-500">Tengah</div>
        <div className="flex-1 border-4 border-yellow-500 overflow-y-scroll">
          <div className="border-4 border-green-600 h-20">Ini project</div>
          <div className="border-4 border-green-600 h-20">Ini project</div>
          <div className="border-4 border-green-600 h-20">Ini project</div>
          <div className="border-4 border-green-600 h-20">Ini project</div>
          <div className="border-4 border-green-600 h-20">Ini project</div>
          <div className="border-4 border-green-600 h-20">Ini project</div>
        </div>
      </div>
    </main>
  );
}
