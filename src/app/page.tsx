import Header from "@/modules/header/components/Header/Header";
import Icon from "@/shared/components/Icon/Icon";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home page</h1>
        <Icon iconName="icon-heart" width={15} />
      </main>
    </>
  );
}
