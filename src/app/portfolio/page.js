export const revalidate = 0; 
import PortfolioComponent from "@/components/PortfolioComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";


async function getData() {
  const prisma = new PrismaClient();
  let portfolio_page_data = await prisma.portfolio_page.findMany()
  let portfolio_data = await prisma.portfolio.findMany()

  return { portfolio_page_data, portfolio_data }
}

export default async function Service() {
  const data = await getData()
  return (
    <main>
      <MasterLayout>
        <PortfolioComponent data={data} />
      </MasterLayout>
    </main>
  );
}
