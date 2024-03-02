import { Sidebar, TopMenu } from "@/components";
import "../assets/css/styles.css";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  
  return (
    <main className="min-h-screen ">
        <TopMenu/>
        <Sidebar/>
        <div className="home__container">
          {children}
        </div>
        
    </main>
  );
}