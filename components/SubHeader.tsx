interface IProps {
  text: any;
}

export default function SubHeader({ text }: IProps) {
  return (
    <div className="text-center font-header font-bold text-lg text-slate-400 mb-4 ">
      {text}
    </div>
  );
}
