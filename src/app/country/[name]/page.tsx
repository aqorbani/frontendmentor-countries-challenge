"use client";
import Information from "@/components/template/information/Information";
import React from "react";

const page = ({ params }: { params: any }) => {
  const nameParams = params?.name;
  const name = nameParams.split("-").join(" ");
  return <Information name={name} />;
};

export default page;
