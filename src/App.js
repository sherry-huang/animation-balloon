import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.sky}>
                <div className={styles['circle-wrapper']}>
                    <div className={styles['cloud-box']}>
                        <div className={styles.cloud} />
                        <div className={styles.cloud} />
                        <div className={styles.cloud} />
                    </div>
                    <div className={styles.balloon}>
                        <div className={styles['balloon-circle']} />
                        <div className={styles['balloon-triangle']} />
                        <div className={styles['balloon-line-box']}>
                            <div className={styles['balloon-line']} />
                            <div className={styles['balloon-line']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
