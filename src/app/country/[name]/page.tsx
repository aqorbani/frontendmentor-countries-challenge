"use client";
import Information from "@/components/template/information/Information";
import { extractSlug } from "@/utils/slug";
import React from "react";

const page = ({ params }: { params: any }) => {

  //get params and pass name data
  const nameParams = params?.name;
  const name = extractSlug(nameParams);
  
  return <Information name={name} />;
};

export default page;
