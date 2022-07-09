const BlockOfBlog = ({data}) =>{
    const { id ,Title_of_Blog,Url_Of_poster ,DOB_of_blog_post} = data
return(
     <div className="" key={id}>
        <div className=" w-72 mx-auto  h-auto border py-1 px-1 border-black  rounded-lg space-y-4 pb-2 ">
        <img src={Url_Of_poster} alt="Poster of blog" className="w-full h-44 object-fit "/>
         <h1 className='flex justify-center font-bold text-xl'>{Title_of_Blog}</h1>
         <h1 className='flex justify-center font-thin'>{DOB_of_blog_post}</h1>
        <div className='flex justify-center'><button className=' mx-auto rounded-xl p-2 shadow-2xl shadow-black '> Show more </button></div>
        </div>
      </div>
);

}
export default BlockOfBlog