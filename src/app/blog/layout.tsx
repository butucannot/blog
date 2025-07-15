
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="lg:px-[20%] sm:px-[0%] min-h-screen bg-[#1D0202]">{children}</div>
  );
}
