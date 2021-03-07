import Layout from "../components/Layout";
import Project from "../components/Project";

export default function DonatePage() {
  return (
    <Layout>
      <section className="mt-24 h-12 flex justify-center items-center">
        <p>Projects You Can Donate</p>
      </section>
      <section class="bg-white">
        <section className="container mx-auto flex justify-center flex-wrap pt-4 pb-12">
          <Project donate/>
          <Project donate/>
          <Project donate/>
          <Project donate/>
          <Project donate/>
          <Project donate/>
          <Project donate/>
          <Project donate/>
          
        </section>
      </section>
    </Layout>
  );
}
