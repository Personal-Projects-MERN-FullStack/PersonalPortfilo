import Login from '../Component/AuthPages/Login'

const Auth = () => {
  return (
    <section className="h-screen" htmlFor="Sign in and Register page">
    <div className="px-6 h-full text-gray-800" htmlFor="Sign in and Register page">
      <div
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6" htmlFor="Sign in and Register page"
      >
        <div
          className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" htmlFor="Sign in and Register page"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample asdf" htmlFor="Sign in and Register page"
          />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0" htmlFor="Sign in and Register page">
         <Login/>
        
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default Auth