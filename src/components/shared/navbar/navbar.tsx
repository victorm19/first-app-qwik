import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../../icons/qwik';
import styles from './navbar.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link href='/' title="qwik">
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>
        <li>
            <Link href='/dashboard/' title='dashboard'>Dashboard</Link>
          </li>
        <li>
            <Link href='/login/' title='Login'>Login</Link>
          </li>
        <li>
            <Link href='/counter/' title='Counter'>Counter</Link>
          </li>
          <li>
            <Link href='/pokemons/list-ssr/' title='SSR-List'>SSR-List</Link>
          </li>
          <li>
            <Link href='/pokemons/list-client/' title='Client-List'>Client-List</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
