import NavbarItem from './NavbarItem';
export default function Navbar() {
  return (
    <div className='flex p-4 lg:text-lg justify-center gap-10 mt-5'>
      <NavbarItem title='Trending' param='trending' />
      <NavbarItem title='Top Rated' param='rated' />
    </div>
  );
}