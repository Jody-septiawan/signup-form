import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  //   const name = router.query.id;

  console.log(router.query);

  return <main> Project with id & name</main>;
}
