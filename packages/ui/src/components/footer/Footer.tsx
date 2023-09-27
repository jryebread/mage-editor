import {useShortcuts} from '../../contexts/shortcuts';
import {Versions} from './Versions';
import styles from './Footer.module.scss';

export function Footer() {
  const {shortcuts, currentModule} = useShortcuts();
  return (
    <div className={styles.root}>

      <Versions />
    </div>
  );
}
