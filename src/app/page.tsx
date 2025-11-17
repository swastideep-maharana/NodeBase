import { cn } from "@/lib/utils";

const Page = ()=>{
  const someting = true;

  return(
    <div className={cn("text-7xl font-medium", someting && "text-red-500 justify-center flex items-center h-screen")}>
      Hello World!
    </div>
  )
}

export default Page;