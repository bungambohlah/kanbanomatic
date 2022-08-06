import type { NextPage } from "next";
import Layout from "../sections/Layout";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="pt-6 text-2xl text-gray-700 dark:text-slate-300">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <div className="pt-6 text-2xl text-gray-700 dark:text-slate-300">
          This project is still under development. Please check back soon.
        </div>
      </div>
    </Layout>
  );
};

export default Home;
