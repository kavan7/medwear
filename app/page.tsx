import CombinedNavbar from "@/components/ui/Navbar";
import HomeClient from "@/components/HomeClient";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  const navItems = [
    { name: "About", link: "#about" },
        { name: "FAQ", link: "faq" },
    { name: "Contact", link: "#contact" },
    
  ];

  return (
    <div className="bg-slate-50">
      <CombinedNavbar navItems={navItems} user={user} isAdmin={isAdmin} />
      <HomeClient />
    </div>
  );
}
