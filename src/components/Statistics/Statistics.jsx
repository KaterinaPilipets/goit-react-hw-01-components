import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
import { getRandomHexColor } from 'components/randomColor';
const Statistics = ({ title, stats }) => {
    return (
<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
             {stats.map(({id,label,percentage})=><li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}><span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span></li>)}   
    
  </ul>
</section>
    
    )
}
export default Statistics
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
}