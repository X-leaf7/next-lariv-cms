export const revalidate = 0;
import AboutComponent from "@/components/AboutComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

// async function getData() {
//   const prisma = new PrismaClient();
// let Details = (
//   await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json()
// )["data"];
//   let about_page_data = await prisma.about_page.findMany();
//   let experience_data = await prisma.experience.findMany();
//   let education_data = await prisma.education.findMany();
//   let skill_data = await prisma.skill.findMany();

//   let data = { about_page_data, experience_data, education_data, skill_data }

//   return data;
// }

async function getAbout_pageFun() {
  const prisma = new PrismaClient();
  let about_page_data = await prisma.about_page.findMany();

  let data = about_page_data;

  return data;
}
async function experienceFun() {
  const prisma = new PrismaClient();
  let experience_data = await prisma.experience.findMany();

  let data = experience_data;

  return data;
}
async function educationFun() {
  const prisma = new PrismaClient();
  let education_data = await prisma.education.findMany();

  let data = education_data;

  return data;
}
async function skillFun() {
  const prisma = new PrismaClient();
  let skill_data = await prisma.skill.findMany();

  let data = skill_data;

  return data;
}

export default async function Page() {
  const getAbout_page = await getAbout_pageFun();
  const experience = await experienceFun();
  const education = await educationFun();
  const skill = await skillFun();
  let data = { getAbout_page, experience, education, skill };

  return (
    <main>
      <MasterLayout>
        <AboutComponent data={data} />
      </MasterLayout>
    </main>
  );
}
