import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import ListNewsContainer from "@/Components/ListNewsContainer/ListNewsContainer";

export default function NewsPage() {

  return (
    <div className="flex flex-col justify-center">
      <div className="h-[30px]" />
      <BasicTitle text="Новости" />
      <ListNewsContainer />
    </div>
  );
};
