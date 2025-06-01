type Props = {
  title: string;
  content: string;
};

export const Card = ({ title, content }: Props) => {
  return (
    <div className="w-[300px] min-h-[240px] bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="text-xl font-semibold text-gray-800 mb-3">{title}</div>
      <div className="text-base text-gray-600 leading-relaxed">{content}</div>
    </div>
  );
};
