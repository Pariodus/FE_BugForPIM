import styles from './detailpage.module.css'
import Image from 'next/image'

export default function DetailCard(){
    return (
        <div>
            <div className={styles.card2}>
                <Image className={styles.img2} src = {'/img/detail.jpg'}
                alt = 'Product Picture'
                fill = {true}
                objectFit='cover'/>
                <div className={styles.card11}>
                Purus faucibus ornare suspendisse sed nisi. Leo integer malesuada nunc vel risus commodo. 
                Hendrerit dolor magna eget est. Tristique magna sit amet purus gravida quis blandit turpis. 
                Consequat id porta nibh venenatis. Eu consequat ac felis donec et odio pellentesque. Posuere urna nec tincidunt praesent semper feugiat nibh sed. 
                Molestie a iaculis at erat pellentesque. Turpis tincidunt id aliquet risus feugiat.
                </div>
            </div>

            <div className={styles.card1}>
                <Image className={styles.img1} src = {'/img/detail2.jpg'}
                    alt = 'Product Picture'
                    fill = {true}
                    objectFit='cover'/>
                <div className={styles.card12}>
                    <div className={styles.card122}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Pretium nibh ipsum consequat nisl. Id semper risus in hendrerit gravida rutrum quisque non. 
                    Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ultricies mi eget mauris pharetra. Sapien 
                    pellentesque habitant morbi tristique senectus et netus et.
                    </div>
                </div>
                </div>

            <div className={styles.card3}>
                <Image className={styles.img2} src = {'/img/detail3.jpg'}
                    alt = 'Product Picture'
                    fill = {true}
                    objectFit='cover'/>
                    <div className={styles.card11}>
                    Convallis aenean et tortor at risus viverra adipiscing at. In nibh mauris cursus mattis. 
                    Pretium fusce id velit ut tortor. Ipsum dolor sit amet consectetur adipiscing elit duis. 
                    Est sit amet facilisis magna etiam tempor orci eu lobortis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. 
                    Enim ut sem viverra aliquet eget sit.
                    </div>
            </div>
        </div>
    );
}