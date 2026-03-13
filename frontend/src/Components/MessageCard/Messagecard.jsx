import { useState } from "react";

import styles from '../../css/messagecardCSS/messageCard.module.css';
function Messagecard(props) {

    const { messageimg, title, topcontent, bottomcontent } = props;
    console.log("message" + messageimg);
    const [isReadmore, setisReadmore] = useState(false);

    const handleReadMore = () => {
        setisReadmore(!isReadmore);
        console.log(isReadmore)

    }

    return (
        <>

        <div className={styles.grid}>

            <div className={styles.box}>
                <div className={styles.title}> {title}</div>
                <div className={`${styles.content} ${styles.pmsgimgbox}`}>
                    <img src={messageimg} alt="image not found" className={styles.pmsgimg} />

                </div>
                <div className={`${styles.content} ${isReadmore ? styles.msgdatashow : styles.msgdatahide}`}>
                    <p> {topcontent}
                        {' '}

                    </p>


                    <span className={isReadmore ? styles.extratextmore : styles.extratextless}>
                        {bottomcontent}
                    </span>
                    <button onClick={handleReadMore} className={styles.msgbtn}>{isReadmore ? "Read Less" : "..."}</button>
                </div>
            </div>


        </div>

          

</>

    )
}

export default Messagecard;