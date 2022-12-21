interface IProps {
  children: any;
}

export default function Centered({ children }: IProps) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        {children}
      </section>
    </>
  );
}
