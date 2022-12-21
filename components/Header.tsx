interface IProps {
  text: any;
}

export default function Header({ text }: IProps) {
  return (
    <div className="text-center font-header font-bold text-3xl text-white mb-4 ">
      {text}
    </div>
  );
}
