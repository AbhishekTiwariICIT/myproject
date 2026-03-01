import styles from '../../css/schResultsUpdate/topperStd.module.css';

function TopperStd({ data }) {




    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <span>SVN TOPPER</span>
                </div>
                <div className={styles.SectionSubTitleBox}>
                    {data.map((item) => (
                        <div className={styles.sectionSubTitle}>
                            <span>{item.SubTitle}</span>
                        </div>

                    ))}
                </div>
                <div className={styles.grid}>
                </div>
            </div>
            <div className={styles.latestNewsSection}>
                <div className={styles.title}>
                    <span>Latest News</span>
                </div>
                <div className={styles.latestNewsSectionContent}>
                   <div className={styles.linkContent}>
                    <p><a href="###">hello</a></p>
                    <p><a href="###">hello</a></p>
                    <p><a href="###">hello</a></p>
                    
                   </div>
                </div>
            </div>
        </div>


    )
}

export default TopperStd;