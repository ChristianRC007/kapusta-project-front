import PropTypes from 'prop-types';
import styles from './container.module.scss';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;