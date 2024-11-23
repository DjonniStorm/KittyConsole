import { Metadata } from "next";

export const metadata: Metadata = {
    title: "dashboard",
    description: "123s"
}


export default function DashBoardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="body">
          {children}
        </body>
      </html>
    );
  }