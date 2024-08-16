import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='w-full items-center justify-between sm:justify-between flex flex-col sm:gap-x-4  gap-y-4 sm:flex-row md:grid-cols-1 '>

          <div className='mt-5'>
            <Link
              to='/'
              className='sm:self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Arsh's
              </span>
              Blog
            </Link>
          </div>

          {/* ------------ footer links -------------- */}

          <div className=' sm:w-[60%] w-full grid grid-cols-2 justify-items-center mt-4 sm:grid-cols-3  gap-y-8 sm:gap-6'>

            <div className=''>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Arsh's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/Arsh-iqbal'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>



        </div>

        <Footer.Divider />


        <div className='w-full flex flex-col gap-y-2  sm:flex-row items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Arsh's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-8 sm:mt-0 mt-4 sm:justify-center justify-between  w-[80%] sm:w-max ">
            <Footer.Icon href='https://www.facebook.com/arsh.iqbal.9066' icon={BsFacebook}/>
            <Footer.Icon href='https://www.linkedin.com/in/arsh-iqbal-338485313' icon={BsLinkedin}/>
            <Footer.Icon href='https://x.com/Arsh_024' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/Arsh-Iqbal' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}