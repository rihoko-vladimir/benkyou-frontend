import KanjiInfo from "../../../KanjiInfoComponent/kanjiInfo";
import Kanji from "../../../../Models/kanji"

const AboutPageContent = () => {
    return <KanjiInfo kanjiObject={new Kanji("日", ["ニチ", "ジツ", "ニ"], ["ひ", "ほ"])}/>
}

export default AboutPageContent;