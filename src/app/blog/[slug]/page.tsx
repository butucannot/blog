"use client";
export default async function Post({params}:any) {

    console.log(params);   
    const { slug } = await params 
    const title = slug.replace(/-/g, ' ');
    console.log(slug);
    return (
        <main>
            <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">{title}</h1>
        </main>
    )
}