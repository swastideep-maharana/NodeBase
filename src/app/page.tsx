import { getQueryClient, trpc } from "@/trpc/server";
import { cn } from "@/lib/utils";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async ()=>{
  const queryClient = getQueryClient();
  
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return(
    <div className={cn("text-7xl font-medium", "text-red-500 justify-center flex items-center h-screen")}>
      <HydrationBoundary state={dehydrate(queryClient)}> 
        <Suspense fallback={<p>Loading...</p>}>
        <Client/>
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}

export default Page;