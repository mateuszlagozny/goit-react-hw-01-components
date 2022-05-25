import styles from './statistics.module.css';


export const Statistics = (props) => { 
    return (
        <section className={styles.statistics}>
            {props.title && (
                <h2 className={styles.title}>{props.title}</h2>
            )}
            <ul className={styles.statList}>
                {props.stats.map(stat => {
                    return (
                        <li key={stat.id} className={styles.item}>
                            <span className="">{stat.label}</span>
                            <span className="">{stat.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Statistics;