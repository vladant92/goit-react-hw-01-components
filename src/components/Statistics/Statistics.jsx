import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title && title}</h2>
      <ul className={styles.statList}>
        {stats.map(item => {
          const randomColor = getRandomColor();
          const listItemStyle = {
            backgroundColor: randomColor,
          };

          return (
            <li className={styles.item} key={item.id} style={listItemStyle}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
export default Statistics;
