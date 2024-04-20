import styles from "./TechPanel.module.css";

const TechPanel = () =>{
    return(
        <div class={styles.card}>
            <div class={styles.card_inner}>
            <div class={styles.card_front}>
            <p>Front Side</p>
            </div>
                <div class={styles.card_back}>
                <p>Back Side</p>
                </div>
            </div>
        </div>
    );
}

export default TechPanel;