import styles from '../css/bouncetemp.module.css';
import { IoClose } from "react-icons/io5";


function Bouncetemp ({ onClose }){
    return(

        <div className={styles.container}>
            <div className={styles.main}>
                <div className="childBox">
                    <h1>welcome</h1>
                </div>
            </div>
            <button onClick={onClose} className={styles.btn}><IoClose /></button>
        </div>

    )
}

export default Bouncetemp;
