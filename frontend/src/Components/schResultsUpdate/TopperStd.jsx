import styles from '../../css/schResultsUpdate/topperStd.module.css';



function TopperStd({ data }) {

    const linkdata = [
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        },
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        },
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        }
    ]

    return (
        <div className={styles.container}>

            {/* Topper Section */}

            <div className={styles.section}>
                <div className={styles.title}>
                    <span>SVN TOPPER</span>
                </div>

                <div className={styles.SectionSubTitleBox}>

                    {data.map((item, index) => (
                        <div key={index} className={styles.topperStdContent}>

                            <div className={styles.sectionSubTitle}>
                                <span>{item.SubTitle}</span>
                            </div>

                            {item.toppers.map((std, i) => (

                                <div key={i} className={styles.stdImgSection}>

                                    <div className={`${styles.imgbox} ${styles.stdbox}`}>
                                        <img src={std.url} alt={std.name} />
                                    </div>

                                    <div className={`${styles.stdDetails} ${styles.stdbox}`}>
                                        <table className={styles.stdTable}  width="100%">
                                            <tbody>

                                                <tr>
                                                    <td>Name</td>
                                                    <td>:</td>
                                                    <td>{std.name}</td>
                                                </tr>

                                                <tr>
                                                    <td>Percentage</td>
                                                    <td>:</td>
                                                    <td>{std.per}%</td>
                                                </tr>

                                                <tr>
                                                    <td>Rank</td>
                                                    <td>:</td>
                                                    <td>{std.rank}</td>
                                                </tr>

                                                <tr>
                                                    <td>District Rank</td>
                                                    <td>:</td>
                                                    <td>{std.disRank}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            ))}

                        </div>
                    ))}

                </div>
            </div>


            {/* Latest News */}

            <div className={styles.latestNewsSection}>
                <div className={styles.title}>
                    <span>Latest News</span>
                </div>

                <div className={styles.latestNewsSectionContent}>
                    <div className={styles.linkContent}>

                        {linkdata.map((item, index) => (
                            <div key={index} className={styles.newsLinkChildSection}>
                                <div className={styles.NewsBullet}></div>
                                <div className={styles.Line}></div>
                                <span>{item.content}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopperStd;
