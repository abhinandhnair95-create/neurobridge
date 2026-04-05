export const metadata = {
  title: "NeuroBridge — Free ADHD Screening",
  description: "Take a free AI-powered ADHD screening based on clinical research. Understand your mind in 5 minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
