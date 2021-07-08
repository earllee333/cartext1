import Image from 'next/image'
import Head from 'next/head'
const SliderPho = () => {
    return ( 
        <div className="slider">
            <Head>
            </Head>
            <div className="slides">
                <input type="radio" name='radio-btn' id="radio1"></input>
                <input type="radio" name='radio-btn' id="radio2"></input>
                <input type="radio" name='radio-btn' id="radio3"></input>
                <input type="radio" name='radio-btn' id="radio4"></input>
                <div className="slide first">
                    <Image width={450} height={300} src="/benz-1.jpg">
                    </Image>
                </div>
                <div className="slide">
                <Image width={450} height={300} src="/benz-2.jpg">
                    </Image>
                </div>
                <div className="slide">
                <Image width={450} height={300} src="/benz-3-re.jpg">
                    </Image>
                </div>
                <div className="slide">
                <Image width={450} height={300} src="/bmw-z4.jpg">
                    </Image>
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>
            </div>
            <script  src='./script.js' type="text/javascript">
      
      </script>
        </div>
     );
}
 
export default SliderPho;