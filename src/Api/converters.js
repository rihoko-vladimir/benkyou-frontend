import Card from "../Models/card";
import Kanji from "../Models/kanji";

export const convertSetFromApplicationToRequest = (set) => (
    {
        name: set.name,
        description: set.description,
        kanjiList: [...set.kanjiList.map(kanji => ({
            kanji: kanji.kanji,
            kunyoumiReadings: kanji.kunyoumi.map(reading => ({reading})),
            onyoumiReadings: kanji.onyoumi.map(reading => ({reading}))
        }))]
    })

export const convertSetFromRequestToApplication = (request) => new Card(request.id, request.authorId, request.name, request.description, "Me",
    request.kanjiList.map(
        unmappedKanji =>
            new Kanji(unmappedKanji.kanji,
                unmappedKanji.kunyoumiReadings.map(
                    unmappedKunyomi =>
                        unmappedKunyomi.reading),
                unmappedKanji.onyoumiReadings.map(
                    unmappedOnyomi =>
                        unmappedOnyomi.reading))));