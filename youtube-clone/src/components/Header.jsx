import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header>
      <h1>
        <span style={{ color: 'red' }}><img src={logo} style={{ width: '70px', height: 'auto' }}/> </span>
        YouTube
      </h1>
    </header>
  );
}
