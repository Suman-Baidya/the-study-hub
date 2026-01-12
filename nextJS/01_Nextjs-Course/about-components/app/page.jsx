import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/Suman-Baidya");
  const data = await res.json()
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  );
}
