
const BlockOfBlog = ({data}) =>{

    const { id ,Title_of_Blog,Url_Of_poster ,DOB_of_blog_post,Short_decription} = data;
return(
     
        <div key={id} className=" w-80 mx-auto  h-auto border   my-8  rounded-xl space-y-1  pb-1 shadow-2xl shadow-black">
        <img src={Url_Of_poster} alt="Poster of blog" className="w-full h-44 object-fit rounded-t-xl"/>
        <div className="bg-white">
        <p className='text-xs px-2'>{DOB_of_blog_post}</p>
         <h1 className='flex  font-semibold text-lg px-2'>{Title_of_Blog}</h1>
         <p className="break-words h-20 overflow-hidden w-full px-2">{Short_decription}</p>
         
        <div className='flex items-center'><button className='text-sm text-blue-900 rounded-xl p-1 px-2 '> Readmore </button></div>
        </div>
        </div>
      
      
);

}
export default BlockOfBlog