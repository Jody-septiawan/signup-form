import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <h2>Grid</h2>
      <div className="grid grid-cols-6">
        <div className="col-span-3 border-2 border-yellow-500 h-20"></div>
        <div className="col-span-3 border-2 border-yellow-500 h-20"></div>
        <div className="col-span-3 border-2 border-yellow-500 h-20"></div>
        <div className="col-span-3 border-2 border-yellow-500 h-20"></div>
        <div className="col-span-3 border-2 border-yellow-500 h-20"></div>
      </div>

      <h2>Flex</h2>
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
