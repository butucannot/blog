export default function Blog() {
  const posts = [
    {
      name: "who is it",
      img: "/mujik.png",
      created_at: "2025.01.03",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis mattis nunc, sed faucibus nibh feugiat at. Phasellus molestie lectus odio, dignissim tempor libero pellentesque vel. Vivamus a erat vel massa scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce cursus diam eget purus pretium, eu tempor lacus finibus. Duis interdum sit amet lorem ac mollis. Aliquam eu faucibus ligula. Phasellus ultricies dictum porta. Vivamus non dapibus nunc. Aenean commodo sapien non tincidunt bibendum.",
    },
    {
      name: "who is it",
      img: "/1.png",
      created_at: "2025.01.03",
      content: "some lopng text here",
    },
    {
      name: "who is it",
      img: "/2.png",
      created_at: "2025.01.03",
      content: "some lopng text here",
    },
  ];
  return (
    <>
      <main className="bg-[#1D0202]">
        <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">BLOG</h1>
        <div className="grid grid-cols-3 gap-20 ">
          {posts.map((obj, index) => (
              <div key={index} className="bg-[#D9D9D9] h-[300px] rounded-[30px] p-[20px] overflow-hidden hover:bg-[#D9DFD9] cursor-pointer transition duration-300 hover:scale-[1.01]"> 
                <img className="h-[140px] w-[100%] rounded-[30px]" src={obj.img}/>
                <div className="flex justify-center text-[20px] font-bold ">{obj.name}</div>
                <div>{obj.content}</div>
              </div>
          ))}
        </div>
      </main>
      <footer></footer> 
    </>
  );
}
