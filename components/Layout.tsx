export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <body className="flex items-center justify-center w-full h-full">
        {children}
      </body>
    </div>
  );
}
