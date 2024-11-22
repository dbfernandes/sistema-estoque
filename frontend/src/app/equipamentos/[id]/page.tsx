"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();

  return <h1>{params?.id}</h1>;
};

export default Page;
