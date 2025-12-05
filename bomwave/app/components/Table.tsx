export default function TableOfContents() {
  const chapters = [
    {
      title:
        "Creative Content <br />   Strategy & <br />  &nbsp; &nbsp; Positioning",
      page: 226,
    },
    { title: "Branding", page: 226 },
    { title: "Visual Identity", page: 226 },
    { title: "Graphic <br />  &nbsp; &nbsp; Ecosystems", page: 226 },
    { title: "Logotypes & Marks", page: 226 },
    { title: "Packaging Design", page: 226 },
    { title: "Digital <br />  &nbsp; &nbsp; Communication", page: 226 },
    { title: "Web Design", page: 238 },
    { title: "E-commerce", page: 248 },
    { title: "Advertising", page: 262 },
    { title: "Retail & Exhibition", page: 278 },
    { title: "Events & Activation", page: 278 },
  ];

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 gap-2 text-black">
      {chapters.map((chapter, index) => (
        <div key={index} className="flex justify-between items-center">
          {/* We must use dangerouslySetInnerHTML to render the <br /> tag */}
          <span
            className="text-left text-3xl pr-7"
            dangerouslySetInnerHTML={{ __html: chapter.title }}
          />
          <span className="text-right text-xs items-end">{chapter.page}</span>
        </div>
      ))}
    </div>
  );
}
