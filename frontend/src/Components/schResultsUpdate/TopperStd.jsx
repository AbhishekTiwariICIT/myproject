import styles from '../../css/schResultsUpdate/topperStd.module.css';

function TopperStd({ data }) {




    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <span>SVN TOPPER</span>
                </div>
                {data.map((item) => (
                    <div className={styles.sectionSubTitle}>
                        <span>{item.SubTitle}</span>
                    </div>

                ))}
                <div className={styles.grid}>
                </div>
            </div>
            <div className={styles.latestNewsSection}>
                <div className={styles.title}>
                    <span>Latest News</span>
                </div>
                <div className={styles.latestNewsSectionSubTitle}>
                    <span></span>
                </div>
            </div>
        </div>


    )
}

export default TopperStd;