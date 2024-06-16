import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const name = router.query.name;

  console.log(router.query);

  return <main> Project with name: {name}</main>;
}
