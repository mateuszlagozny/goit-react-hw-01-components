import styles from './transaction.module.css';

export const Transaction = (props) => { 
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.title}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item => {
                    return (
                        <tr key={item.id} className={styles.records}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};