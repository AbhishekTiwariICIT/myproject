/* import { useState } from 'react';
// import styles from '../css/Homepagemessage.module.css';



export function Homepagemessage(props) {

    const { messageimg } = props;
    console.log("message"+messageimg);
    const [isReadmore, setisReadmore]=useState(false);

    const handleReadMore = ()=>{
        setisReadmore(!isReadmore);
        console.log(isReadmore)
       
    }
    return (
        <>

            <div className={styles.wrapper}>
                <div className={styles.grid}>

                    <div className={styles.box}>
                        <div className={styles.title}> Message</div>
                        <div className={`${styles.content} ${styles.pmsgimgbox}`}>
                            <img src={messageimg} alt="image not found" className={styles.pmsgimg} />
                            
                        </div>
                        <div className={`${styles.content} ${isReadmore ? styles.msgdatashow : styles.msgdatahide}`}>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             </p>
                             <p>
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            </p>

                            <span className={isReadmore ? styles.extratextmore : styles.extratextless}>
                                 aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quae ducimus esse fugit error ipsam excepturi
                             aliquam illo voluptates ab quia velit nam soluta
                              fugiat incidunt, repellat similique praesentium quas ullam.
                            </span>
                            <button onClick={handleReadMore} className={styles.msgbtn}>{isReadmore ? "Read Less" : "..."}</button>
                        </div>
                    </div>

                    

                </div>
            </div>

        </>


    )
} */