import Head from "next/head";

interface IProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="w-full relative h-screen bg-gray-800">
        {children}
      </section>
    </>
  );
}
