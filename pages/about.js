import Head from "next/head";

const About = () => {
    return ( 
        <div className="about">
            <Head>
                <title>Story</title>
            </Head>
            <p>小故事

3 年多前，有一家日本酒店將自己描述為「世界上第一家由機器人組成的酒店」，開業時馬上成為全球頭條新聞，不僅因為採用機器人員工，酒店獨特的環境配置方法也成為話題，但最近傳出這家日本酒店已經解雇數百名機器人員工，因為他們沒有把工作做好，還給人類員工找麻煩。</p>


<p>這家酒店是位於長崎豪斯登堡裡的奇怪飯店（Henn na Hotel），當時官網聲稱櫃台配置多語種機器人協助辦理入住或退房手續，衣帽間還有機器人手臂幫客人存放行李，還說到機器人雖然不是人類，但機器人帶來的有趣時刻也會溫暖你的心。此外，一旦使用臉部辨識系統註冊，將無需攜帶房間鑰匙或擔心鑰匙遺失。開幕時總裁談到未來願景，表示希望 90％ 的酒店服務工作由機器人負責。</p>

<p>但是經過 3 年多，證明機器人並不能勝任這些任務，奇怪飯店因此解雇 243 個機器人，其中一個機器人是玩偶模樣的助手，放在每個房間裡，叫做 Churi。Churi 應該要回答客人有關當地景點問題的詢問，幫客人計畫住宿。但實際上 Churi 甚至連簡單的請求都做得零零落落，比如客人問主題公園什麼時候開放這種問題都無法招架，客人反而要向人類員工尋求幫助，耽誤了他們原本的工作。
</p>
        <style jsx>
            {`{
            .about{padding:10px}
            p{padding:10px;margin:0px auto;line-height:1.6;
                text-indent: 10px;
            letter-spacing:3px
            margin-left: auto;margin-right:auto;
                max-width:1024px
            ;
    text-align:center}

            }`}
        </style>
        </div>
     );
}
 
export default About;