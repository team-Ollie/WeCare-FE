export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <body className="flex items-center justify-center w-full h-full">
        {children}
      </body>
    </div>
  );
}
